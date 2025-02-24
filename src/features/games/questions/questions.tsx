import Image from "next/image";

export const Questions = () => {
  return (
    <main
      className="min-h-screen px-0 py-[101px] md:px-12"
      style={{
        backgroundImage: "url('/images/questions-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex h-full justify-end">
        <div className="">
          <div className="mb-4 flex justify-end gap-4">
            <div className="flex items-center gap-4 rounded-[25px] bg-white px-4 py-[10px]">
              <Image
                src={"/images/coin.svg"}
                alt="coin"
                width={19}
                height={19}
              />
              <p className="text-2xl font-bold text-black">:</p>
              <p className="text-sm font-bold text-black">12</p>
            </div>
            <div className="flex items-center gap-[10px] rounded-[25px] border border-white px-[9px] py-[13px]">
              <Image
                src={"/images/tick.svg"}
                alt="tick icon"
                width={24}
                height={23}
              />
              <p className="text-sm font-bold text-white">12</p>
              <div className="h-[23px] w-[1px] bg-white"></div>
              <div className="h-6 w-6 rounded-full border-[2px] border-[#E34033] text-2xl font-bold text-[#E34033] flex items-center justify-center">
                x
              </div>
              <p className="text-sm font-bold text-white">0</p>
            </div>
          </div>
          <div className="relative bg-white px-2 py-3">
            {/* question number */}
            <div
              className="absolute left-8 top-0 w-fit rounded-lg bg-[#37B954] pb-2 pl-2 pr-3 pt-1 text-lg font-bold text-white"
              style={{
                boxShadow: "-1px -4px 6.2px 2px rgba(0, 0, 0, 0.25) inset",
              }}
            >
              Question 3/4
            </div>
            {/* question box */}
            <div className="w-full rounded-xl border border-white bg-[#003645] px-4 pb-16 pt-12 md:w-[644px] md:px-14">
              {/* question */}
              <div className="rounded-[5px] bg-white px-7 py-10 text-2xl font-bold text-black">
                Which of these is the strongest bone ?
              </div>
              <div className="mt-7 grid gap-x-[94px] gap-y-3 md:grid-cols-2">
                {/* option A */}
                <div className="flex h-[59px] cursor-pointer items-center rounded-md bg-white pl-[6px]">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-[#0071C0] text-xl font-bold text-white md:text-2xl"
                    style={{
                      boxShadow: "1px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    A
                  </div>
                  <p className="w-full text-center text-xl font-bold text-black md:text-2xl">
                    Scapula
                  </p>
                </div>
                {/* option B */}
                <div className="flex h-[59px] cursor-pointer items-center rounded-md bg-white pl-[6px]">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-[#F88907] text-xl font-bold text-white md:text-2xl"
                    style={{
                      boxShadow: "1px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    B
                  </div>
                  <p className="w-full text-center text-xl font-bold text-black md:text-2xl">
                    Teeth
                  </p>
                </div>
                {/* option C */}
                <div className="flex h-[59px] cursor-pointer items-center rounded-md bg-white pl-[6px]">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-[#03A61D] text-xl font-bold text-white md:text-2xl"
                    style={{
                      boxShadow: "1px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    C
                  </div>
                  <p className="w-full text-center text-xl font-bold text-black md:text-2xl">
                    Skull
                  </p>
                </div>
                {/* option D */}
                <div className="flex h-[59px] cursor-pointer items-center rounded-md bg-white pl-[6px]">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-[#0F3556] text-xl font-bold text-white md:text-2xl"
                    style={{
                      boxShadow: "1px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    D
                  </div>
                  <p className="w-full text-center text-xl font-bold text-black md:text-2xl">
                    Spinal Cord
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-1/2 flex translate-x-1/2 transform items-center gap-7 md:right-8 md:translate-x-0 md:transform-none">
              <button className="h-[26px] w-[116px] rounded-2xl bg-[#F17700] text-[17px] font-bold text-white md:h-[36px]">
                Prev
              </button>
              <button className="h-[26px] w-[116px] rounded-2xl bg-[#37B954] text-[17px] font-bold text-white md:h-[36px]">
                Next
              </button>
            </div>
          </div>
          {/* actions buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:mt-[61px]">
            <button
              className="rounded-[25px] bg-[#F17700] px-6 py-1 text-[11px] font-bold text-white md:py-2 md:text-base"
              style={{
                boxShadow: "0px -4px 6.4px 0px rgba(0, 0, 0, 0.25) inset",
              }}
            >
              50 / 50
            </button>
            <button
              className="rounded-[25px] bg-[#002724] px-6 py-1 text-[11px] font-bold text-white md:py-2 md:text-base"
              style={{
                boxShadow: "0px -4px 6.4px 0px rgba(0, 0, 0, 0.25) inset",
              }}
            >
              Audience poll
            </button>
            <button
              className="rounded-[25px] bg-[#118E96] px-6 py-1 text-[11px] font-bold text-white md:py-2 md:text-base"
              style={{
                boxShadow: "0px -4px 6.4px 0px rgba(0, 0, 0, 0.25) inset",
              }}
            >
              Skip questions
            </button>
            <button
              className="rounded-[25px] bg-[#E34033] px-6 py-1 text-[11px] font-bold text-white md:py-2 md:text-base"
              style={{
                boxShadow: "0px -4px 6.4px 0px rgba(0, 0, 0, 0.25) inset",
              }}
            >
              Restart time
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
