/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Blogs Deatils",
    description: "Explore my latest blogs on web development, programming, and tech trends. Stay updated with insights, tutorials, and coding tips!",
};

const BlogDetails = async ({ params }: { params: any }) => {
    const { id } = await params
    console.log(id);

    const blog = {
        id: '1',
        title: "Cycle Labs",
        description: "A full-stack bicycle store application with authentication, payment integration, and product management.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        liveLink: "#",
        githubLink: "#",
    }

    // Find the blog based on the id

    if (!blog) {
        return <p>Blog not found!</p>;
    }

    return (
        <section className='bg-gray-100 py-10 px-4 dark:bg-gray-900 dark:text-white'>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg dark:bg-gray-800 border">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={700}
                    height={500}
                    className="w-full h-[60vh] object-cover rounded-lg"
                />
                <h1 className="text-3xl font-semibold mt-4">{blog.title}</h1>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">{blog.description}</p>
                <div className="text-gray-800 dark:text-gray-200">
                    <p>{blog.description}</p>
                </div>

                <div className="mt-6 text-center">
                    <Link href="/blogs">
                        <p className="text-blue-600 hover:text-blue-700 font-medium dark:text-blue-400 dark:hover:text-blue-500">
                            ← Back to Blog List
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
