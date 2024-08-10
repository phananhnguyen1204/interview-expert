import ChatSideBar from "@/components/ChatSideBar";
import { db } from "@/utils/db";
import { chats } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    chatId: string;
  };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
  // const { userId } = await auth();
  // if (!userId) {
  //   return redirect("/sign-in");
  // }
  const userId = "bc837796-abd8-477e-acbf-23de6d4fb843";
  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
  if (!_chats) {
    return redirect("/chat-pdf");
  }
  if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
    return redirect("/chat-pdf");
  }

  const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));
  return (
    <div className="flex w-screen min-h-screen overflow-scroll">
      <div className="flex w-full min-h-screen overflow-scroll">
        {/* chat sidebar */}
        <div className="flex-[1] max-w-xs min-h-screen">
          <ChatSideBar chats={_chats} chatId={parseInt(chatId)} />
        </div>
        {/* pdf viewer */}
        <div className="min-h-screen p-4 oveflow-scroll flex-[5]">
          PDF Viewer
          {/* <PDFViewer pdf_url={currentChat?.pdfUrl || ""} /> */}
        </div>
        {/* chat component */}
        <div className="flex-[3] border-l-4 border-l-slate-200">
          Chat Component
          {/* <ChatComponent chatId={parseInt(chatId)} /> */}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
