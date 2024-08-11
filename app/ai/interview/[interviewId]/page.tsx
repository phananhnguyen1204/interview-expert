"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { BellRing, WebcamIcon } from "lucide-react";
import { Button } from "@mui/material";
import Link from "next/link";

interface Params {
  interviewId: string;
}

interface InterviewData {
  // define the structure of your interview data
  mockId: string;
  jsonMockResp: string;
  jobPosition: string;
  jobDescription: string;
  jobExperience: string;
  createdBy: string;
  createdAt: string;
}

const AIInterview = ({ params }: { params: Params }) => {
  const [interviewData, setInterviewData] = useState<InterviewData | null>(
    null
  ); // Or `InterviewData[]` if it's an array.
  const [camEnabled, setCamEnabled] = useState(false);

  useEffect(() => {
    getInterviewDetails();
  }, []);

  //used to get interview details by mockid/interviewid
  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0] as InterviewData);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-5">
        <div className="text-center">
          <h1 className="lg:text-4xl text-3xl font-extrabold mb-2 bg-gradient-to-r from-yellow-300 to-orange-600 bg-clip-text text-transparent">
            Let&apos;s Get Started
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            {camEnabled ? (
              <Webcam
                onUserMedia={() => setCamEnabled(true)}
                onUserMediaError={() => setCamEnabled(false)}
                mirrored={true}
              />
            ) : (
              <div className="text-center">
                <WebcamIcon className="my-7 h-72 w-full p-20 bg-secondary rounded-lg border" />
                <Button
                  className="text-red-600"
                  onClick={() => setCamEnabled(true)}
                >
                  Enabled Webcam and Microphone
                </Button>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col space-y-5 ">
            <div className="p-5 rounded-lg border border-slate-500">
              <h2 className="text-lg">
                <strong>Job Role: </strong>
                {interviewData?.jobPosition}
              </h2>
              <h2 className="text-lg">
                <strong>Job Description: </strong>
                {interviewData?.jobDescription}
              </h2>
              <h2 className="text-lg">
                <strong>Years of Experience: </strong>
                {interviewData?.jobExperience}
              </h2>
            </div>
            <div className="p-5 border rounded-lg border-slate-500 bg-red-100">
              <h2 className="gap-2 items-center text-red-600">
                <BellRing />
                <strong>Some Reminders!</strong>
              </h2>
              <h2>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                nemo necessitatibus molestiae inventore excepturi quasi quas
                quaerat nostrum pariatur modi quae laboriosam beatae nesciunt
                voluptatibus ducimus, laudantium non eaque possimus.
              </h2>
            </div>
            <div>
              <div>
                <Link href={"/ai/interview/" + params.interviewId + "/start"}>
                  <Button className="bg-orange-400 text-white px-6 py-2 rounded-md w-fit text-md hover:bg-orange-500">
                    Start Interview
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AIInterview;
