import React from "react";
import { Metadata } from "next";
import ProjectsCard, { TProject } from "@/components/ForProjects/ProjectsCard";

export const metadata: Metadata = {
    title: "My Projects",
    description: "Explore my portfolio of projects, showcasing my expertise in web development. From front-end designs to full-stack applications, see what I've built!",
};

// ✅ API কলের জন্য আলাদা async function
async function getProjects() {
    try {
        const res = await fetch(`${`https://my-portfolio-backend-ebon.vercel.app/api`}/projects`, {
            cache: "no-store", // ✅ Always fetch the latest data
            next: { tags: ["projects"] }, 
        });
        if (!res.ok) {
            throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        console.log(data, "from projects");
        return data?.data?.result || [];
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

const ProjectsPage = async () => {
    const projects = await getProjects();
    
    return (
        <section className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
                {projects?.length > 0 ? (
                    projects?.map((project: TProject, index: number) => (
                        <ProjectsCard key={index} project={project} />
                    ))
                ) : (
                    <p className="text-gray-500 text-lg">No Projects Found</p>
                )}
            </div>
        </section>
    );
};

export default ProjectsPage;
