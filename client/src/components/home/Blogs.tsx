import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
  }
];

const BlogSection = () => {
  return (
    <div className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white">
      {/* Educational Qualification */}
      <div className="my-14 container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Educational Qualification</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300">
          <Card className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg">
            <CardContent className="space-y-2">
              <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">Diploma in Computer Technology</h4>
              <p className="text-lg font-semibold">Sirajganj Polytechnic Institute</p>
              <p className="text-base text-gray-500">Session: 2020-2021 (End: 2024)</p>
              <p className="text-sm text-gray-500">Diploma in Computer Technology is a program that provides foundational knowledge in computer hardware, software, programming, and networking, preparing students for entry-level IT and tech-related roles.</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg">
            <CardContent className="space-y-2">
              <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">S.S.C Science</h4>
              <p className="text-lg font-semibold">Mallika Sanaullah Ansary High School</p>
              <p className="text-base text-gray-500">Session: 2019-2020</p>
              <p className="text-sm text-gray-500">SSC (Secondary School Certificate) is a public examination taken by students at the end of their secondary education, typically after completing Grade 10. It assesses knowledge in various subjects such as Mathematics, Science, and Language, and is a prerequisite for higher secondary education.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
        {blogs.map((blog) => (
          <Card key={blog.id} className="overflow-hidden bg-white p-4 rounded shadow-lg hover:shadow-2xl transition-all dark:bg-gray-800">
            <Image src={blog.image} alt={blog.title} width={500} height={500} className="w-full h-64 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">{blog.description}</p>
              <Link href={`/blogs/${blog.id}`} className="text-blue-600 hover:text-blue-700 font-medium dark:text-blue-400 dark:hover:text-blue-500">
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/blogs">
          <Button className="px-6 py-2 rounded text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white">
            View All Blogs
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
