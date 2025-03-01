"use client";
import { GlobalState } from "@/data/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import FunAndLearnModal from "../modal/FunAndLearnModal";
import { useAppSelector } from "@/data/store/hooks";
import { authUserSelector } from "@/data/store/selectors/userSelector";

const LearningSection = () => {
  const router = useRouter(),
    { setLocationState } = useContext(GlobalState),
    [isFunAndLearn, setIsFunAndLearn] = useState(false),
    { isAuth } = useAppSelector(authUserSelector);
  return (
    <section
      id="main"
      className="flex min-h-[870px] w-full flex-col items-center xl:max-h-[870px] xl:min-h-screen"
      style={{
        background: 'url("/images/overview-learn-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        // onClick={() => router.push("/games/category")}
        className="mt-12 cursor-pointer rounded-[40px] bg-white px-[50px] py-[9px] text-[22px] font-bold text-[#118E96] md:text-[32px] xl:mt-8"
        style={{
          boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.20)",
        }}
      >
        Click to Learn
      </button>
      <div className="mt-[83px] flex w-fit flex-wrap items-center justify-center gap-[18px] lg:mt-[60px]">
        <div
          className="relative cursor-pointer"
          onClick={() => {
            if (isAuth) setIsFunAndLearn(true);
            else router.push("/login");
          }}
          // onClick={() => {
          //   setLocationState({ type: "funAndLearn" });
          //   router.push("/games/category");
          // }}
        >
          <Image
            src={"/images/learnA.svg"}
            alt="learn"
            width={1048}
            height={966}
            className="h-[150px] w-[164px] object-cover lg:h-[267px] lg:w-[295px]"
          />
          <div className="absolute left-[30px] top-5 lg:left-[57px] lg:top-11">
            <Image
              src={"/images/Play and learn.svg"}
              alt="play and learn"
              width={671}
              height={337}
              className="h-[52px] w-[104px] object-cover lg:h-[93px] lg:w-[178px]"
            />
          </div>
          <div className="absolute bottom-6 left-[33px] rounded-b-full lg:bottom-11 lg:left-[66px]">
            <Image
              src={"/images/learn-vector.svg"}
              alt="vector"
              width={161}
              height={55}
              className="h-[31px] w-[95px] lg:h-[55px] lg:w-[161px]"
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center">
              <p className="text-[12px] font-bold text-white lg:text-base">
                PLAY NOW
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            if (isAuth) {
              setLocationState({ type: "trueOrFalse" });
              router.push("/games/category");
            } else router.push("/login");
          }}
        >
          {/* mobile image */}
          <Image
            src={"/images/mobile-learn-B.svg"}
            alt="learn"
            width={163}
            height={150}
            className="lg:hidden"
          />
          {/* desktop image */}
          <Image
            src={"/images/learnB.svg"}
            alt="learn"
            width={1049}
            height={966}
            className="hidden h-[262px] w-[296px] object-cover lg:block"
          />
          <div className="absolute left-[30px] top-5 lg:left-[58px] lg:top-11">
            <Image
              src={"/images/Brain Tutor.svg"}
              alt="brain and tutor"
              width={670}
              height={337}
              className="h-[52px] w-[104px] object-cover lg:h-[93px] lg:w-[178px]"
            />
          </div>
          <div className="absolute bottom-6 left-[33px] rounded-b-full lg:bottom-11 lg:left-[66px]">
            <Image
              src={"/images/Vector 2.svg"}
              alt="vector"
              width={161}
              height={55}
              className="h-[31px] w-[95px] lg:h-[55px] lg:w-[161px]"
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center">
              <p className="text-[12px] font-bold text-white lg:text-base">
                PLAY NOW
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            if (isAuth) {
              setLocationState({ type: "mathQuiz" });
              router.push("/games/category");
            } else router.push("/login");
          }}
        >
          {/* mobile view */}
          <Image
            src={"/images/mobile-learn-C.svg"}
            alt="learn"
            width={163}
            height={150}
            className="h-[150px] w-[163px] object-cover lg:h-[267px] lg:w-[299px]"
          />
          {/* desktop view */}
          {/* <Image
            src={"/images/learnC.png"}
            alt="learn"
            width={296}
            height={268}
            className="hidden lg:block"
          /> */}
          <div className="absolute left-[30px] top-5 lg:left-[60px] lg:top-11">
            <Image
              src={"/images/Take Exams.svg"}
              alt="take exams"
              width={671}
              height={337}
              className="h-[52px] w-[104px] object-cover lg:h-[93px] lg:w-[178px]"
            />
          </div>
          <div className="absolute bottom-6 left-[36px] rounded-b-full lg:bottom-11 lg:left-[68px]">
            <Image
              src={"/images/Vector 3.svg"}
              alt="vector"
              width={161}
              height={55}
              className="h-[31px] w-[95px] lg:h-[55px] lg:w-[161px]"
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center">
              <p className="text-[12px] font-bold text-white lg:text-base">
                PLAY NOW
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            if (isAuth) {
              setLocationState({ type: "selfChallenge" });
              router.push("/games/category");
            } else router.push("/login");
          }}
        >
          <Image
            src={"/images/learnD.svg"}
            alt="learn"
            width={1048}
            height={966}
            className="h-[150px] w-[164px] object-cover lg:h-[267px] lg:w-[295px]"
          />
          <div className="absolute left-[30px] top-5 lg:left-[57px] lg:top-11">
            <Image
              src={"/images/Challenge Yourself.svg"}
              alt="challenge yourself"
              width={671}
              height={337}
              className="h-[52px] w-[104px] object-cover lg:h-[93px] lg:w-[178px]"
            />
          </div>
          <div className="absolute bottom-6 left-[33px] rounded-b-full lg:bottom-11 lg:left-[66px]">
            <Image
              src={"/images/Vector 4.svg"}
              alt="vector"
              width={161}
              height={55}
              className="h-[31px] w-[95px] lg:h-[55px] lg:w-[161px]"
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center">
              <p className="text-[12px] font-bold text-white lg:text-base">
                PLAY NOW
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-[80px] flex items-center gap-7">
        <div className="cursor-pointer">
          <Image
            src="/images/google-play.svg"
            alt="google-play"
            width={204}
            height={192}
            className="h-[23px] w-[74px] rounded object-cover md:h-[47px] md:w-[150px] md:rounded-lg"
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src="/images/apple-store.svg"
            alt="apple-store"
            width={150}
            height={45}
            className="h-[22px] w-[74px] rounded object-cover md:h-[45px] md:w-[150px] md:rounded-lg"
          />
        </div>
      </div> */}
      <FunAndLearnModal isOpen={isFunAndLearn} setIsOpen={setIsFunAndLearn} />
    </section>
  );
};

export default LearningSection;
