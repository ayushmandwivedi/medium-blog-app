import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="py-15 px-20 grid grid-cols-12">
      <div className="col-span-8 pr-4">
        <div className="font-bold text-5xl">{blog.title}</div>
        <div className="text-sm my-5 text-gray-500">
          Posted on August 24, 2023
        </div>
        <div className="text-md text-gray-800">{blog.content}</div>
      </div>
      <div className="col-span-4">
        <div className="mb-3 font-semibold">Author</div>
        <div className="flex justify-center items-center">
          <div className="mr-3">
            <Avatar firstLetter={blog.author.name} size="big"></Avatar>
          </div>
          <div>
            <div className="text-xl font-bold">Jokester</div>
            <div className="text-gray-500">
              Master of mirth, purveyor of puns, and the funniest person in the
              kingdom.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
