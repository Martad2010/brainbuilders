"use client";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const ResetPasswordForm = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
          htmlFor="old-password"
          className="text-sm font-bold text-[#002724]"
        >
          OLD PASSWORD
        </label>
        <br />
        <div className="relative mb-5">
          <input
            id="old-password"
            type={showOld ? "text" : "password"}
            className="h-12 w-full rounded-md bg-[#FAFAFA] px-4 pr-12 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowOld(!showOld)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
          >
            {showOld ? (
              <EyeSlashIcon className="h-6 w-6 text-gray-400" />
            ) : (
              <EyeIcon className="h-6 w-6 text-gray-400" />
            )}
          </button>
        </div>
        <label
          htmlFor="new-password"
          className="text-sm font-bold text-[#002724]"
        >
          NEW PASSWORD
        </label>
        <br />
        <div className="relative mb-5">
          <input
            id="new-password"
            type={showNew ? "text" : "password"}
            className="h-12 w-full rounded-md bg-[#FAFAFA] px-4 pr-12 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
          >
            {showNew ? (
              <EyeSlashIcon className="h-6 w-6 text-gray-400" />
            ) : (
              <EyeIcon className="h-6 w-6 text-gray-400" />
            )}
          </button>
        </div>
        <label
          htmlFor="confirm-new-password"
          className="text-sm font-bold text-[#002724]"
        >
          CONFIRM NEW PASSWORD
        </label>
        <br />
        <div className="relative mb-5">
          <input
            id="confirm-new-password"
            type={showConfirm ? "text" : "password"}
            className="h-12 w-full rounded-md bg-[#FAFAFA] px-4 pr-12 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
          >
            {showConfirm ? (
              <EyeSlashIcon className="h-6 w-6 text-gray-400" />
            ) : (
              <EyeIcon className="h-6 w-6 text-gray-400" />
            )}
          </button>
        </div>
        <button className="mt-14 w-full rounded-md bg-[#04C323] py-3 font-black text-white">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
