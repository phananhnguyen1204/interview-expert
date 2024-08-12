import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { chatSession } from "@/utils/GeminiAIModal";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
// import { getSession } from "@/lib/auth";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

const formSchema = z.object({
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  experience: z.string().min(1, {
    message: "Experience must be at least 1 characters.",
  }),
});

const CreateRoomForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [JsonResponse, setJsonResponse] = useState<string>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      description: "",
      experience: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const session = await getServerSession(authConfig);
    // const sessions = await getSession();

    // if (!sessions) {
    //   throw new Error("Unauthorized. You must be logged in to create a room.");
    // }

    setLoading(true);

    //set the prompt
    const InputPrompt = `
        Job position: ${values.role}, 
        Job Description: ${values.description}, 
        Years of Experience: ${values.experience}. 
        Based on this, give us ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions and answers in JSON format.
      `;

    const result = await chatSession.sendMessage(InputPrompt);

    //reorganize the json response
    const MockJsonResponse = result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .replace(/\n/g, "")
      .replace(/\\n/g, "")
      .replace(/\r/g, "")
      .trim();
    setLoading(false);
    setJsonResponse(MockJsonResponse);

    //insert into db
    if (MockJsonResponse) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResponse,
          jobPosition: values.role,
          jobDescription: values.description,
          jobExperience: values.experience,
          createdBy: session?.user?.id as string,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: MockInterview.mockId });

      //if successful, go to the interview room with the id
      if (resp) {
        router.push("/ai/interview/" + resp[0]?.mockId);
      }
    } else {
      console.log("Error is generating mock interview response");
    }
  }

  return (
    <>
      <div className="p-3 space-y-3">
        <h1 className="text-4xl font-bold">Tell Us About Your Job Interview</h1>
        <h2 className="text-lg font-md text-slate-500">
          Add details about your job position, description and years of
          experience
        </h2>
      </div>
      <div className="p-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Role</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Software Engineer" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the role you want to interview for.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: This job requires me to be proficient in Java and C#"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Give us some information about the job.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Experience</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 1-2 years" {...field} />
                  </FormControl>
                  <FormDescription>
                    Years of experience the job requires.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              {isLoading ? (
                <div className="text-center items-center flex flex-row space-x-2">
                  <p>Generating from AI:</p>
                  <CircularProgress size={20} />
                </div>
              ) : (
                "Start Interview"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
export default CreateRoomForm;
