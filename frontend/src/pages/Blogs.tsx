import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { Loading } from "../components/Loading";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) return <Loading></Loading>;
  return (
    <div>
      <Appbar authorName="Ayushman Dwivedi"></Appbar>
      {blogs.map((blog) => (
        <BlogCard
          id={blog.id}
          authorName={blog.author.name || "Anonymous"}
          title={blog.title}
          content={blog.content}
          publishedDate="8th Feb 2025"
        ></BlogCard>
      ))}
    </div>
  );
};
