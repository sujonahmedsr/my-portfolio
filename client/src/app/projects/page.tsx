import React from "react";
import { Metadata } from "next";
import ProjectsCard, { TProject } from "@/components/ForProjects/ProjectsCard";
import axios from "axios";

export const metadata: Metadata = {
    title: "My Projects",
    description: "Explore my portfolio of projects, showcasing my expertise in web development. From front-end designs to full-stack applications, see what I've built!",
};

const ProjectsPage = async () => {
    const res = await axios.get(`http://localhost:5000/api/projects`)
    const projects = res?.data?.data?.result
    return (
        <section className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
                {projects.map((project: TProject, index: number) => (
                    <ProjectsCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
