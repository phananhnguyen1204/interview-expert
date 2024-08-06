import { db } from "@/utils/db";
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
