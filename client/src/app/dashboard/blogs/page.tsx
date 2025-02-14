import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | My Blogs",
    description: "Explore my latest blogs on web development, programming, and tech trends. Stay updated with insights, tutorials, and coding tips!",
};

const DBlogsPage = () => {
    return (
        <div className="p-4">
            DBlogs Page
        </div>
    );
};

export default DBlogsPage;