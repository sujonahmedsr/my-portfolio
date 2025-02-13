import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Avatar, AvatarFallback } from "@/components/ui/avatar";
  import { Button } from "@/components/ui/button";
  import Link from "next/link";
  import { signOut } from "next-auth/react"
import Image from "next/image";
import { Tsession } from "./Header";
  
  export function ProfileDropdown({session}: {session: Tsession}) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer">
            <Image
              src={session?.user?.image as string}
              alt="profile image"
              width={50} height={50}
            />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-5 w-56  mr-20">
          <DropdownMenuItem className="flex flex-col items-center"><p className="text-lg font-semibold">{session?.user?.name}</p></DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/dashboard"} className="w-full">
              <Button
                variant={"outline"}
                className="w-full"
              >
                Dashboard
              </Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
            onClick={()=> signOut()}
              className="w-full"
            >
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }