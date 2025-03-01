/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useContext, useEffect, useState } from "react";
import { category, progress } from "@/data/constants";
import { GlobalState } from "@/data/Context";
import { useAppDispatch, useAppSelector } from "@/data/store/hooks";
import {
  authUserSelector,
  categorySelector,
} from "@/data/store/selectors/userSelector";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { apiCall } from "@/data/useFetcher";
import { getDynamicCategoryLogger } from "@/data/store/reducers/LoggerSlice";

export const Category = () => {
  const router = useRouter(),
    { list, categoryData, locationState, setLocationState } =
      useCategorySubCategoryNavigator({ type: "category" });

  return (
    <main
      className="min-h-screen w-full px-0 pb-[90px] pt-[96px] md:px-12"
      style={{
        background: 'url("/images/category.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div
          className="mx-auto flex w-full flex-col items-center rounded-[29px] border-4 border-white pb-10 lg:w-[90%] xl:pb-0"
          style={{
            background: 'url("/images/category-b.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="w-fit rounded-[10px] bg-white px-11 py-5 text-base font-bold text-[#118E96] lg:text-[30px]"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Select a Category
          </div>
          <div className="my-11 grid w-full grid-cols-2 gap-x-10 gap-y-7 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-16 xl:gap-y-16">
            {list?.map((item: any, i: number) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 xl:gap-7"
              >
                <Image
                  src={
                    item?.image?.url || category?.[i % category?.length]?.src
                  }
                  alt={item?.name}
                  width={1080}
                  height={1080}
                  className="h-[85px] w-[85px] rounded-full object-cover md:h-[180px] md:w-[180px]"
                />
                <button
                  onClick={() => {
                    setLocationState((prev: any) => {
                      return { ...prev, category: item?._id };
                    });
                    router.push(
                      categoryData?.docs
                        ?.filter((li: any) => li?.parentCategory)
                        ?.filter((li: any) => {
                          return (
                            li?.type === locationState?.type &&
                            li?.parentCategory === item?._id
                          );
                        })?.length > 0
                        ? "/games/subcategory"
                        : "/games/levels",
                    );
                  }}
                  className="cursor-pointer rounded-[5px] bg-[#0B2239] px-8 py-1 text-center text-[10px] font-bold capitalize text-white md:text-[22px] xl:px-10 xl:py-3"
                >
                  {item?.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export const useCategorySubCategoryNavigator = ({
  type,
}: {
  type: "category" | "subCategory";
}) => {
  const router = useRouter(),
    dispatch = useAppDispatch(),
    { category: categoryData }: any = useAppSelector(categorySelector),
    { locationState, setLocationState } = useContext(GlobalState),
    [list, setList] = useState<any[]>([]),
    { isAuth } = useAppSelector(authUserSelector);

  useEffect(() => {
    let newD = categoryData?.docs?.filter((it: any) => {
      return !it?.parentCategory && it?.type === locationState?.type;
    });

    if (type === "subCategory") {
      newD = categoryData?.docs?.filter((it: any) => {
        // locationState?.typeID
        //   ? it?.parentCategory &&
        //       it?.type === locationState?.type &&
        //       it?.typeID === locationState?.typeID &&
        //       it?.parentCategory === locationState?.category
        //   :
        return (
          it?.parentCategory &&
          it?.type === locationState?.type &&
          it?.parentCategory === locationState?.category
        );
      });
    }
    setList(newD);
  }, [locationState, categoryData, type]);

  useEffect(() => {
    if (!locationState || !isAuth || !locationState?.type) router?.back();
  }, [locationState, router, isAuth]);

  useEffect(() => {
    apiCall({
      type: "get",
      url: `/api/v1/category?_populate=image&_limit=0`,
      getter: (d: any) =>
        dispatch(getDynamicCategoryLogger({ ...d, prop: "category" })),
    });
  }, [dispatch]);

  return { list, categoryData, locationState, setLocationState };
};

export const useLevelNavigator = () => {
  const router = useRouter(),
    dispatch = useAppDispatch(),
    { level: levelData }: any = useAppSelector(categorySelector),
    { locationState, setLocationState } = useContext(GlobalState),
    [mainArr, setMainArr] = useState<any[]>(progress),
    [levelPick, setLevelPick] = useState<any>(null),
    { isAuth } = useAppSelector(authUserSelector);

  useEffect(() => {
    if (!locationState || !isAuth || !locationState?.type) router?.back();
  }, [locationState, router, isAuth]);

  useEffect(() => {
    if (locationState?.type) {
      const findLevel = levelData?.docs?.find((it: any) => {
        let dd = it?.name === locationState?.type;
        if (
          locationState?.type &&
          locationState?.category &&
          locationState?.subCategory
        )
          dd =
            it?.name === locationState?.type &&
            it?.category === locationState?.category &&
            it?.subCategory === locationState?.subCategory;
        else if (locationState?.type && locationState?.category)
          dd =
            it?.name === locationState?.type &&
            it?.category === locationState?.category;

        return dd;
      });
      setLevelPick(findLevel);
    }
  }, [locationState, levelData]);

  useEffect(() => {
    if (levelPick) {
      let newNum = 8;
      const newAr = [];
      if (levelPick?.level > 3) {
        newNum = 3 + levelPick?.level;
      }

      for (let x = 1; x <= newNum; x++) {
        const newObj = {
          id: x,
          status:
            x === 1
              ? "unlocked"
              : levelPick?.level >= x
                ? "unlocked"
                : "locked",
          name: `Level ${x}`,
        };
        newAr?.push(newObj);
      }
      setMainArr(newAr);
    }
  }, [levelPick]);

  useEffect(() => {
    apiCall({
      type: "get",
      url: `/api/v1/level?_populate=image&_limit=0`,
      getter: (d: any) =>
        dispatch(getDynamicCategoryLogger({ ...d, prop: "level" })),
    });
  }, [dispatch]);

  console.log({ mainArr, levelPick, levelData });

  return { mainArr, locationState, setLocationState };
};
