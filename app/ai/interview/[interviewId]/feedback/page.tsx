"use client";

import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Link } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../../../lotties/Video.json";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-10 items-center justify-center">
      <div className="text-center p-3">
        <h1 className="lg:text-5xl text-3xl font-extrabold mb-2 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight lg:leading-snug">
          Congrats on Finishing Your Interview!
        </h1>
        <h2 className="text-xl font-medium text-gray-600">
          Below is your feedback!
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center space-x-5 w-full">
        <div className="w-full justify-center">
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible
                key={index}
                className="w-full rounded-lg overflow-hidden mb-5"
              >
                <CollapsibleTrigger className="p-4 px-6 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-md flex justify-between items-center text-left hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 transition-colors duration-300 mb-5">
                  <span>{item.question}</span>
                  <ChevronDown className="w-6 h-6" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 space-y-3 bg-gray-100">
                  <h2 className="text-lg font-semibold text-gray-700">
                    Rating: {item.rating}
                  </h2>
                  <p className="p-3 border border-slate-300 rounded-md bg-red-100 text-red-800 shadow-sm">
                    <strong>Your Answer:</strong> {item.userAns}
                  </p>
                  <p className="p-3 border border-slate-300 rounded-md bg-green-100 text-green-800 shadow-sm">
                    <strong>Feedback:</strong> {item.feedback}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </div>
        <div className="w-full max-w-xl flex-shrink-0 items-center justify-center">
          <Lottie animationData={animationData}></Lottie>
        </div>
      </div>
      <div className="justify-center flex items-center text-center">
        <Button onClick={() => router.replace("/dahsboard")}>
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};
export default Feedback;
