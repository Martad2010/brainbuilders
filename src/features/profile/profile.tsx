import { profileActions } from "@/data/constants";
import Image from "next/image";

export const Profile = () => {
  return (
    <main
      className="flex min-h-screen px-0 lg:px-12"
      style={{
        background: 'url("/images/profile-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex items-center justify-center py-20">
        <div className="flex w-full flex-col items-center justify-start gap-16 md:flex-row lg:w-[80%]">
          <div className="shrink-0">
            <div className="flex items-center justify-center md:items-start md:justify-start">
              <Image
                src={"/images/profile-dp.png"}
                alt="profile image"
                width={207}
                height={210}
                className="rounded-[32px]"
              />
            </div>
            {/* personal information */}
            <div className="mt-7">
              <p className="text-xl font-bold text-[#0B2239]">
                Personal Information
              </p>
              <p className="font-bold text-[#4A4E4F]">Name: Abdul Rauf</p>
              <p className="font-bold text-[#4A4E4F]">
                Email: abdulrauf344@gmail.com
              </p>
              <p className="font-bold text-[#4A4E4F]">D.O.B: 18 - 94 - 2004</p>
            </div>
            {/* privacy settings */}
            <div className="mt-7">
              <p className="text-xl font-bold text-[#0B2239]">
                Privacy Settings
              </p>
              <p className="font-bold text-[#4A4E4F]">Change your password</p>
              <p className="font-bold text-[#4A4E4F]">Verify your Email</p>
            </div>
            {/* payment settings */}
            <div className="mt-7">
              <p className="text-xl font-bold text-[#0B2239]">
                Payment Settings
              </p>
              <p className="font-bold text-[#4A4E4F]">Change payment details</p>
              <p className="font-bold text-[#4A4E4F]">Verify your Email</p>
            </div>
          </div>
          <div className="w-full">
            <div className="hidden md:block">
              <h1 className="text-[32px] font-bold text-[#0B2239]">
                Abdul Rauf
              </h1>
              <p className="font-bold text-[#4A4E4F]">abdulrauf344@gmail.com</p>
              <div className="flex items-center gap-2">
                <p className="font-bold text-[#4A4E4F]">Level:</p>
                <Image
                  src={"/images/pro.svg"}
                  alt="pro icon"
                  width={31}
                  height={31}
                />
              </div>
            </div>
            <div className="mt-1 grid grid-cols-2 items-center gap-6 font-bold md:mt-9 md:flex md:gap-8">
              <button className="h-[54px] rounded-lg bg-[#F17700] px-0 text-white md:px-[41px]">
                <span className="text-lg md:text-2xl">13</span> coins left
              </button>
              <button className="h-[54px] rounded-lg bg-[#32A350] px-0 text-white md:px-[41px]">
                Buy coins
              </button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-4 md:gap-x-9">
              {profileActions.map((action) => (
                <button
                  key={action.id}
                  className="w-full rounded-[9px] bg-white py-2 text-base font-bold text-[#4A4E4F] md:text-xl"
                  style={{
                    boxShadow: "0px 2px 2.8px 0px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {action.action}
                </button>
              ))}
              <button className="col-span-2 h-[48px] w-full rounded-xl bg-[#E34033] text-base font-bold text-white md:h-[64px] md:rounded-[9px] md:text-xl">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
