import React from "react";
import { Metadata } from "next";
import { TBlog } from "@/components/ForBlogs/BlogsCard";
import BlogsCard from "@/components/ForBlogs/BlogsCard";

export const metadata: Metadata = {
  title: "My Blogs",
  description: "Explore my latest blogs on web development, programming, and tech trends. Stay updated with insights, tutorials, and coding tips!",
};

// ✅ API থেকে ডাটা ফেচ করার জন্য আলাদা ফাংশন
async function getBlogs() {
  try {
    const res = await fetch(`${`https://my-portfolio-backend-ebon.vercel.app/api`}/blogs`, {
      cache: "no-store", // ✅ Always fetch the latest data
      next: { tags: ["blogs"] },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();
    console.log(data, "from blogs");
    return data?.data?.result || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

const BlogsPage = async () => {
  const blogs = await getBlogs();

  console.log(blogs, "from blogs");
  
  return (
    <div className="bg-gray-100 py-10 dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Latest Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
        {blogs?.length > 0 ? (
          blogs?.map((blog: TBlog, index: number) => (
            <BlogsCard key={index} blog={blog} />
          ))
        ) : (
          <p className="text-gray-500 text-lg text-center col-span-3">No Blogs Found</p>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
