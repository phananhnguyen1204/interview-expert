"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AIHumanForm from "@/components/ai-or-human-form";
import dynamic from "next/dynamic";

const HumanInterviewRoom = dynamic(() => import("../human/page"), {
  ssr: false,
});

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="justify-center items-center flex flex-col p-5 space-y-7">
      <div className="flex flex-col justify-center items-center p-6 h-fit w-1/2">
        <h2 className="text-5xl font-extrabold opacity-85">Prepare for</h2>
        <h1 className="text-6xl font-extrabold p-5 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Mock Interview
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-5">
          It's so easy. Just one click and you are on the way to practice!
        </p>
      </div>
      <div className="justify-center items-center flex">
        <Button onClick={() => setOpenDialog(true)}>Create Room</Button>
      </div>
      <div className="justify-center items-center flex">
        <h2 className="text-xl font-bold text-gray-500">OR</h2>
      </div>
      <div className="justify-center items-center flex w-screen">
        <Tabs defaultValue="account">
          <div className="justify-center items-center flex">
            <TabsList className="grid w-80 h-auto grid-cols-2">
              <TabsTrigger value="ai">AI Interview</TabsTrigger>
              <TabsTrigger value="human">Human Interview</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="ai" className="w-screen">
            <p>Show AI Rooms Here</p>
          </TabsContent>
          <TabsContent value="human" className="w-screen">
            <HumanInterviewRoom searchParams={{ search: "" }} />
          </TabsContent>
        </Tabs>
      </div>
      {openDialog && (
        <AIHumanForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
      )}
    </div>
  );
};

export default Dashboard;
