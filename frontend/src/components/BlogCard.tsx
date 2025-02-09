import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="max-w-1/2 mx-auto border-b border-gray-300 p-4">
        <div className="flex mb-2">
          <div>
            <Avatar firstLetter={authorName[0]} size="small"></Avatar>
          </div>
          <div className="grid grid-flow-col items-center">
            <div className="font-normal text-sm mr-2">{authorName}</div>
            <span className="rounded-full h-0.5 w-0.5 mr-2 bg-gray-500"></span>
            <div className="font-normal text-sm text-gray-500">
              {publishedDate}
            </div>
          </div>
        </div>
        <div className="font-bold text-2xl ml-2 mb-2">{title}</div>
        <div className="font-normal text-md ml-2 mb-2">
          {content.slice(0, 100) + "....."}
        </div>
        <div className="font-normal text-sm text-gray-500 mb-2 ml-2">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
};

export function Avatar({
  firstLetter = "A",
  size = "small",
}: {
  firstLetter: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mx-2 ${
        size === "small" ? "h-6 w-6" : "h-10 w-10"
      }`}
    >
      <span className="font-light text-s text-gray-600 dark:text-gray-300">
        {firstLetter}
      </span>
    </div>
  );
}
