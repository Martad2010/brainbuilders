import { subcategory } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";

export const SubCategory = () => {
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
      <div className="container pb-[260px] pt-[96px]">
        <div
          className="mx-auto flex w-full flex-col items-center rounded-[29px] border-4 border-white pb-10 lg:w-[90%] xl:pb-0"
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
            Select a sub category
          </div>
          <div className="my-11 grid grid-cols-2 gap-16 xl:grid-cols-4">
            {subcategory.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-y-2 xl:gap-y-7">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={1080}
                  height={1080}
                  className="h-[85px] w-[85px] rounded-full object-cover md:h-[180px] md:w-[180px]"
                />
                <Link
                  href={"/games/level"}
                  className="rounded-[5px] bg-[#0B2239] px-8 py-1 text-center text-[10px] font-bold text-white md:text-[22px] xl:px-10 xl:py-3"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
