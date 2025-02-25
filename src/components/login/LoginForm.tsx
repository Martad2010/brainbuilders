/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppDispatch } from "@/data/store/hooks";
import { returnErrors } from "@/data/store/reducers/errorReducer";
import { loadUser, login } from "@/data/store/reducers/userSlice";
import axios, { AxiosError, isAxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { PasswordInput } from "../signup/SignupForm";
import Button from "../utils/Button";

const LoginForm = () => {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(true);
  const navigate = useRouter(),
    init = {
      password: "",
    },
    [state, setState] = useState<any>(init),
    textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState((prev: any) => {
        return { ...prev, [name]: value };
      });
    },
    [loading, setLoading] = useState(false),
    dispatch = useAppDispatch();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e?.preventDefault();
    if (!state?.username || !state?.password)
      return toast.info("Please fill out all fields");

    setLoading(true);
    try {
      const newState = state;
      const res = await axios.post(`/api/v1/auth/login`, { ...newState });
      console.log({ resp: res?.data });
      toast.success(res?.data?.message);
      dispatch(login(res?.data?.data));
      dispatch(loadUser());
      navigate.push("/");
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      if (isAxiosError(error)) {
        if (error) console.log({ error: error?.response?.data, err: error });
        if (error?.response?.status === 429) toast.error(error?.response?.data);
        const err = error as AxiosError;
        if (err?.response?.data) {
          const { error: errors }: resErr = err?.response?.data;
          if (errors && errors?.length > 1) {
            dispatch(
              returnErrors({ error: errors, status: err?.response?.status }),
            );
          } else {
            const errMsg =
              error?.response?.data?.message ||
              error?.response?.data?.error?.[0]?.message ||
              error?.response?.data?.error?.[0]?.msg ||
              error?.message;

            toast.error(errMsg);
          }
        } else toast.error(message);
      } else toast.error(message);
    }
    setLoading(false);
  };

  return (
    <div
      className="mb-20 mt-10 w-full rounded-[10px] bg-white px-4 py-7 md:w-[563px] md:px-8"
      style={{
        boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h1 className="mb-9 text-2xl font-black text-[#002724] md:text-[32px]">
        Welcome Back!
      </h1>
      <form>
        <label
          htmlFor="phone-number"
          className="text-sm font-bold text-[#002724]"
        >
          PHONE NO.
        </label>
        <br />
        <input
          id="tel"
          type="tel"
          className="mb-5 h-12 w-full rounded-md bg-[#FAFAFA] px-4 outline-none"
          name="username"
          value={state?.username}
          onChange={textChange}
        />
        <label htmlFor="password" className="text-sm font-bold text-[#002724]">
          PASSWORD
        </label>
        <br />
        <PasswordInput name="password" state={state} textChange={textChange} />

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              onClick={() =>
                setIsRememberMeChecked(isRememberMeChecked ? false : true)
              }
              className={`flex h-4 w-4 items-center justify-center ${isRememberMeChecked ? "bg-[#04C323]" : "border border-black bg-transparent"} cursor-pointer rounded-[2px]`}
            >
              <Image
                src="/images/check.svg"
                alt="check"
                width={13}
                height={13}
                className={`${isRememberMeChecked ? "block" : "hidden"}`}
              />
            </div>
            <p className="text-sm font-bold text-[#002724]">Remember Me</p>
          </div>
          <Link
            href={"/reset-password"}
            className="text-sm font-bold text-[#002724]"
          >
            Forget Password?
          </Link>
        </div>
        {/* <button className="mt-14 w-full rounded-md bg-[#04C323] py-3 font-black text-white">
          Sign In
        </button> */}
        <Button
          type="submit"
          className="mt-14 w-full rounded-md bg-[#04C323] py-3 font-black text-white"
          onClick={handleSubmit}
          isLoading={loading}
        >
          Sign In
        </Button>
        {/* <button className="mb-8 mt-4 flex w-full items-center justify-center gap-3 rounded-md border border-[#04C323] bg-transparent py-3 font-black text-[#002724] md:mt-12">
          <Image
            src={"/images/google.svg"}
            alt="google logo"
            width={17}
            height={18}
          />
          Sign In with Gmail
        </button> */}
        <div className="mt-8 flex items-center justify-center">
          <Link href="/signup" className="text-sm font-bold text-[#002724]">
            Don&apos;t have an account?{" "}
            <span className="border-b border-b-black">Sign Up</span>
          </Link>
        </div>
      </form>
      {/* <div className="mt-8 flex items-center justify-center gap-4 text-sm font-bold text-[#002724]">
        <span>Having trouble?</span>
        <div className="cursor-pointer border-b border-b-black">Chat now</div>
      </div> */}
    </div>
  );
};

export default LoginForm;
