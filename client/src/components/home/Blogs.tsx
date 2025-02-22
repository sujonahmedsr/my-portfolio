"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlogsCard, { TBlog } from "../ForBlogs/BlogsCard";
import { getBlogs } from "@/actions/revalidateData";

const BlogSection = () => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fetch blogs asynchronously
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white">
      {/* Educational Qualification */}
      <div className="my-14 container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Educational Qualification</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300">
          <Card
            className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg"
            data-aos="fade-up"
          >
            <CardContent className="space-y-2">
              <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">
                Diploma in Computer Technology
              </h4>
              <p className="text-lg font-semibold">Sirajganj Polytechnic Institute</p>
              <p className="text-base text-gray-500">Session: 2020-2021 (End: 2024)</p>
              <p className="text-sm text-gray-500">
                Diploma in Computer Technology is a program that provides foundational knowledge in computer hardware,
                software, programming, and networking, preparing students for entry-level IT and tech-related roles.
              </p>
            </CardContent>
          </Card>

          <Card
            className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <CardContent className="space-y-2">
              <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">S.S.C Science</h4>
              <p className="text-lg font-semibold">Mallika Sanaullah Ansary High School</p>
              <p className="text-base text-gray-500">Session: 2019-2020</p>
              <p className="text-sm text-gray-500">
                SSC (Secondary School Certificate) is a public examination taken by students at the end of their
                secondary education, typically after completing Grade 10. It assesses knowledge in various subjects
                such as Mathematics, Science, and Language, and is a prerequisite for higher secondary education.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Latest Blogs */}
      <h2 className="text-2xl font-bold text-center mb-6" data-aos="fade-up">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
        {blogs?.length > 0 ? (
          blogs?.slice(0, 3).map((blog: TBlog, index: number) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <BlogsCard blog={blog}/>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No blogs available</p>
        )}
      </div>

      {/* View All Blogs Button */}
      <div className="flex justify-center mt-6">
        <Link href="/blogs">
          <Button
            className="px-6 py-2 rounded text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white"
            data-aos="fade-up"
          >
            View All Blogs
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
