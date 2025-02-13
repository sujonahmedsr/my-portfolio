"use client"

import { signIn } from "next-auth/react"
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { usePathname } from "next/navigation";
import { CirclePower, Menu } from "lucide-react";
import { Button } from "../ui/button";
import ModeToggle from "../theme-toggle";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ProfileDropdown } from "./PorfileDropdown";
import { Tsession } from "./Header";

const menuList = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Me", link: "/aboutMe" },
  { id: 3, name: "Projects", link: "/projects" },
  { id: 4, name: "Blogs", link: "/blogs" },
  { id: 5, name: "Contact", link: "/contact" },
];

export default function Navbar({ session }: { session: Tsession }) {

  const location = usePathname()

  return (
    <nav className="shadow sticky top-0 py-2 z-50 backdrop-blur-md bg-white/20 dark:bg-blue-950/60">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold ">
            <Link href="/" className="flex items-center gap-2">
              <CirclePower className="text-blue-700"/> 
              S J N
            </Link>
          </div>

          {/* Middle - Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {menuList.map((item) => (
                <li className="relative group" key={item.id}>
                  <Link href={item.link}>
                    <span
                      className={`cursor-pointer hover:text-blue-500 transition-all duration-300 ${item.link === location ? "text-blue-500" : ""
                        }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}

              {/* login and user profile  */}
              <div>
                {
                  session?.user ?
                    <ProfileDropdown session={session} />
                    :
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant={"outline"}>Login</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-xs mx-auto">
                        <DialogHeader>
                          <DialogTitle className="text-center">Login to access.</DialogTitle>
                          <DialogDescription>
                            <div className="space-y-2 mt-5">
                              <Button onClick={() => signIn("google", { callbackUrl: "/" })} className="flex items-center gap-5 w-full rounded">
                                <FcGoogle />
                                <span>Login with Google</span>
                              </Button>

                              <Button onClick={() => signIn("github", { callbackUrl: "/" })} className="flex items-center gap-5 w-full rounded">
                                <FaGithub />
                                <span>Login with Github</span>
                              </Button>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                }
              </div>

              {/* dark mode  */}
              <ModeToggle />
            </ul>
          </nav>

          {/* mobile devices  */}
          <div className="flex gap-2 lg:hidden">
            {/* login and user profile  */}
            <div className="flex gap-2">
              {
                session?.user ?
                  <ProfileDropdown session={session} />
                  :
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant={"outline"}>Login</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xs mx-auto">
                      <DialogHeader>
                        <DialogTitle className="text-center">Login to access.</DialogTitle>
                        <DialogDescription>
                          <div className="space-y-2 mt-5">
                            <Button onClick={() => signIn("google", { callbackUrl: "/" })} className="flex items-center gap-5 w-full rounded">
                              <FcGoogle />
                              <span>Login with Google</span>
                            </Button>

                            <Button onClick={() => signIn("github", { callbackUrl: "/" })} className="flex items-center gap-5 w-full rounded">
                              <FaGithub />
                              <span>Login with Github</span>
                            </Button>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

              }
            </div>

            {/* dark mode  */}
            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto w-56">
                <SheetHeader>
                  <SheetTitle>
                    <div className="text-2xl font-bold ">
                      <Link href="/" className="flex items-center gap-1">
                        <CirclePower />
                        SJN
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <ul className="mb-6 mt-6 flex flex-col gap-4">
                  {menuList.map((item) => (
                    <li className="relative group" key={item.id}>
                      <Link href={item.link}>
                        <span
                          className={`cursor-pointer hover:text-blue-500 transition-all duration-300 ${item.link === location ? "text-blue-500" : ""
                            }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
