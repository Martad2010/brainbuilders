"use client";
import { faqs } from "@/data/constants";
import Image from "next/image";
import { useState } from "react";

export const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);
  return (
    <main className="">
      <div className="faq-bg flex h-[392px] w-full flex-col items-center justify-center">
        <h1 className="text-[50px] font-bold text-[#01B5F9] md:text-[64px]">
          FAQs
        </h1>
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
      </div>
      <div className="container pb-24 pt-24">
        <div className="mx-auto flex w-full flex-col gap-4 md:w-[80%]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              onClick={() => setActiveFaq(faq.id)}
              className="cursor-pointer rounded-md border border-[rgba(11,34,57,0.50)] bg-white px-[23px] pb-[11px] pt-[18px]"
            >
              <h2 className="font-black text-[#002724]">{faq.question}</h2>
              <div className={`${activeFaq === faq.id ? "block" : "hidden"}`}>
                {faq.answer.map((answer, index) => (
                  <p
                    key={index}
                    className={`text-[13px] font-bold text-[#002724] mt-2`}
                  >
                    {answer}
                  </p>
                ))}
                <ul>
                  {faq.list?.map((list, index) => (
                    <li
                      key={index}
                      className={`text-[13px] font-bold text-[#002724] list-disc list-inside mt-2`}
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
