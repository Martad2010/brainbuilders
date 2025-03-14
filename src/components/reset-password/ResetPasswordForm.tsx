/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios, { AxiosError, isAxiosError } from "axios";
import { returnErrors } from "@/data/store/reducers/errorReducer";
import { useAppDispatch } from "@/data/store/hooks";
import Button from "../utils/Button";

const ResetPasswordForm = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false),
    tabs = ["email", "password"],
    [tab, setTab] = useState(tabs?.[0]),
    navigate = useRouter(),
    init = {},
    [state, setState] = useState<any>(init),
    textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState((prev: any) => {
        return { ...prev, [name]: value };
      });
    },
    [loading, setLoading] = useState(false),
    dispatch = useAppDispatch(),
    handleSubmit = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      e?.preventDefault();
      if (tab === tabs?.[0])
        if (!state?.email) return toast.info("Please fill out your email");
      if (tab === tabs?.[1]) {
        if (!state?.token)
          return toast.info("Please fill the OTP sent to your email");
        if (!state?.newPassword)
          return toast.info("Please fill in your new password");
        if (state?.newPassword !== state?.confirmPassword)
          return toast.info("Password do not match");
      }

      setLoading(true);
      try {
        const newState = { ...state };
        delete newState?.confirmPassword;
        console.log({ newState });

        const res = await axios.post(
          tab === tabs?.[0]
            ? `/api/v1/auth/request-reset-password`
            : `/api/v1/auth/reset-password`,
          { ...newState },
        );
        console.log({ resp: res?.data });
        toast.success(res?.data?.message);
        if (tab === tabs?.[0]) {
          setTab(tabs?.[1]);
          setState({});
        } else navigate.push("/login");
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        if (isAxiosError(error)) {
          if (error) console.log({ error: error?.response?.data, err: error });
          if (error?.response?.status === 429)
            toast.error(error?.response?.data);
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

  useEffect(() => {
    navigate.prefetch("/login");
  }, [navigate]);

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
        {tab === tabs?.[0] && (
          <>
            <label htmlFor="email" className="text-sm font-bold text-[#002724]">
              EMAIL
            </label>
            <br />
            <div className="relative mb-5">
              <input
                id="email"
                type={"email"}
                className="h-12 w-full rounded-md bg-[#FAFAFA] px-4 pr-12 outline-none"
                onChange={textChange}
                name="email"
                value={state?.email}
              />
            </div>
          </>
        )}
        {tab === tabs?.[1] && (
          <>
            <label
              htmlFor="old-password"
              className="text-sm font-bold text-[#002724]"
            >
              OTP
            </label>
            <br />
            <div className="relative mb-5">
              <input
                id="otp"
                type={"tel"}
                className="h-12 w-full rounded-md bg-[#FAFAFA] px-4 pr-12 outline-none"
                name="token"
                value={state?.token}
                onChange={textChange}
              />
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
                name="newPassword"
                value={state?.newPassword}
                onChange={textChange}
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
                name="confirmPassword"
                value={state?.confirmPassword}
                onChange={textChange}
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
          </>
        )}
        {/* <button className="mt-14 w-full rounded-md bg-[#04C323] py-3 font-black text-white">
          Reset Password
        </button> */}
        <Button
          type="submit"
          className="mt-14 w-full rounded-md bg-[#04C323] py-3 font-black text-white"
          onClick={handleSubmit}
          isLoading={loading}
        >
          {tab === tabs?.[0] ? `Send OTP` : `Reset Password`}
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
