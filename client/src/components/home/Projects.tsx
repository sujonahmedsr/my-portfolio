"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import ProjectsCard, { TProject } from "../ForProjects/ProjectsCard";
import { getProjects } from "@/actions/revalidateData";

const Projects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fetch projects asynchronously
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white transition-all">
      <div className="my-14 container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white" data-aos="fade-up">
          What I Do
        </h3>
        <div className="mt-4 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
            <span className="text-4xl">💻</span>
            <span className="font-semibold">Web Development</span> – Building modern and responsive web applications.
          </Card>
          <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl" data-aos="fade-up" data-aos-delay="400">
            <span className="text-4xl">🎨</span>
            <span className="font-semibold">UI/UX Enthusiast</span> – Focused on creating seamless user experiences.
          </Card>
          <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl" data-aos="fade-up" data-aos-delay="600">
            <span className="text-4xl">🚀</span>
            <span className="font-semibold">Continuous Learning</span> – Exploring new technologies like Redux, Next.js, Node.js, and SQL Backend.
          </Card>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center my-6" data-aos="fade-up">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
        {projects?.length > 0 ? (
          projects?.slice(0, 3).map((project: TProject, index: number) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <ProjectsCard project={project} />
            </div>
          ))
        ) : (
          <p className="text-gray-500" data-aos="fade-up">No projects available</p>
        )}
      </div>
      <div className="flex justify-center mt-6" data-aos="fade-up">
        <Link href="/projects">
          <Button className="px-6 py-2 rounded text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white">
            View All Projects
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
