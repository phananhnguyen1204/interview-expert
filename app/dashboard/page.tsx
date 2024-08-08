"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AIHumanForm from "@/components/ai-or-human-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Lottie from "lottie-react";
import animationData from "../lotties/dashboard.json";
import Link from "next/link";

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="flex flex-col items-center p-5 space-y-7">
      <div className="flex flex-col items-center p-6 h-fit w-1/2 text-center">
        <h2 className="text-5xl font-extrabold opacity-85">Prepare for</h2>
        <h1 className="text-6xl font-extrabold p-5 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Mock Interview
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-5">
          It's so easy. Just one click and you are on the way to practice!
        </p>
      </div>
      <div className="flex flex-row justify-between w-full max-w-6xl gap-10">
        <div className="flex flex-col items-center w-1/2">
          <div className="text-center p-3 mb-5">
            <h1 className="text-3xl font-semibold">Create a Room</h1>
          </div>
          <Card className="shadow-md hover:shadow-lg transition-all cursor-pointer hover:translate-y-1 flex-grow flex flex-col justify-between">
            <CardContent>
              <div className="flex justify-center items-center mb-4">
                <Lottie
                  animationData={animationData}
                  className="max-w-xs"
                  loop={true}
                />
              </div>
              <div className="text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus amet ipsam nemo architecto commodi cupiditate
                  quo, labore et quam quidem perferendis iure ratione tempora
                  accusamus earum. Quos unde suscipit ex!
                </p>
              </div>
              <div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Make collaboration seamless with built-in code review tools.
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Automate your workflow with continuous integration and
                    delivery.
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Deploy to the cloud with a single click and scale with ease.
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button onClick={() => setOpenDialog(true)}>Create Room</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <div className="text-center p-3 mb-5">
            <h1 className="text-3xl font-semibold">Join a Room</h1>
          </div>
          <div className="space-y-5 w-full">
            <Card className="shadow-md hover:shadow-lg transition-all cursor-pointer hover:translate-y-1 flex-grow flex flex-col justify-between">
              <CardHeader>
                <CardTitle>AI Interview</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row mb-4">
                <div className="w-1/3 flex justify-center items-center">
                  <Lottie
                    animationData={animationData}
                    className="max-w-full"
                    loop={true}
                  />
                </div>
                <div className="w-2/3 pl-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus amet ipsam nemo architecto commodi cupiditate
                    quo, labore et quam quidem perferendis iure ratione tempora
                    accusamus earum. Quos unde suscipit ex!
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Link href="/ai">Join AI Interview</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-all cursor-pointer hover:translate-y-1 flex-grow flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Human Interview</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row mb-4">
                <div className="w-1/3 flex justify-center items-center">
                  <Lottie
                    animationData={animationData}
                    className="max-w-full"
                    loop={true}
                  />
                </div>
                <div className="w-2/3 pl-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus amet ipsam nemo architecto commodi cupiditate
                    quo, labore et quam quidem perferendis iure ratione tempora
                    accusamus earum. Quos unde suscipit ex!
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Link href="/human">Join Human Interview</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {openDialog && (
        <AIHumanForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
      )}
    </div>
  );
};

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default Dashboard;
