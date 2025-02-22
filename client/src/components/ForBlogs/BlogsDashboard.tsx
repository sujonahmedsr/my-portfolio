import AddBlog from "./AddBlog";
import Image from "next/image";
import UpdateBlog from "./UpdateBlog";
import { TBlog } from "./BlogsCard";
import Link from "next/link";
import { getBlogs } from "@/actions/revalidateData";

const BlogsDashboard = async () => {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Blogs</h1>
        <AddBlog />
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog: TBlog) => (
              <tr key={blog._id} className="hover:bg-gray-100 hover:dark:bg-gray-800">
                <td className="border p-2">
                  <Image src={blog.image} width={50} height={50} alt={blog.title} />
                </td>
                <td className="border p-2">{blog.title}</td>
                <td className="border p-2">
                  {blog.description?.slice(0, 80)}......
                  <Link className="text-blue-500 hover:underline" href={`/blogs/${blog?._id}`}>See More</Link>
                </td>


                <td className="p-2 flex items-center mx-auto justify-center gap-2">
                  <UpdateBlog blog={blog} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogsDashboard
