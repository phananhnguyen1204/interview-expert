"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

interface AIHumanFormProps {
  openDialog: boolean;
  setOpenDialog: (open: boolean) => void;
}

const AIHumanForm: React.FC<AIHumanFormProps> = ({
  openDialog,
  setOpenDialog,
}) => {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader className="items-center">
          <DialogTitle className="text-2xl mb-5">
            Choose your Interview Type
          </DialogTitle>
          <DialogDescription className="text-center  mt-5">
            Select whether you want to conduct an AI interview or a Human
            interview.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around mt-4">
          <Button onClick={() => setOpenDialog(false)} className="w-fit">
            {" "}
            <Link href="/ai/create-room">AI Interview</Link>
          </Button>
          <Button onClick={() => setOpenDialog(false)} className="w-fit">
            <Link href="/human/create-room">Human Interview</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIHumanForm;
