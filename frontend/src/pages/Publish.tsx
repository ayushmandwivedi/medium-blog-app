import { useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar authorName="Ayushman" text="Back" />

      <div className="flex justify-center">
        <div className="py-3 mr-2">
          <svg
            className="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex flex-col w-1/2">
          <textarea
            id="title"
            rows={1}
            className="resize-y overflow-hidden p-2.5 text-4xl font-semibold text-gray-600 placeholder-gray-400 caret-gray-300 border-l-1 border-l-gray-300 outline-none "
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></textarea>
          <textarea
            id="content"
            rows={8}
            className="resize-y overflow-hidden p-2.5 text-lg text-gray-600 placeholder-gray-400 caret-gray-300 border-none outline-none"
            placeholder="Tell your story....."
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
