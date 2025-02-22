import AddBlog from "./AddProject";
import Image from "next/image";
import UpdateBlog from "./UpdateProject";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TProject } from "./ProjectsCard";
import profile from "@/assets/profile.jpg"
import Link from "next/link";
import { getProjects } from "@/actions/revalidateData";

const ProjectsDashboard = async () => {
  const projects = await getProjects();
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
              {/* <th className="border p-2">Technologies</th> */}
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project: TProject) => (
              <tr key={project._id} className="hover:bg-gray-100 hover:dark:bg-gray-800">
                <td className="border p-2">
                  <Image src={project.image === "" ? profile : project.image} width={50} height={50} alt={project.title} />
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
                <td className="border p-2">
                  {project?.description?.slice(0, 80)}.....<Link className="text-blue-500 hover:underline" href={`/projects/${project?._id}`}>See More</Link>
                </td>

                {/* <td className="border p-2">
                  {project?.technologies
                    ?.split(",") // Comma diye split kora
                    ?.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-200 dark:bg-white dark:text-black rounded m-2 gap-2 inline-block">
                        {tech.trim()}
                      </span>
                    ))}
                </td> */}


                <td className="p-2 flex items-center mx-auto justify-center gap-2">
                  <UpdateBlog project={project} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectsDashboard
