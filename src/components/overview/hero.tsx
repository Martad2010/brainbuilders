"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <section
      className="overview-hero-bg flex h-[932px] w-full flex-col justify-start px-4 md:h-[calc(100vh-64px)] md:max-h-[980px] md:justify-center lg:px-20"
      // style={{
      //   background: 'url("/images/overview-hero-bg.svg")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="container">
        <h1 className="mt-32 w-full text-[44px] font-bold text-[#0B2167] md:mt-0 md:w-[620px] md:text-[64px]">
          Catch Fun While Learning!
        </h1>
        <p className="text-base font-bold text-black md:text-[32px] lg:text-white">
          Test your skills | Win big
        </p>
        <button
          onClick={() => router.push("/login")}
          className="mt-6 w-fit rounded-2xl bg-[#FE8601] px-[17px] py-[2px] text-base font-bold text-white md:mt-10 md:rounded-md md:text-xl md:text-[#002724]"
          style={{
            boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Get Started
        </button>
        <div className="mt-7 flex items-center gap-[14px] md:mt-12 md:gap-7">
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
    </section>
  );
};

export default Hero;
