"use client";
import { coins } from "@/data/constants";
import { useAppSelector } from "@/data/store/hooks";
import { authUserSelector } from "@/data/store/selectors/userSelector";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const BuyCoins = () => {
  const { isAuth } = useAppSelector(authUserSelector),
    router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push("/login");
  }, [isAuth, router]);

  return (
    <main
      className="min-h-screen w-full px-0 md:px-12"
      style={{
        background: 'url("/images/category.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container pb-[150px] pt-[96px]">
        <div
          className="mx-auto flex w-full flex-col items-center rounded-[29px] border-4 border-white md:w-[90%]"
          style={{
            background: 'url("/images/category-b.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="w-fit rounded-[10px] bg-white px-6 py-5 text-base font-bold text-[#118E96] md:px-11 lg:text-[30px]"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Buy coin
          </div>
          <div className="my-11 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-16 md:gap-y-16">
            {coins.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  item?.link ? window.open(item?.link, "_blank") : {}
                }
                className="flex h-[141px] w-[139px] cursor-pointer flex-col items-center justify-center rounded-[11px] border-[3px] border-[#0B2239] md:w-[211px]"
                style={{
                  backgroundImage: "url('/images/coins-bg.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex h-[19px] min-w-[52px] items-center justify-center rounded-[3px] bg-[#097586] px-1 text-xs font-bold text-white">
                  {item.coins}
                </div>
                <Image
                  src={"/images/big-coins.svg"}
                  alt="coins"
                  width={133}
                  height={91}
                />
                <div className="h-[15px] w-fit rounded-[3px] bg-[#0B2239] px-[11px] text-xs font-bold text-white">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
