"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobalState } from "@/data/Context";
import { useAppSelector } from "@/data/store/hooks";
import { authUserSelector } from "@/data/store/selectors/userSelector";
import FunAndLearnModal from "../modal/FunAndLearnModal";
import LearningCard from "./LearningCard";

const LearningSection = () => {
  const router = useRouter();

  const { setLocationState } = useContext(GlobalState);

  const { isAuth } = useAppSelector(authUserSelector);

  const [isFunAndLearn, setIsFunAndLearn] = useState(false);

  useEffect(() => {
    setLocationState(null);
    router.prefetch("/games/category");
    router.prefetch("/games/questions");
    router.prefetch("/login");
  }, [router, setLocationState]);

  const navigate = (callback: () => void) => {
    if (!isAuth) {
      router.push("/login");
      return;
    }

    callback();
  };

  const cards = useMemo(
    () => [
      {
        label: "Fun and Learn",
        frameImage: "/images/learnA.svg",
        topImage: "/images/Play and learn.svg",
        vectorImage: "/images/learn-vector.svg",
        color: "#00ACCA",
        onClick: () =>
          navigate(() => {
            setIsFunAndLearn(true);
          }),
      },
      {
        label: "True or False",
        frameImage: "/images/learnB.svg",
        mobileFrameImage: "/images/mobile-learn-B.svg",
        topImage: "/images/Brain Tutor.svg",
        vectorImage: "/images/Vector 2.svg",
        color: "#FD8500",
        onClick: () =>
          navigate(() => {
            setLocationState({ type: "trueOrFalse" });
            router.push("/games/questions");
          }),
      },
      {
        label: "Math Mania",
        frameImage: "/images/mobile-learn-C.svg",
        mobileFrameImage: "/images/mobile-learn-C.svg",
        topImage: "/images/Take Exams.svg",
        vectorImage: "/images/Vector 3.svg",
        color: "#1485CA",
        onClick: () =>
          navigate(() => {
            setLocationState({ type: "mathQuiz" });
            router.push("/games/category");
          }),
      },
      {
        label: "Self Challenge",
        frameImage: "/images/learnD.svg",
        topImage: "/images/Challenge Yourself.svg",
        vectorImage: "/images/Vector 4.svg",
        color: "#4A4E4F",
        onClick: () =>
          navigate(() => {
            setLocationState({ type: "selfChallenge" });
            router.push("/games/questions");
          }),
      },
    ],
    [isAuth]
  );

  return (
    <section
      id="main"
      className="flex min-h-screen w-full flex-col items-center bg-cover bg-center bg-no-repeat px-4 py-10 lg:py-16 lg:px-32"
      style={{
        backgroundImage: 'url("/images/overview-learn-bg.svg")',
      }}
    >
      <button
        className="rounded-full bg-white px-10 py-3 text-xl font-bold text-[#118E96] shadow-lg transition hover:scale-105 lg:px-14 lg:text-3xl"
      >
        Click to Learn
      </button>

      <div className="mt-14 grid w-full grid-cols-2 place-items-center gap-y-8 md:gap-x-8 lg:mt-20 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12">
        {cards.map((card) => (
          <LearningCard key={card.label} {...card} />
        ))}
      </div>

      <FunAndLearnModal
        isOpen={isFunAndLearn}
        setIsOpen={setIsFunAndLearn}
      />
    </section>
  );
};

export default LearningSection;