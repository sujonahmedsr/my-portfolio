"use client"

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import AddBlog from "./AddProject";
import Image from "next/image";
import UpdateBlog from "./UpdateProject";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: '1',
    title: "Cycle Labs",
    description: "A full-stack bicycle store application with authentication, payment integration, and product management.",
    image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: '2',
    title: "Coaching Center Management",
    description: "A web app for managing student records, attendance, and online classes.",
    image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: '3',
    title: "Time Management App",
    description: "A productivity tool to track and manage tasks efficiently.",
    image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: '4',
    title: "Time Management App",
    description: "A productivity tool to track and manage tasks efficiently.",
    image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
    liveLink: "#",
    githubLink: "#",
  }
];


export default function ProjectsDashboard() {

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Projects</h1>
        <AddBlog />
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Live</th>
              <th className="border p-2">GitHub</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-100 hover:dark:bg-gray-800">
                <td className="border p-2">
                  <Image src={project.image} width={50} height={50} className="w-full h-full" alt={project.title} />
                </td>
                <td className="border p-2">{project.title}</td>
                <td className="border p-2"><a
                  href={project?.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 font-medium hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                >
                  <FaExternalLinkAlt className="h-5 w-5 mr-2" /> Demo
                </a>
                </td>
                <td className="border p-2">{/* GitHub Link with Icon */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 font-medium hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                  >
                    <FaGithub className="h-5 w-5 mr-2" /> GitHub
                  </a></td>
                <td className="border p-2">{project.description}</td>


                <td className="border p-2 flex items-center mx-auto justify-center gap-2">
                  <UpdateBlog />
                  <Button variant={"outline"} className="text-red-600"><Trash2 size={18} /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
