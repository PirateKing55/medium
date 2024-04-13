import { SignupType } from "@amrit_tech/medium-common";
import { InputBox, Button } from "../components";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const SignUp = () => {
  const [postInputs, setPostInputs] = useState<SignupType>({
    name: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="phone:w-full sm:w-[400px] p-[20px]">
        <h1 className="text-4xl font-bold text-center text-primary ">
          Create an account
        </h1>
        <h2 className="text-lg text-center text-secondary mb-[20px]">
          Already have an account?{" "}
          <Link
            className="underline underline-offset-auto hover:text-primary hover:cursor-pointer"
            to={"/signin"}
          >
            Login
          </Link>
        </h2>
        <InputBox
          label={"username"}
          placeholder={"Enter your username"}
          onchange={(e) =>
            setPostInputs((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <InputBox
          label={"email"}
          placeholder={"abc@xyz.com"}
          onchange={(e) =>
            setPostInputs((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <InputBox
          label={"password"}
          placeholder={""}
          type={"password"}
          onchange={(e) =>
            setPostInputs((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button
          label={"Sign Up"}
          onclick={async () => {
            try {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/user/signup`,
                postInputs
              );
              localStorage.setItem("token", response.data);
              navigate("/blogs");
            } catch (error: any) {
              if (error.response) {
                toast.error(error.response.data.message);
              } else if (error.request) {
                console.error("No Response Received");
              } else {
                console.error("Request Error:", error.message);
              }
            }
          }}
        />
        <Toaster />
      </div>
    </div>
  );
};
