"use client";
import { faqs } from "@/data/constants";
import Image from "next/image";
import { useState } from "react";

export const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);
  return (
    <main className="faq-bg flex min-h-screen px-0 lg:px-12">
      <div className="container flex justify-end pb-24">
        <div className="flex w-full flex-col-reverse items-center justify-center lg:items-end xl:flex-row xl:justify-between">
          <div className="flex w-full items-center justify-center gap-7 md:w-[601px]">
            <div className="cursor-pointer">
              <Image
                src="/images/google-play.svg"
                alt="google-play"
                width={204}
                height={192}
                className="h-[25px] w-[74px] rounded object-cover md:h-[47px] md:w-[150px] md:rounded-lg"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/images/apple-store.svg"
                alt="apple-store"
                width={150}
                height={45}
                className="h-[25px] w-[74px] rounded object-cover md:h-[45px] md:w-[150px] md:rounded-lg"
              />
            </div>
          </div>
          <div className="mb-11 mt-96 md:mt-11">
            <h1 className="text-[50px] font-bold text-[#01B5F9] md:text-[64px]">
              FAQs
            </h1>
            <div className="mt-4 flex w-full flex-col gap-4 md:w-[601px]">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  onClick={() => setActiveFaq(faq.id)}
                  className="cursor-pointer rounded-md border border-[rgba(11,34,57,0.50)] bg-white px-[23px] pb-[11px] pt-[18px]"
                >
                  <h2 className="font-black text-[#002724]">
                    What is Cansed quiaione sequi n?
                  </h2>
                  <p
                    className={`${activeFaq === faq.id ? "block" : "hidden"} text-[13px] font-bold text-[#002724]`}
                  >
                    What is odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Neque porro
                    quisquam est, qui dolorem ipsum quia dolor sit amet,
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
