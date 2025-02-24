"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
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
        />
        <label htmlFor="password" className="text-sm font-bold text-[#002724]">
          PASSWORD
        </label>
        <br />
        <div className="relative mb-5">
          <input
            id="confirm-new-password"
            type={showPassword ? "text" : "password"}
            className="h-12 w-full rounded-md bg-[#FAFAFA] px-4 pr-12 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-6 w-6 text-gray-400" />
            ) : (
              <EyeIcon className="h-6 w-6 text-gray-400" />
            )}
          </button>
        </div>
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
        <button className="mt-14 w-full rounded-md bg-[#04C323] py-3 font-black text-white">
          Sign In
        </button>
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
