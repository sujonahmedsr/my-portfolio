"use client"
import { CirclePower, Home } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { FaEnvelope, FaProjectDiagram, FaRegNewspaper } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: FaProjectDiagram,
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: FaRegNewspaper,
  },
  {
    title: "Messages",
    url: "/dashboard/message",
    icon: FaEnvelope,
  }
]

export function AppSidebar() {
  const location = usePathname()
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{/* Logo */}
            <div className="text-2xl font-bold ">
              <Link href="/" className="flex items-center gap-2 text-gray-900 dark:text-white">
                <CirclePower className="text-blue-700" />
                S J N
              </Link>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <div className="mt-2" key={item.title}>
                  {/* <SidebarMenuButton asChild> */}
                    <Link href={item.url} className={`flex items-center hover:bg-blue-500 ${location === item.url ? "bg-blue-600 text-white" : ""} gap-2 p-2`}>
                      <item.icon className="text-2xl"/>
                      <span>{item.title}</span>
                    </Link>
                  {/* </SidebarMenuButton> */}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
