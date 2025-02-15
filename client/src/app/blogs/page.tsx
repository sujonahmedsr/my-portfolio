import React from "react";
import { Metadata } from "next";
import { TBlog } from "@/components/ForBlogs/BlogsCard";
import BlogsCard from "@/components/ForBlogs/BlogsCard";
import axios from "axios";

export const metadata: Metadata = {
  title: "My Blogs",
  description: "Explore my latest blogs on web development, programming, and tech trends. Stay updated with insights, tutorials, and coding tips!",
};

const BlogsPage = async () => {
  const res = await axios.get(`http://localhost:5000/api/blogs`)
  const blogs = res?.data?.data?.result
  return (
    <div className="bg-gray-100 py-10 dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Latest Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
        {blogs.map((blog: TBlog, index: number) => (
          <BlogsCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;