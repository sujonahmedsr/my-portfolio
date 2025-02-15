import ProjectsDashboard from "@/components/ForProjects/ProjectsDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Projects",
  description: "Explore my portfolio of projects, showcasing my expertise in web development. From front-end designs to full-stack applications, see what I've built!",
};
const page = () => {
  return (
    <div>
      <ProjectsDashboard />
    </div>
  );
};

export default page;