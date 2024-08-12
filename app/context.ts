import { Pinecone } from "@pinecone-database/pinecone";
import { getEmbeddings } from "./embeddings";
import { convertToAscii } from "@/lib/utils";

export async function getMatchesFromEmbeddings(
  embeddings: number[],
  fileKey: string
) {
  try {
    const client = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    });
    const pineconeIndex = await client.index("interview-expert");
    const namespace = pineconeIndex.namespace(convertToAscii(fileKey));
    const queryResult = await namespace.query({
      topK: 5,
      vector: embeddings,
      includeMetadata: true,
    });
    return queryResult.matches || [];
  } catch (error) {
    console.log("error querying embeddings", error);
    throw error;
  }
}

//we need to get the namespace, so we dont fetch the information from other pdf
export async function getContext(query: string, fileKey: string) {
  console.log("query", query);
  const queryEmbeddings = await getEmbeddings(query);
  console.log("queryEmbeddings", queryEmbeddings);
  const matches = await getMatchesFromEmbeddings(queryEmbeddings, fileKey);
  console.log("matches", matches);

  const qualifyingDocs = matches.filter(
    (match) => match.score && match.score > 0.4
  );
  console.log("qualifyingDocs", qualifyingDocs);

  type Metadata = {
    text: string;
    pageNumber: number;
  };

  let docs = qualifyingDocs.map((match) => (match.metadata as Metadata).text);
  console.log("docs", docs);
  // 5 vectors
  return docs.join("\n").substring(0, 3000);
}
