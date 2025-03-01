"use client";
import { plans, plansDuration } from "@/data/constants";
import { GlobalState } from "@/data/Context";
import { useAppSelector } from "@/data/store/hooks";
import { authUserSelector } from "@/data/store/selectors/userSelector";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export const Pricing = () => {
  const [tab, setTab] = useState(""),
    { setLocationState } = useContext(GlobalState);

  const { isAuth } = useAppSelector(authUserSelector),
    router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push("/login");
  }, [isAuth, router]);

  return (
    <main
      className="h-full bg-white px-0 pb-4 pt-4 lg:pb-20 xl:px-12"
      style={{
        background: 'url("/images/pricing-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold text-[#002724] lg:text-[32px]">
          CHOOSE A PLAN <br /> THAT&apos;S RIGHT FOR YOU
        </h1>
        <p className="mt-1 text-center text-sm font-bold text-[#002724] lg:text-base">
          Choose the billing package that suits you the best. You can switch
          anytime.
        </p>
        {/* tabs */}
        <div className="mt-3 flex items-center rounded-[55px] border border-[#0B2239] bg-[rgba(235,235,235,0.40)] px-4 py-[9px] md:px-[25px]">
          <div
            onClick={() => setTab("")}
            className={`satoshi ${tab === "" ? "rounded-[22px] border border-[#EEE] bg-white" : ""} cursor-pointer px-3 py-[10px] text-sm font-medium text-[#0B2239] md:px-[23px] md:text-xl`}
          >
            All
          </div>
          {plansDuration.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setTab(plan.name)}
              className={`satoshi ${tab === plan.name ? "rounded-[22px] border border-[#EEE] bg-white" : ""} cursor-pointer px-3 py-[10px] text-sm font-medium text-[#0B2239] md:px-[23px] md:text-xl`}
            >
              {plan.name}
            </div>
          ))}
        </div>
        <div className={`mt-7 flex w-full flex-wrap justify-center gap-6`}>
          {plans
            .filter((plan) => tab === "" || plan.type === tab.toLowerCase())
            .map((plan) => (
              <div
                key={plan.id}
                className="w-[150px] rounded-[10px] bg-[#0F3556] px-3 pb-4 pt-4 md:w-[247px] md:rounded-xl md:px-4 md:pb-14 md:pt-7"
              >
                <h2 className="font-switch text-[10px] font-black uppercase text-white md:text-xl md:font-bold md:capitalize">
                  {plan.name}
                </h2>
                <div className="mt-4 flex flex-col gap-2 md:mt-8 md:gap-3">
                  {plan.offers?.map((offer, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 md:gap-3"
                    >
                      <Image
                        src={"/images/arrow-check.svg"}
                        alt="arrow-check"
                        width={20}
                        height={20}
                        className="h-[10px] w-[10px] object-cover md:h-[20px] md:w-[20px]"
                      />
                      <p className="text-[9px] font-bold text-white md:text-sm">
                        {offer}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    if (plan?.type !== "yearly") {
                      setLocationState({
                        amount: plan?.amount,
                        currency: "naira",
                        paymentType: plan?.paymentType,
                        item: plan,
                      });
                      router.push("/payment-mode");
                    }
                  }}
                  className="font-switch mt-6 h-[41px] w-full rounded-md border border-[rgba(0,0,0,0.20)] bg-[#31BF51] text-[10px] font-medium text-white md:mt-12 md:rounded-[33px] md:bg-[#30749F] md:text-sm md:font-black"
                  style={{
                    boxShadow:
                      "-3px -3px 3.7px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 8.7px 0px rgba(0, 0, 0, 0.24)",
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};
