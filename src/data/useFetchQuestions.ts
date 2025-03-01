/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import { GlobalState } from "./Context";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  authUserSelector,
  categorySelector,
} from "./store/selectors/userSelector";
import axios, { AxiosError, isAxiosError } from "axios";
import { toast } from "react-toastify";
import { returnErrors } from "./store/reducers/errorReducer";
import { getDynamicCategoryLogger } from "./store/reducers/LoggerSlice";
import { apiCall } from "./useFetcher";

const useFetch = () => {
  const { locationState: location, setLocationState } = useContext(GlobalState),
    navigate = useRouter(),
    auth = useAppSelector(authUserSelector),
    category = useAppSelector(categorySelector),
    [examData, setExamData] = useState<any[]>([]),
    [examLoad, setExamLoad] = useState(true),
    dispatch = useAppDispatch(),
    [isQuestion, setIsQuestion] = useState(0),
    [isSelected, setIsSelected] = useState<any>(null),
    [answerArr, setAnswerArr] = useState<any[]>([]),
    [newAnswer, setNewAnswer] = useState<any[]>([]),
    [loading, setLoading] = useState(false),
    [result, setResult] = useState(null),
    [quizId, setQuizId] = useState(null),
    [options, setOptions] = useState(null),
    [k, setK] = useState(false),
    [duration] = useState(
      category?.quizSettings?.docs?.find(
        (it: any) => it?.type === location?.type,
      )?.quizTime ||
        category?.config?.docs?.[0]?.timerPerQuestion ||
        10,
    ),
    handleOptions = (d: any, ty: string) => {
      if (d?.skipQuestion && ty === "skipQuestion") {
        if (isQuestion !== examData?.length - 1) {
          setIsSelected(null);
          setIsQuestion(isQuestion + 1);
          setK((i) => !i);
        } else handleSubmit();
      }
      if (d?.resetTime) setK((i) => !i);
      setOptions({ ...d, [`${ty}No`]: isQuestion });
    },
    handleTimeUp = () => {
      if (isQuestion !== examData?.length - 1) {
        setIsSelected(null);
        setK((i) => !i);
        setIsQuestion(isQuestion + 1);
        setNewAnswer([]);
      } else handleSubmit();
    };

  const handleSubmit = async () => {
    try {
      const { type, typeID, key } = location;
      const d = examData?.[isQuestion];
      const findQue = [
        ...answerArr?.map((item) =>
          item?.questionID === d?._id
            ? {
                ...item,
                [type === "guessTheWord" ? "answer" : "option"]:
                  type === "guessTheWord"
                    ? newAnswer?.map((item) => item?.item)?.join("")
                    : isSelected?.answer,
              }
            : item,
        ),
      ];
      console.log({ findQue, d });
      setLoading(true);
      const dd: any = {
        questions: findQue,
      };
      if (type === "contest") dd.typeID = typeID;
      else if (key) dd.key = key?.toString();
      else {
        dd.type = type;
      }
      const res = await axios.post(
        `/api/v1/${
          ["exam", "contest"]?.includes(type)
            ? `${type}Submission`
            : `submission`
        }`,
        { ...dd },
      );

      toast.success(res?.data?.message);
      setLoading(false);
      setIsSelected(null);
      setResult(res?.data?.data?.questions);
      setQuizId(res?.data?.data?._id || res?.data?._id);
      setIsQuestion(isQuestion + 1);
      setK((i) => !i);
      console.log({ result: res?.data });
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      if (isAxiosError(error)) {
        if (error) console.log({ error: error?.response?.data, err: error });
        if (error?.response?.status === 429) toast.error(error?.response?.data);
        const err = error as AxiosError;
        if (err?.response?.data) {
          const { error: errors }: resErr = err?.response?.data;
          if (errors && errors?.length > 1) {
            dispatch(
              returnErrors({ error: errors, status: err?.response?.status }),
            );
          } else {
            const errMsg =
              error?.response?.data?.message ||
              error?.response?.data?.error?.[0]?.message ||
              error?.response?.data?.error?.[0]?.msg ||
              error?.message;

            toast.error(errMsg);
          }
        } else toast.error(message);
      } else toast.error(message);
      setLoading(false);
    }
  };

  const handleNext = useCallback(() => {
    if (isSelected) {
      const d = examData?.[isQuestion];
      const findQue = [
        ...answerArr?.map((item) =>
          item?.questionID === d?._id
            ? {
                ...item,
                option: isSelected?.answer,
              }
            : item,
        ),
      ];
      setAnswerArr(findQue);
      if (isQuestion !== examData?.length - 1) {
        setIsSelected(null);
        setK((i) => !i);
        setIsQuestion(isQuestion + 1);
      } else handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected, isQuestion, examData, answerArr]);

  const handleNextQuess = () => {
    if (newAnswer?.length !== examData?.[isQuestion]?.answer?.length) return;
    const newArr = examData;
    newArr[isQuestion] = { ...examData?.[isQuestion], newAnswer };
    setExamData(newArr);
    const d = examData?.[isQuestion];
    const findQue = [
      ...answerArr?.map((item) =>
        item?.questionID === d?._id
          ? {
              ...item,
              answer: newAnswer?.map((item) => item?.item)?.join(""),
            }
          : item,
      ),
    ];
    setAnswerArr(findQue);
    if (isQuestion !== examData?.length - 1) {
      setIsQuestion(isQuestion + 1);
      setNewAnswer([]);
    } else handleSubmit();
  };

  const handlePrev = () => {
    if (isQuestion > 0) {
      setIsQuestion(isQuestion - 1);
      setIsSelected(null);
      setK((i) => !i);
    }
  };

  // console.log({ state: location?.state, answerArr, isSelected });

  useEffect(() => {
    if (!location || !auth?.isAuth) return navigate.back();
    if (location) {
      // if (!QuizArr?.includes(location?.state?.type)) return navigate(-1);
      const { subCategory, type, level, typeID, key, category } = location;
      const getQuestions = async () => {
        const query = `${
          type === "exam"
            ? ""
            : `?_populate=image&_populate=category&_populate=subCategory`
        }${key ? `?key=${key}` : ""}${
          !typeID && !key ? `&_populate=language&_populate=audioFile` : ""
        }
				${category ? `&category=${category}` : ""}
				${subCategory ? `&subCategory=${subCategory}` : ""}${
          level ? `&level=${level}` : ""
        }${typeID ? `&typeID=${typeID}` : ""}`;
        try {
          const res = await axios.get(
            `/api/v1/${
              type === "exam"
                ? "examQuestion"
                : type === "contest"
                  ? "contestQuestions"
                  : type === "funAndLearn"
                    ? "funAndLearnQuestion"
                    : type
            }${query}`,
          );
          if (res?.data?.data?.docs?.length > 0) {
            setExamData(res?.data?.data?.docs);
            setAnswerArr([
              ...res?.data?.data?.docs?.map((item: any) => {
                return { questionID: item?._id };
              }),
            ]);
            console.log({ dd: res?.data?.data });
            setExamLoad(false);
            toast.success(res?.data?.message);
            setLoading(false);
            setIsQuestion(0);
            setK((i) => !i);
          } else {
            toast.info("No question(s) found for selection");
            setLocationState(null);
            navigate.push("/");
          }
          // console.log({ result: res?.data });
        } catch (error) {
          let message = "Unknown Error";
          if (error instanceof Error) message = error.message;
          if (isAxiosError(error)) {
            if (error)
              console.log({ error: error?.response?.data, err: error });
            if (error?.response?.status === 429)
              toast.error(error?.response?.data);
            const err = error as AxiosError;
            if (err?.response?.data) {
              const { error: errors }: resErr = err?.response?.data;
              if (errors && errors?.length > 1) {
                dispatch(
                  returnErrors({
                    error: errors,
                    status: err?.response?.status,
                  }),
                );
              } else {
                const errMsg =
                  error?.response?.data?.message ||
                  error?.response?.data?.error?.[0]?.message ||
                  error?.response?.data?.error?.[0]?.msg ||
                  error?.message;

                toast.error(errMsg);
              }
            } else toast.error(message);
          } else toast.error(message);
          navigate.back();
        }
      };
      getQuestions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, navigate, auth?.isAuth, dispatch]);

  useEffect(() => {
    if (isSelected && examData?.length - 1 !== isQuestion) {
      const timer = setTimeout(() => handleNext(), 1000);
      return () => clearTimeout(timer);
    }
  }, [isSelected, handleNext, isQuestion, examData]);

  useEffect(() => {
    apiCall({
      type: "get",
      url: `/api/v1/quizSettings`,
      getter: (d: any) =>
        dispatch(getDynamicCategoryLogger({ ...d, prop: "quizSettings" })),
    });
    apiCall({
      type: "get",
      url: `/api/v1/systemConfig`,
      getter: (d: any) =>
        dispatch(getDynamicCategoryLogger({ ...d, prop: "config" })),
    });
  }, [dispatch]);

  return {
    examData,
    isQuestion,
    handleNext,
    isSelected,
    answerArr,
    setAnswerArr,
    setIsSelected,
    examLoad,
    loading,
    handlePrev,
    result,
    handleNextQuess,
    newAnswer,
    setNewAnswer,
    type: location?.type,
    options,
    setOptions: handleOptions,
    handleTimeUp,
    duration,
    k,
    quizId,
  };
};

export default useFetch;
