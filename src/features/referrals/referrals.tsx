"use client";
import { copyToClipboard } from "@/components/utils/copyToClipboard";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export const Referrals = () => {
  const code = "DDDAYU892";

  return (
    <main
      className="h-full w-full pb-16 pt-32 md:h-[920px] md:pb-12 md:pt-0"
      style={{
        background: "url('/images/refer-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full flex-col justify-end">
        <div className="container px-4 md:px-12">
          <h1 className="text-4xl font-bold text-[#0F3556] md:text-[48px] md:font-black">
            Refer and Earn
          </h1>
          <p className="max-w-[70%] font-black text-[#002724] md:max-w-[50%] lg:max-w-[537px]">
            Refer your Friends & Family. You will get 50 Coins Every time your
            Referral Code is used: Your friends will also get 50 Coins by using
            your Referral Code
          </p>
          <p className="mt-14 w-[70%] text-2xl font-bold text-[#F17700] md:w-full md:text-[32px] md:font-black">
            Share Your Referral Code Now!
          </p>
        </div>
        <div className="mt-8 flex h-[114px] w-full items-center bg-[#0B2239]">
          <div className="container px-4 md:px-12">
            <p className="font-medium text-white md:font-bold">
              YOUR REFERRAL CODE
            </p>
            <div className="flex items-center gap-2">
              <div className="flex h-[42px] w-[200px] items-center rounded bg-white pl-5 text-lg font-bold text-black outline-none md:w-[258px]">
                {code}
              </div>
              <button
                onClick={() => copyToClipboard(code)}
                className="ml-5 h-[31px] w-[113px] rounded-[3px] bg-[#F17700] font-bold text-white"
              >
                Copy code
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-16 flex flex-col items-center justify-between px-4 md:flex-row md:items-end md:px-12">
          <div className="">
            <p className="text-center text-2xl text-[32px] font-bold text-[#0B2239] md:text-left md:font-black">
              Explore more
            </p>
            <p className="text-center text-lg font-bold text-[#F17700] md:text-left md:text-xl">
              Download the Mobile App
            </p>
          </div>
          <div className="mt-3 flex items-center gap-7 md:mt-0">
            <div className="cursor-pointer">
              <Image
                src="/images/google-play.svg"
                alt="google-play"
                width={204}
                height={192}
                className="h-[23px] w-[74px] rounded object-cover md:h-[47px] md:w-[150px] md:rounded-lg"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/images/apple-store.svg"
                alt="apple-store"
                width={150}
                height={45}
                className="h-[22px] w-[74px] rounded object-cover md:h-[45px] md:w-[150px] md:rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};
