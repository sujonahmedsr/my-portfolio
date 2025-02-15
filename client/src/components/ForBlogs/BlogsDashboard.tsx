"use client"

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import AddBlog from "./AddBlog";
import { TBlog } from "./BlogsCard";
import Image from "next/image";
import UpdateBlog from "./UpdateBlog";

const blogs: TBlog[] = [
  {
    id: "1",
    title: "Mastering React Hooks",
    description: "Learn how to use React hooks effectively in your projects.",
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg",
  },
  {
    id: "2",
    title: "Understanding JavaScript Closures",
    description: "A deep dive into one of the most powerful JavaScript concepts.",
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg",
  },
  {
    id: "3",
    title: "The Future of Web Development",
    description: "Explore the latest trends and technologies shaping the web.",
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg",
  },
  {
    id: "4",
    title: "The Future of Web Development",
    description: "Explore the latest trends and technologies shaping the web.",
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg",
  }
];


export default function BlogsDashboard() {

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Blogs</h1>
        <AddBlog />
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((project) => (
              <tr key={project.id} className="hover:bg-gray-100 hover:dark:bg-gray-800">
                <td className="border p-2">
                  <Image src={project.image} width={50} height={50} className="w-full h-full" alt={project.title} />
                </td>
                <td className="border p-2">{project.title}</td>
                <td className="border p-2">{project.description}</td>
                
                
                <td className="border p-2 flex items-center mx-auto justify-center gap-2">
                  <UpdateBlog />
                  <Button variant={"outline"}  className="text-red-600"><Trash2 size={18} /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
