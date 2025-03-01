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
        <div className="w-full px-0 lg:px-12 xl:w-[60%]">
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
                Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor
                sit amet, consectetur adipiscing elit, Ipsum dolor sit amet,
                consectetur adipiscing elit, ipsum dolor sit amet, consectetur
                adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing
                elit, ipsum dolor sit amet, consectetur adipiscing elit, Ipsum
                dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
                amet, consectetur adipiscing elit, Ipsum dolor sit amet,
                consectetur adipiscing elit, ipsum dolor sit amet, consectetur
                adipiscing elit, Ipsum dolor sit amet, consec
              </p>
              <p className="font-switch mt-3 font-normal text-black md:font-black">
                dipiscing elit, Ipsum dolor sit amet, consectetur adipiscing
                elit, ipsum dolor sit amet, consectetur adipiscing elit, Ipsum
                dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
                amet, consectetur adipiscing elit, Ipsum dolor sit amet,
                consectetur adipiscing elit, ipsum dolor sit amet, consectetur
                adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing
                elit, ipsum dolor sit amet, consectetur adipiscing elit, Ipsum
                dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
                amet, consectetur adipiscing elit, Ipsum dolor sit amet,
                consectetur adipiscing elit, ipsum dolor sit amet, consectetur
                adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing
                elit, ipsum dolor sit amet, consectetur adipiscing elit, Ipsum
                dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
                amet, consectetur adipiscing elit, Ipsum dolor sit amet,
                consectetur adipiscing elit, ipsum dolor sit{" "}
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
};
