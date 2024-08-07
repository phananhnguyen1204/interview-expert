import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Room } from "@/utils/schema";
import { GithubIcon } from "lucide-react";
import { getHumanRooms } from "@/data-access/human-rooms";
import { LanguagesList } from "@/components/languages-list";
import { splitLanguages } from "@/lib/utils";

function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="shadow-md hover:shadow-lg hover:translate-y-2 transition-all cursor-pointer">
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <LanguagesList languages={splitLanguages(room?.language || "")} />
        {room.githubRepo && (
          <Link
            href={room.githubRepo}
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon></GithubIcon>
            GitHub Project
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/human-rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default async function HumanInterviewRoom() {
  const rooms = await getHumanRooms();
  return (
    <main className="min-h-screen p-16">
      <div className="flex justify-between w-full items-center mb-12">
        <h1 className="text-4xl font-semibold">Find Interview Room</h1>
        <Button asChild>
          <Link href="/human/create-room">Create Room</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
