"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const session = useSession();
  return (
    <header>
      <div>
        {session.data ? (
          <Button
            className="bg-orange-400 text-white px-6 py-2 rounded-full w-40 text-lg hover:bg-orange-500"
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            className="bg-orange-400 text-white px-6 py-2 rounded-full w-fit text-lg hover:bg-orange-500"
            onClick={() => signIn("google")}
          >
            Sign In
          </Button>
        )}
        {session.data?.user?.name}
      </div>
    </header>
  );
}
