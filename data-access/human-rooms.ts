import { db } from "@/utils/db";
import { room } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { unstable_noStore } from "next/cache";

/**
 * This function will get all the Human vs Human rooms all the Human vs Human rooms from the database.
 * @returns {Promise<Array<Room>>} - A promise that resolves to an array of Room objects.
 */

export async function getHumanRooms() {
  unstable_noStore();
  const rooms = await db.query.room.findMany();
  return rooms;
}

export async function getHumanRoomById(roomId: string) {
  unstable_noStore();
  return await db.query.room.findFirst({
    where: eq(room.id, roomId),
  });
}
