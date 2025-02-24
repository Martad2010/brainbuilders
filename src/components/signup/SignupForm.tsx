"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUpForm = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(true);
  const [isNewsChecked, setIsNewsChecked] = useState(true);
  return (
    <div
      className="mb-20 mt-10 w-full rounded-[10px] bg-white px-4 py-7 md:w-[563px] md:px-8"
      style={{
        boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h1 className="mb-9 text-center text-2xl font-black text-[#002724] md:text-[32px]">
        Create your account!
      </h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="mb-5 h-14 w-full rounded-md bg-[#FAFAFA] px-4 text-sm font-bold outline-none placeholder:text-[#1C1C1C99]/60"
          style={{
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="mb-5 h-14 w-full rounded-md bg-[#FAFAFA] px-4 text-sm font-bold outline-none placeholder:text-[#1C1C1C99]/60"
          style={{
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="mb-5 h-14 w-full rounded-md bg-[#FAFAFA] px-4 text-sm font-bold outline-none placeholder:text-[#1C1C1C99]/60"
          style={{
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
        />
        <div className="mt-5 flex items-center gap-2">
          <div
            onClick={() => setIsTermsChecked(isTermsChecked ? false : true)}
            className={`flex h-4 w-4 items-center justify-center ${isTermsChecked ? "bg-[#04C323]" : "border border-black bg-transparent"} cursor-pointer rounded-[2px]`}
          >
            <Image
              src="/images/check.svg"
              alt="check"
              width={13}
              height={13}
              className={`${isTermsChecked ? "block" : "hidden"}`}
            />
          </div>
          <p className="text-sm font-bold text-[#002724]">
            I accept Samwell{" "}
            <Link href={"/terms"} className="border-b border-b-black">
              Terms
            </Link>
            ,{" "}
            <Link href={"/privacy"} className="border-b border-b-black">
              Privacy
            </Link>{" "}
            and{" "}
            <Link href={"/policy"} className="border-b border-b-black">
              Refund Policy
            </Link>
          </p>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <div
            onClick={() => setIsNewsChecked(isNewsChecked ? false : true)}
            className={`flex h-4 w-4 items-center justify-center ${isNewsChecked ? "bg-[#04C323]" : "border border-black bg-transparent"} cursor-pointer rounded-[2px]`}
          >
            <Image
              src="/images/check.svg"
              alt="check"
              width={13}
              height={13}
              className={`${isNewsChecked ? "block" : "hidden"}`}
            />
          </div>
          <p className="text-sm font-bold text-[#002724]">
            Send me the occasional news & updates (optional)
          </p>
        </div>
        <button className="mt-8 w-full rounded-md bg-[#04C323] py-3 font-black text-white">
          Sign Up
        </button>
        {/* <button className="mb-4 mt-4 flex w-full items-center justify-center gap-3 rounded-md border border-[#04C323] bg-transparent py-3 font-black text-[#002724]">
          <Image
            src={"/images/google.svg"}
            alt="google logo"
            width={17}
            height={18}
          />
          Sign In with Gmail
        </button> */}
        <div className="mt-4 flex items-center justify-center">
          <Link
            href="/login"
            className="text-center text-sm font-bold text-[#002724]"
          >
            Already have an account?{" "}
            <span className="border-b border-b-black">Sign In</span>
          </Link>
        </div>
      </form>
      {/* <div className="mt-4 flex items-center justify-center gap-4 text-sm font-bold text-[#002724]">
        <span>Having trouble?</span>
        <div className="cursor-pointer border-b border-b-black">Chat now</div>
      </div> */}
    </div>
  );
};

export default SignUpForm;
