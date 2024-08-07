import { getHumanRooms } from "@/data-access/human-rooms";
import RoomCard from "@/components/roomcard";

export default async function HumanInterviewRoom() {
  const rooms = await getHumanRooms();
  return (
    <main className="min-h-screen p-16">
      <div className="flex justify-between w-full items-center mb-12">
        <h1 className="text-4xl font-semibold">Find Interview Room</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
