import Image from "next/image";
import { Card } from "../ui/card";
import Link from "next/link";

export type TBlog = {
    _id: string,
    title: string,
    image: string,
    description: string
}

const BlogsCard = ({blog}: {blog: TBlog}) => {
    return (
        <Card key={blog._id} className="overflow-hidden bg-white p-4 rounded shadow-lg hover:shadow-2xl transition-all dark:bg-gray-800">
            <Image src={blog.image} alt={blog.title} width={500} height={500} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">{blog.description}</p>
              <div className="text-center">
                <Link href={`/blogs/${blog?._id}`} className="text-blue-600 hover:text-blue-700 font-medium dark:text-blue-400 dark:hover:text-blue-500 mx-auto">
                  Read More →
                </Link>
              </div>
            </div>
          </Card>
    );
};

export default BlogsCard;