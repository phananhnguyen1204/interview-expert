"use client";

import { Mic, WebcamIcon } from "lucide-react";
import Webcam from "react-webcam";
import { Button } from "./ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { useEffect, useState } from "react";

const RecordAnswer = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  return (
    <div className="flex justify-end items-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center rounded-lg p-5 bg-black">
        <WebcamIcon width={200} height={200} className="absolute text-white" />
        <Webcam
          mirrored={true}
          style={{
            height: 500,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <div>
        <Button
          variant={"outline"}
          className="my-10"
          onClick={isRecording ? stopSpeechToText : startSpeechToText}
        >
          {isRecording ? (
            <h2 className="text-red-600 flex gap-2 text-sm">
              <Mic />
              Recording...
            </h2>
          ) : (
            "Start Recording"
          )}
        </Button>
      </div>
    </div>
  );
};
export default RecordAnswer;
