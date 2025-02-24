"use client";
import { category } from "@/data/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Category = () => {
  const router = useRouter();
  return (
    <main
      className="min-h-screen w-full px-0 pb-[90px] pt-[96px] md:px-12"
      style={{
        background: 'url("/images/category.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div
          className="mx-auto flex w-full lg:w-[90%] flex-col items-center rounded-[29px] border-4 border-white pb-10 xl:pb-0"
          style={{
            background: 'url("/images/category-b.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="w-fit rounded-[10px] bg-white px-11 py-5 text-base font-bold text-[#118E96] lg:text-[30px]"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Select a Category
          </div>
          <div className="my-11 w-full grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7 xl:grid-cols-4 xl:gap-x-16 xl:gap-y-16">
            {category.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-2 xl:gap-7"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={1080}
                  height={1080}
                  className="w-[85px] h-[85px] md:h-[180px] md:w-[180px] rounded-full object-cover"
                />
                <button
                  onClick={() => router.push("/games/subcategory")}
                  className="cursor-pointer rounded-[5px] bg-[#0B2239] px-8 py-1 text-center text-[10px] font-bold text-white md:text-[22px] xl:px-10 xl:py-3"
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
