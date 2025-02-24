"use client"
import OutOfCoinModal from "@/components/modal/OutOfCoinModal";
import { progress } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Level = () => {
  const [isOutOfCoin, setIsOutOfCoin] = useState(true);
  return (
    <main
      className="min-h-screen w-full px-4 xl:px-12"
      style={{
        background: 'url("/images/category.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <OutOfCoinModal isOpen={isOutOfCoin} setIsOpen={setIsOutOfCoin} />
      <div className="container pb-[260px] pt-[96px]">
        <div className="mx-auto flex w-full flex-col items-center lg:w-[90%]">
          <div
            className="w-fit rounded-[10px] bg-white px-11 py-5 text-base font-bold text-[#118E96] lg:text-[30px]"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Select level
          </div>
          <div className="my-11 grid grid-cols-2 gap-10 lg:grid-cols-4 xl:gap-16">
            {progress.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-y-2 xl:gap-y-7"
              >
                <div
                  className={`h-[120px] w-[120px] rounded-full md:h-[181px] md:w-[181px] ${item.status === "unlocked" ? "bg-[linear-gradient(180deg,_#19C547_0%,_#076921_100%)]" : "bg-[linear-gradient(180deg,_#30749F_0%,_#0F3556_100%)]"} flex items-center justify-center`}
                >
                  <Image
                    src={
                      item.status === "unlocked"
                        ? "/images/unlocked.svg"
                        : "/images/locked.svg"
                    }
                    alt={item.status === "locked" ? "locked" : "unlocked"}
                    width={73}
                    height={71}
                    className="h-[68px] w-[58px] md:h-[71px] md:w-[73px]"
                  />
                </div>
                <Link
                  href={"/games/questions"}
                  className="cursor-pointer rounded-[5px] bg-[#0B2239] px-10 py-3 text-center text-base font-bold text-white md:text-[22px]"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center md:mt-[77px]">
          <Link
            href={"/games/level"}
            className="rounded-[5px] bg-[#0B2239] px-[54px] py-[15px] text-center text-xl font-bold text-white xl:text-[32px]"
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
};
