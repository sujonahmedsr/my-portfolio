import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blogs",
  description: "Explore my latest blogs on web development, programming, and tech trends. Stay updated with insights, tutorials, and coding tips!",
};


const blogs = [
  {
    id: 1,
    title: "Mastering React Hooks",
    description: "Learn how to use React hooks effectively in your projects.",
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    description: "A deep dive into one of the most powerful JavaScript concepts.",
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    description: "Explore the latest trends and technologies shaping the web.",
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg",
  },
  {
    id: 4,
    title: "The Future of Web Development",
    description: "Explore the latest trends and technologies shaping the web.",
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg",
  }
];
const BlogsPage = () => {
  return (
    <div className="bg-gray-100 py-10 dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
        {blogs.map((blog) => (
          <Card key={blog.id} className="overflow-hidden bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all dark:bg-gray-800">
            <Image src={blog.image} alt={blog.title} width={500} height={500} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">{blog.description}</p>
              <div className="text-center">
                <Link href={`/blogs/${blog?.id}`} className="text-blue-600 hover:text-blue-700 font-medium dark:text-blue-400 dark:hover:text-blue-500 mx-auto">
                  Read More →
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;