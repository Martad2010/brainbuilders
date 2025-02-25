"use client";
import { useAppDispatch, useAppSelector } from "@/data/store/hooks";
import { returnErrors } from "@/data/store/reducers/errorReducer";
import { loadUser, login } from "@/data/store/reducers/userSlice";
import { authUserSelector } from "@/data/store/selectors/userSelector";
import axios, { AxiosError, isAxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../utils/Button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const SignUpForm = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(true);
  const [isNewsChecked, setIsNewsChecked] = useState(true);

  const navigate = useRouter(),
    init = {
      password: "",
      type: "individual",
    },
    [state, setState] = useState<any>(init),
    textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let { name, value } = e.target;
      setState((prev: any) => {
        return { ...prev, [name]: value };
      });
    },
    [loading, setLoading] = useState(false),
    { isLoggedIn } = useAppSelector(authUserSelector),
    dispatch = useAppDispatch();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e?.preventDefault();
    if (
      !state?.email ||
      !state?.password ||
      !state?.firstName ||
      !state?.lastName ||
      !state?.phone
    )
      return toast.info("Please fill out all fields");
    console.log({ state });

    // if (state?.password && state?.confirmPassword)
    if (state?.password !== state?.confirmPassword)
      return toast.error("Password do not match");

    setLoading(true);
    try {
      let newState = { ...state };
      delete newState?.confirmPassword;

      let res = await axios.post(`/api/v1/auth/register`, { ...newState });
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
          let { error: errors }: resErr = err?.response?.data;
          if (errors && errors?.length > 1) {
            dispatch(
              returnErrors({ error: errors, status: err?.response?.status }),
            );
          } else {
            let errMsg =
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
      <h1 className="mb-9 text-center text-2xl font-black text-[#002724] md:text-[32px]">
        Create your account!
      </h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          className="mb-5 h-14 w-full rounded-md bg-[#FAFAFA] px-4 text-sm font-bold outline-none placeholder:text-[#1C1C1C99]/60"
          style={{
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
          onChange={textChange}
          name="firstName"
          value={state?.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="mb-5 h-14 w-full rounded-md bg-[#FAFAFA] px-4 text-sm font-bold outline-none placeholder:text-[#1C1C1C99]/60"
          style={{
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
          onChange={textChange}
          name="lastName"
          value={state?.lastName}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="mb-5 h-14 w-full rounded-md bg-[#FAFAFA] px-4 text-sm font-bold outline-none placeholder:text-[#1C1C1C99]/60"
          style={{
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
          onChange={textChange}
          name="email"
          value={state?.email}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="mb-5 h-14 w-full rounded-md bg-[#FAFAFA] px-4 text-sm font-bold outline-none placeholder:text-[#1C1C1C99]/60"
          style={{
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
          onChange={textChange}
          name="phone"
          value={state?.phone}
        />
        {/* <input
          type="password"
          placeholder="Password"
          className="mb-5 h-14 w-full rounded-md bg-[#FAFAFA] px-4 text-sm font-bold outline-none placeholder:text-[#1C1C1C99]/60"
          style={{
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
          onChange={textChange}
          name="password"
          value={state?.password}
        /> */}
        <PasswordInput
          name="password"
          state={state}
          textChange={textChange}
          placeholder="Password"
        />
        <PasswordInput
          name="confirmPassword"
          state={state}
          textChange={textChange}
          placeholder={"Confirm Password"}
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
        {/* <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 w-full rounded-md bg-[#04C323] py-3 font-black text-white"
          >
          Sign Up
        </button> */}
        <Button
          type="submit"
          className="mt-8 w-full rounded-md bg-[#04C323] py-3 font-black text-white"
          onClick={handleSubmit}
          isLoading={loading}
        >
          Sign Up
        </Button>
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

export const PasswordInput = ({
  textChange,
  name,
  state,
  placeholder,
}: {
  name: string;
  state: any;
  textChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  placeholder?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative mb-5">
      <input
        id={name || "password"}
        type={showPassword ? "text" : "password"}
        className="h-12 w-full rounded-md bg-[#FAFAFA] px-4 pr-12 outline-none"
        onChange={textChange}
        name={name}
        value={state?.[name]}
        placeholder={placeholder || "******"}
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
  );
};