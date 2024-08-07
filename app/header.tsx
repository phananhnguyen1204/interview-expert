"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LogIn, LogInIcon, LogOut } from "lucide-react";
import Image from "next/image";

function AccountDropdown() {
  const session = useSession();

  const isLoggedIn = !!session.data;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"link"}>
          {" "}
          <Avatar className="mr-2">
            <AvatarImage src={session.data?.user?.image ?? ""} />
          </Avatar>
          {session.data?.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          <LogOut className="mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const session = useSession();
  return (
    <header>
      <div>
        {session.data && <AccountDropdown></AccountDropdown>}
        {!session.data && (
          <Button onClick={() => signIn()} variant="link">
            <LogInIcon className="mr-2" /> Sign In
          </Button>
        )}
      </div>
    </header>
  );
}
