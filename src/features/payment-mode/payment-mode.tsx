"use client";
import SuccessModal from "@/components/modal/SuccessModal";
import Image from "next/image";
import { useState } from "react";

export const PaymentMode = () => {
  const [mode, setMode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <main className="payment-mode-bg flex min-h-screen flex-col px-0 pb-6 pt-[60px] md:flex-row md:px-12 md:pb-24">
      <SuccessModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <div className="-mt-[60px] block md:mt-0 md:hidden">
        <Image
          src="/images/mobile-payment-mode-bg.png"
          alt="an image showing showing pos"
          width={430}
          height={318}
          className="h-[318px] w-full object-cover"
        />
      </div>
      <div className="container flex items-center justify-center md:justify-end">
        <div className="w-full md:w-[585px]">
          <h1
            className="font-switch mb-6 mt-6 text-left text-2xl font-black text-[#002724] md:mt-0 md:text-center md:text-[40px] md:text-white"
            style={{
              textShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
            }}
          >
            PAYMENT MODE
          </h1>
          <div className="flex w-full flex-col items-center gap-6 rounded-none border-[6px] border-white bg-transparent p-0 md:w-[585px] md:gap-11 md:rounded-lg md:border md:bg-[#0B2239] md:p-12">
            {/* airtime mode */}
            <div className="flex h-[71px] w-full cursor-pointer items-center justify-between rounded-md bg-[#F2B605] px-6 py-7">
              <p className="text-[13px] font-bold text-black md:text-lg">
                Pay with Airtime (MTN Users only)
              </p>
              <div
                onClick={() => setMode(mode === "airtime" ? "" : "airtime")}
                className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9] md:border-[2px] md:border-black md:bg-transparent"
              >
                {mode === "airtime" && (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#002724]"></div>
                )}
              </div>
            </div>
            {/* card */}
            <div className="flex h-[71px] w-full cursor-pointer items-center justify-between rounded-md bg-[#1DC9A0] px-6 py-7 md:bg-[#FFF]">
              <p className="text-[13px] font-bold text-black md:text-lg">
                Pay with Credit/Debit card
              </p>
              <div
                onClick={() => setMode(mode === "card" ? "" : "card")}
                className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9] md:border-[2px] md:border-black md:bg-transparent"
              >
                {mode === "card" && (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#002724]"></div>
                )}
              </div>
            </div>
            {/* momo */}
            <div className="flex h-[71px] w-full cursor-pointer items-center justify-between rounded-md bg-[#F2B605] px-6 py-7">
              <p className="text-[13px] font-bold text-black md:text-lg">
                Pay with MOMO (MTN Users only)
              </p>
              <div
                onClick={() => setMode(mode === "momo" ? "" : "momo")}
                className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9] md:border-[2px] md:border-black md:bg-transparent"
              >
                {mode === "momo" && (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#002724]"></div>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsSuccess(true)}
              className="font-switch mt-10 h-[48px] w-full rounded-xl bg-[#04C323] text-base font-bold text-white md:h-[70px] md:w-[394px] md:rounded-md md:text-2xl"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentMode;
