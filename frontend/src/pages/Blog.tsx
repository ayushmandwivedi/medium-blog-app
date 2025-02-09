import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Loading } from "../components/Loading";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  if (loading || !blog) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div>
      <div>
        <FullBlog blog={blog}></FullBlog>
      </div>
    </div>
  );
};
