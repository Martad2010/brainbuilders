/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Button, { Loader } from "@/components/utils/Button";
import { useAppDispatch, useAppSelector } from "@/data/store/hooks";
import { getUserDetails } from "@/data/store/reducers/userSlice";
import { authUserSelector } from "@/data/store/selectors/userSelector";
import useFetch from "@/data/useFetchQuestions";
import axios, { isAxiosError } from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Questions = () => {
  const {
      examLoad,
      examData,
      isQuestion,
      options,
      isSelected,
      setIsSelected,
      handleNext,
      handlePrev,
      loading,
      setOptions,
    } = useFetch(),
    { user } = useAppSelector(authUserSelector);

  const currentQuestion = examData?.[isQuestion];

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
          {examLoad && examData?.length === 0 ? (
            <></>
          ) : (
            <div className="mb-4 flex justify-end gap-4">
              <div className="flex items-center gap-4 rounded-[25px] bg-white px-4 py-[10px]">
                <Image
                  src={"/images/coin.svg"}
                  alt="coin"
                  width={19}
                  height={19}
                />
                <p className="text-2xl font-bold text-black">:</p>
                <p className="text-sm font-bold text-black">
                  {(user as any)?.points}
                </p>
              </div>
              <div className="hidden items-center gap-[10px] rounded-[25px] border border-white px-[9px] py-[13px]">
                <Image
                  src={"/images/tick.svg"}
                  alt="tick icon"
                  width={24}
                  height={23}
                />
                <p className="text-sm font-bold text-white">12</p>
                <div className="h-[23px] w-[1px] bg-white"></div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-[#E34033] text-2xl font-bold text-[#E34033]">
                  x
                </div>
                <p className="text-sm font-bold text-white">0</p>
              </div>
            </div>
          )}
          <div className="relative bg-white px-2 py-3">
            {examLoad && examData?.length === 0 ? (
              <Loader className="w-full md:w-[644px] md:px-14" />
            ) : (
              <>
                {" "}
                {/* question number */}
                <div
                  className="absolute left-8 top-0 w-fit rounded-lg bg-[#37B954] pb-2 pl-2 pr-3 pt-1 text-lg font-bold text-white"
                  style={{
                    boxShadow: "-1px -4px 6.2px 2px rgba(0, 0, 0, 0.25) inset",
                  }}
                >
                  Question {isQuestion + 1}/{examData?.length}
                </div>
                {/* question box */}
                <div className="w-full rounded-xl border border-white bg-[#003645] px-4 pb-16 pt-12 md:w-[644px] md:px-14">
                  {/* question */}
                  <div className="rounded-[5px] bg-white px-7 py-10 text-2xl font-bold text-black">
                    {currentQuestion?.question} ?
                  </div>
                  <div className="mt-7 grid gap-x-[94px] gap-y-3 md:grid-cols-2">
                    <OptionsList
                      list={currentQuestion?.options}
                      isQuestion={isQuestion}
                      isSelected={isSelected}
                      setIsSelected={setIsSelected}
                      options={options}
                      correctIndex={currentQuestion?.correctOptionIndex}
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-1/2 flex translate-x-1/2 transform items-center gap-7 md:right-8 md:translate-x-0 md:transform-none">
                  <button
                    onClick={handlePrev}
                    className="h-[26px] w-[116px] rounded-2xl bg-[#F17700] text-[17px] font-bold text-white md:h-[36px]"
                  >
                    Prev
                  </button>
                  <Button
                    className="h-[26px] w-[116px] rounded-2xl bg-[#37B954] text-[17px] font-bold text-white md:h-[36px]"
                    isLoading={loading}
                    onClick={handleNext}
                    type="button"
                  >
                    {isQuestion === examData?.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </>
            )}
          </div>
          {/* actions buttons */}
          {examLoad && examData?.length === 0 ? (
            <></>
          ) : (
            <LifeLineOption setOptions={setOptions} />
          )}
        </div>
      </div>
    </main>
  );
};

export const OptionsList = ({
  options,
  list,
  setIsSelected,
  isSelected,
  isQuestion,
  correctIndex,
}: {
  setIsSelected: React.Dispatch<any>;
  isQuestion: number;
  correctIndex: number;
  isSelected: any;
  options: any;
  list: any[];
}) => {
  const [optionList, setOptionList] = useState<any[]>([]);

  const colors = ["#0071C0", "#F88907", "#03A61D", "#0F3556"];
  const getOptionColor = (index: number) => colors[index % colors.length];

  useEffect(() => {
    let rand;
    do {
      rand = Math.abs(Math.floor(Math.random() * list?.length - 1));
    } while (rand === correctIndex - 1);
    // console.log({ rand, list, correctIndex });
    if (options?.fiftyFifty && options?.fiftyFiftyNo === isQuestion) {
      const newList = list?.map((it: any, x: number) => {
        return { ...it, show: rand !== x && correctIndex - 1 !== x };
      });
      setOptionList(newList);
    } else setOptionList(list);
  }, [options, list, isQuestion, correctIndex]);

  return (
    <>
      {optionList
        ?.filter((it) => !it?.show)
        ?.map((it, i) => (
          <div
            className="flex h-[59px] cursor-pointer items-center rounded-md pl-[6px]"
            key={i}
            style={{
              background:
                isSelected?.option === (it?.value || it) &&
                isSelected?.answer - 1 === i
                  ? "#37B954"
                  : "#ffffff",
            }}
            onClick={() => {
              setIsSelected({
                answer: i + 1,
                option: it?.value || it,
              });
            }}
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] text-xl font-bold text-white md:text-2xl`}
              style={{
                boxShadow: "1px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                backgroundColor: getOptionColor(i),
              }}
            >
              {String.fromCharCode(65 + i)}
            </div>
            <p
              className={`w-full text-xl font-bold md:text-2xl ${
                options?.audiencePoll && options?.audiencePollNo === isQuestion
                  ? "flex items-center"
                  : "text-center"
              }`}
              style={{
                color:
                  isSelected?.option === (it?.value || it) &&
                  isSelected?.answer - 1 === i
                    ? "#ffffff"
                    : "#000000",
              }}
            >
              {it?.value}
              {options?.audiencePoll &&
                options?.audiencePollNo === isQuestion && (
                  <AudienceCount option={it} options={list} />
                )}
            </p>
          </div>
        ))}
    </>
  );
};

export const AudienceCount = ({
  options,
  option,
}: {
  options: any[];
  option: any;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reder =
      options?.reduce((ac: any, i: any) => (ac += i?.audienceCount), 0) || 0;
    if (reder) {
      const newer = (option?.audienceCount / reder) * 100;
      setCount(newer);
    }
  }, [option, options]);
  return (
    <>
      <span className="ml-auto">{Number(count).toFixed(0)}%</span>
    </>
  );
};

export const LifeLineOption = ({
  setOptions,
}: {
  setOptions: (d: any, ty: string) => void;
}) => {
  const [lifeLine, setLifeLine] = useState({
      fiftyFifty: false,
      audiencePoll: false,
      resetTime: false,
      skipQuestion: false,
    }),
    [points, setPoints] = useState(0),
    { user } = useAppSelector(authUserSelector),
    dispatch = useAppDispatch(),
    updateLifeLine = async (line: keyof typeof lifeLine) => {
      await handleDeductPoint(line);
    },
    handleDeductPoint = async (line: keyof typeof lifeLine) => {
      try {
        const res = await axios.post(`/api/v1/points/deductPoints`, {
          type: line,
        });
        const deduct = 10;
        if (Number(points) < deduct) return toast.error("Insufficient coin");
        if (lifeLine?.[line]) return toast.warn(`Life line already used`);
        const options = { ...lifeLine, [line]: true };
        setLifeLine(options);
        setOptions(options, line);
        console.log({ da: res?.data });
        dispatch(getUserDetails(res.data));
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        if (isAxiosError(error)) {
          if (error) {
            const errBE: any = error?.response?.data;
            if (errBE?.message) message = errBE?.message;
            console.log({ error: errBE, err: error, message });
          }
          if (error?.response?.status === 429)
            toast.error(error?.response?.data);
          if (message) toast.error(message);
        }
      }
    };

  useEffect(() => {
    setPoints((user as any)?.points);
  }, [user]);

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:mt-[61px]">
        <button
          className="rounded-[25px] bg-[#F17700] px-6 py-1 text-[11px] font-bold text-white md:py-2 md:text-base"
          style={{
            boxShadow: "0px -4px 6.4px 0px rgba(0, 0, 0, 0.25) inset",
          }}
          onClick={() => updateLifeLine("fiftyFifty")}
        >
          50 / 50
        </button>
        <button
          className="rounded-[25px] bg-[#002724] px-6 py-1 text-[11px] font-bold text-white md:py-2 md:text-base"
          style={{
            boxShadow: "0px -4px 6.4px 0px rgba(0, 0, 0, 0.25) inset",
          }}
          onClick={() => updateLifeLine("audiencePoll")}
        >
          Audience poll
        </button>
        <button
          className="rounded-[25px] bg-[#118E96] px-6 py-1 text-[11px] font-bold text-white md:py-2 md:text-base"
          style={{
            boxShadow: "0px -4px 6.4px 0px rgba(0, 0, 0, 0.25) inset",
          }}
          onClick={() => updateLifeLine("skipQuestion")}
        >
          Skip questions
        </button>
        <button
          className="rounded-[25px] bg-[#E34033] px-6 py-1 text-[11px] font-bold text-white md:py-2 md:text-base"
          style={{
            boxShadow: "0px -4px 6.4px 0px rgba(0, 0, 0, 0.25) inset",
          }}
          onClick={() => updateLifeLine("resetTime")}
        >
          Restart time
        </button>
      </div>
    </>
  );
};
