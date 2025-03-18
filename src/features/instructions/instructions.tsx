"use client";
import { useState } from "react";
import { PurifiedText } from "../about";

export const Instructions = () => {
  const [type, setType] = useState("");
  return (
    <main className="">
      <div className="instructions-bg flex h-[392px] w-full items-center justify-center">
        <h1 className="text-[32px] font-bold text-white md:text-5xl md:font-black">
          Instructions
        </h1>
      </div>
      <div className="container flex w-full justify-center pb-8 pt-10 md:pt-20">
        <div className="w-full px-0 lg:px-12 xl:w-[80%]">
          {/* <h1 className="text-[32px] font-bold text-[#FE8601] md:text-5xl md:font-black">
            Instructions
          </h1> */}
          <PurifiedText
            type={type}
            setType={setType}
            section={"howToPlay"}
            className="font-switch font-normal text-black md:font-black"
          />
          {!type && (
            <>
              <p
                className="font-switch font-normal text-black md:font-black"
                style={{
                  marginTop: "10px",
                }}
              >
                Online Quiz game has 4 or 5 options
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                For each right answer, 5 points will be given.
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Minus 2 points for each question.
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Use of Lifeline: You can use it only once per level
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                50 - 50: Remove two options out of four (deduct 4 coins).
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Skip question: You can pass the question without minus
                points(deduct 4 coins).
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Audience poll: Use the audience poll to check other users choose
                option(deduct 4 coins).
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Reset timer: Reset the timer again if you need more time (deduct
                4 coins).
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Leaderboard: You can compare your score with other users of the
                app.
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Contest Rules: To provide a fair and equal chance of winning to
                all Online Quiz readers, the following are the official rules
                for all contests on Online Quiz.
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Eligibility: All players/users can play the contest.
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                How to Enter: The user can Play the Contest by spending the
                number of coins specified as an entry fee in the contest
                details.
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Choice of law: All the Contest and Operations belong to the
                Brain Builders Team and Apple is not involved in any way with
                the contest.
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                Sponsor: Sponsors data will be shown there in the contest as
                there are many sponsors for the contest.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
};
