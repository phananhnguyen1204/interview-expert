import { Button } from "@/components/ui/button";
import { FileUpload } from "../FileUpload";

export default function ChatPDFPage() {
  return (
    <div className="w-screen min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 p-4 text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Chat with any PDF
            </h1>
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-500">
            Join milions of students to instantly answer questions and
            understand your own PDF files with Interview Expert
          </p>
          <div className="flex mt-5">
            <Button>Go to Chats</Button>
          </div>

          <div className="w-full mt-4">
            <FileUpload />
          </div>
        </div>
      </div>
    </div>
  );
}
