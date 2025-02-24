import { scores } from "@/data/constants";
import Image from "next/image";

export const Leaderboard = () => {
  return (
    <main>
      <div className="leaderboard-bg h-[302px] w-full"></div>
      <div className="container mx-auto mt-8 flex w-full flex-col gap-5 md:mb-11 md:mt-11 md:w-[90%]">
        <h1 className="text-2xl font-bold text-black lg:text-5xl">
          Leaderboard
        </h1>
        {scores.map((score) => (
          <div
            key={score.id}
            className="flex h-[35px] items-center justify-between rounded-md bg-[linear-gradient(90deg,_#00336F_0%,_#000024_100%)] pl-4 pr-4 md:pl-20 lg:h-[74px]"
          >
            <div className="flex items-center gap-7 md:gap-[72px]">
              <Image
                src={"/images/ellipse.png"}
                alt="user profile pic"
                width={61}
                height={61}
                className="h-[27px] w-[27px] rounded-full lg:h-[61px] lg:w-[61px]"
              />
              <h2 className="text-center text-sm font-bold text-white lg:text-[26px]">
                {score.name}
              </h2>
            </div>
            <div className="flex items-center gap-7 md:gap-14">
              <div className="flex h-[20px] w-[78px] items-center justify-center rounded-md bg-white text-sm font-bold text-[#1C1C1CB8]/60 lg:h-[41px] lg:w-[231px] lg:text-[26px]">
                {score.score}
              </div>
              <div className="h-5 rounded-md bg-white px-2 text-sm font-bold text-[#1C1C1CB8]/60 lg:h-[41px] lg:text-[26px] flex items-center">
                {score.rank}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
