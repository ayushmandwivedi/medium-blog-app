import { SignupInput } from "@ayushman-dwivedi/medium-common";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
      alert("Error while signing up!");
    }
  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-3xl font-bold">Create an Account</div>
        <div className="text-gray-500 font-light">
          Already have an account?{" "}
          <Link to={"/signin"} className="underline">
            Login
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        {type === "signup" ? (
          <LabelledInput
            label="Name"
            placeholder="Jane Doe"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />
        ) : null}
        <LabelledInput
          label="Email"
          placeholder="janedoe@email.com"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              email: e.target.value,
            });
          }}
        />
        <LabelledInput
          label="Password"
          type="password"
          placeholder="123456"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            });
          }}
        />
        <button
          onClick={sendRequest}
          className="bg-slate-700 hover:bg-slate-500 mt-8 px-2 py-2 text-l font-semibold text-slate-50 rounded-md"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="mt-4 w-1/2 flex flex-col gap-1">
      <label className="text-l font-semibold">{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        placeholder={placeholder}
        className="box-border border-1 border-slate-300 focus:outline-gray-900 px-1.5 py-1.5 rounded-md text-sm bg-slate-100"
        required
      />
    </div>
  );
}
