import {
  Pinecone,
  PineconeRecord,
  RecordValues,
} from "@pinecone-database/pinecone";
import { downloadFromS3 } from "./s3-server";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import {
  Document,
  RecursiveCharacterTextSplitter,
} from "@pinecone-database/doc-splitter";
import { getEmbeddings } from "./embeddings";
import md5 from "md5";
import { Vector } from "@pinecone-database/pinecone/dist/pinecone-generated-ts-fetch/data";
import { convertToAscii } from "@/lib/utils";

export const getPineconeClient = () => {
  return new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });
};

type PDFPage = {
  pageContent: string;
  metadata: {
    loc: { pageNumber: number };
  };
};

export async function loadS3IntoPinecone(fileKey: string) {
  //1. obtain the pdf file from s3 -> download and read from pdf
  console.log("downloading s3 into file system");
  const file_name = await downloadFromS3(fileKey);
  if (!file_name) {
    throw new Error("could not download from s3");
  }
  console.log("loading pdf into memory" + file_name);
  const loader = new PDFLoader(file_name);
  const pages = (await loader.load()) as PDFPage[];

  //2.split and segment the pdf into documents
  //pages = Array(13)
  const documents = await Promise.all(pages.map(prepareDocument));
  //pages = Array(200)

  //3. Vectorize andembed individual documents
  const vectors = await Promise.all(documents.flat().map(embedDocument));

  //4. Upload to Pinecone
  const client = await getPineconeClient();
  const pineconeIndex = client.Index("interview-expert");
  console.log("uploading to pinecone");
  const namespace = pineconeIndex.namespace(convertToAscii(fileKey));

  console.log("inserting vectors into pinecone");
  await namespace.upsert(
    vectors.map((vector) => ({
      ...vector,
      metadata: {
        id: "",
        values: [],
        text: "",
        pageNumber: 0,
      },
    }))
  );

  return documents[0];
}

async function embedDocument(doc: Document): Promise<Vector> {
  try {
    const embeddings = await getEmbeddings(doc.pageContent);
    const hash = md5(doc.pageContent);

    return {
      id: hash,
      values: embeddings,
      metadata: {
        id: "", // Add a default value for the id property
        values: [], // Add a default value for the values property
        text: doc.metadata.text,
        pageNumber: doc.metadata.pageNumber,
      } as PineconeRecord,
    };
  } catch (error) {
    console.log("error embedding document", error);
    throw error;
  }
}

export const truncateStringByBytes = (str: string, bytes: number) => {
  const enc = new TextEncoder();
  return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
};

async function prepareDocument(page: PDFPage) {
  let { pageContent, metadata } = page;
  pageContent = pageContent.replace(/\n/g, "");
  // split the docs
  const splitter = new RecursiveCharacterTextSplitter();
  const docs = await splitter.splitDocuments([
    new Document({
      pageContent,
      metadata: {
        pageNumber: metadata.loc.pageNumber,
        text: truncateStringByBytes(pageContent, 36000),
      },
    }),
  ]);
  return docs;
}
