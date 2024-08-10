//this will only run on the server side
import { S3 } from "@aws-sdk/client-s3";
import fs from "fs";
export async function downloadFromS3(file_key: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const s3 = new S3({
        region: "us-east-2",
        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
          secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
        },
      });
      const params = {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
        Key: file_key,
      };

      //get object from s3 bucket
      //this object will contain information about the pdf
      const obj = await s3.getObject(params);
      const file_name = `/Users/phananhnguyen/Desktop/Coding/interview-expert/tmp/pdf/${Date.now().toString()}.pdf`;

      if (obj.Body instanceof require("stream").Readable) {
        // AWS-SDK v3 has some issues with their typescript definitions, but this works
        // https://github.com/aws/aws-sdk-js-v3/issues/843
        //open the writable stream and write the file
        const file = fs.createWriteStream(file_name);
        file.on("open", function (fd) {
          // @ts-ignore
          obj.Body?.pipe(file).on("finish", () => {
            return resolve(file_name);
          });
        });
        // obj.Body?.pipe(fs.createWriteStream(file_name));
      }
    } catch (error) {
      console.error(error);
      reject(error);
      return null;
    }
  });
}

// downloadFromS3("uploads/1693568801787chongzhisheng_resume.pdf");
