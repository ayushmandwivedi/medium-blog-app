import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = ({
  authorName,
  text = "New",
}: {
  authorName: string;
  text?: "New" | "Back";
}) => {
  return (
    <div className="flex justify-between p-6 border-b border-gray-300">
      <Link to={"/blogs"}>
        <div className="text-xl font-semibold">Medium</div>
      </Link>
      <div className="flex justify-center items-center">
        <Link to={text === "New" ? "/publish" : "/blogs"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3"
          >
            {text}
          </button>
        </Link>
        <Avatar firstLetter={authorName[0]} size="big"></Avatar>
      </div>
    </div>
  );
};
