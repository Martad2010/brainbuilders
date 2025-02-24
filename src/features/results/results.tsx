import Image from "next/image";

export const Results = () => {
  return (
    <main className="results-bg min-h-auto flex px-0 pb-8 pt-[58px] md:min-h-screen md:px-12">
      <div className="container">
        <div className="-mt-[56px] block md:mt-0 md:hidden">
          <Image
            src="/images/mobile-results-bg.png"
            alt="an image showing achievements"
            width={400}
            height={380}
            className="w-full h-[318px] object-cover"
          />
        </div>
        <div>
          <h1 className="text-[32px] font-bold text-[#0B2167] md:text-[52px] md:font-black">
            Results
          </h1>
          <h2 className="mt-10 text-lg font-bold text-[#004994] md:text-4xl md:font-black md:text-[#E34033]">
            HURRAY!
          </h2>
          <p className="font-switch mt-1 text-base font-normal text-[#002224] md:text-2xl md:font-bold md:text-[#0B2167]">
            Congratulations lola Aisha{" "}
            <span className="inline-block md:hidden">
              You Performed Excellently!
            </span>
          </p>
          <p className="mt-2 hidden text-2xl font-bold text-[#0B2167] md:block">
            You Performed Excellently!
          </p>
          <div className="mt-8 grid w-full grid-cols-2 gap-x-[30px] gap-y-3 md:w-[468px] md:gap-x-12 md:gap-y-[30px]">
            <div
              className="flex h-[59px] items-center rounded-md bg-[#0B2167] px-2 md:h-[72px] md:bg-white md:px-4"
              style={{
                boxShadow: "0px 0px 6.7px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-end gap-2">
                <h3 className="font-switch text-2xl font-bold text-white md:text-[28px] md:font-black md:text-[#31BF51]">
                  87%
                </h3>
                <p className="font-switch mb-1 text-xs font-medium text-white md:text-sm md:font-black md:text-[#002724]">
                  Score Accuracy
                </p>
              </div>
            </div>
            <div
              className="flex h-[59px] items-center rounded-md bg-[#097586] px-2 md:h-[72px] md:bg-white md:px-4"
              style={{
                boxShadow: "0px 0px 6.7px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-end gap-2">
                <h3 className="font-switch text-2xl font-bold text-white md:text-[28px] md:font-black md:text-[#3E91E6]">
                  09
                </h3>
                <p className="font-switch mb-1 text-xs font-medium text-white md:text-sm md:font-black md:text-[#002724]">
                  Total Questions
                </p>
              </div>
            </div>
            <div
              className="flex h-[59px] items-center rounded-md bg-[#31BF51] px-2 md:h-[72px] md:bg-white md:px-4"
              style={{
                boxShadow: "0px 0px 6.7px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-end gap-2">
                <h3 className="font-switch text-2xl font-bold text-white md:text-[28px] md:font-black md:text-[#3E91E6]">
                  07
                </h3>
                <p className="font-switch mb-1 text-xs font-medium text-white md:text-sm md:font-black md:text-[#002724]">
                  Correct
                </p>
              </div>
            </div>
            <div
              className="flex h-[59px] items-center rounded-md bg-[#D63746] px-2 md:h-[72px] md:bg-white md:px-4"
              style={{
                boxShadow: "0px 0px 6.7px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-end gap-2">
                <h3 className="font-switch text-2xl font-bold text-white md:text-[28px] md:font-black md:text-[#F04F23]">
                  02
                </h3>
                <p className="font-switch mb-1 text-xs font-medium text-white md:text-sm md:font-black md:text-[#002724]">
                  Wrong
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex gap-[45px] md:gap-[75px]">
            {/* back */}
            <div className="flex flex-col items-center">
              <div className="flex h-[37px] w-[48px] items-center justify-center rounded-lg bg-[#E36A75] md:h-[64px] md:w-[65px]">
                <Image
                  src={"/images/arrow-left.svg"}
                  alt="arrow left"
                  width={25}
                  height={25}
                />
              </div>
              <p className="font-switch mt-4 text-center text-sm font-normal text-black md:font-black md:text-[#F7F7F7]">
                Back
              </p>
            </div>
            {/* review */}
            <div className="flex flex-col items-center">
              <div className="flex h-[37px] w-[48px] items-center justify-center rounded-lg bg-[#3E91E6] md:h-[64px] md:w-[65px]">
                <Image
                  src={"/images/review.svg"}
                  alt="refresh icon"
                  width={25}
                  height={25}
                />
              </div>
              <p className="font-switch mt-4 text-center text-sm font-normal text-black md:font-black md:text-[#F7F7F7]">
                Review Answer
              </p>
            </div>
            {/* outline */}
            <div className="flex flex-col items-center">
              <div className="flex h-[37px] w-[48px] items-center justify-center rounded-lg bg-[#31BF51] md:h-[64px] md:w-[65px]">
                <Image
                  src={"/images/outline.svg"}
                  alt="outline icon"
                  width={25}
                  height={25}
                />
              </div>
              <p className="font-switch mt-4 text-center text-sm font-normal text-black md:font-black md:text-[#F7F7F7]">
                Share Score
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
