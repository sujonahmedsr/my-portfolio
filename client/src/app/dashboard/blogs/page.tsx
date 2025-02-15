import BlogsDashboard from "@/components/ForBlogs/BlogsDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Blogs",
  description: "Explore my portfolio of projects, showcasing my expertise in web development. From front-end designs to full-stack applications, see what I've built!",
};
const page = () => {

  return (
    <div>
      <BlogsDashboard />
    </div>
  );
};

export default page;