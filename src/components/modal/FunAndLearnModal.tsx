/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Modal from "react-modal";
import useNoScroll from "../hooks/useNoScroll";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/data/store/hooks";
import { getDynamicCategoryLogger } from "@/data/store/reducers/LoggerSlice";
import { apiCall } from "@/data/useFetcher";
import {
  authUserSelector,
  categorySelector,
} from "@/data/store/selectors/userSelector";
import { GlobalState } from "@/data/Context";
import { toast } from "react-toastify";

const FunAndLearnModal = ({
  isOpen,
  setIsOpen,
  type = "funAndLearn",
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "funAndLearn";
}) => {
  const router = useRouter(),
    dispatch = useAppDispatch(),
    { user } = useAppSelector(authUserSelector),
    category = useAppSelector(categorySelector),
    [active] = useState(0),
    { locationState, setLocationState } = useContext(GlobalState),
    [coins, setCoins] = useState(0);

  useNoScroll(isOpen);

  useEffect(() => {
    apiCall({
      type: "get",
      url: `/api/v1/funAndLearn?_populate=category&_populate=subCategory&_limit=0`,
      getter: (d: any) =>
        dispatch(getDynamicCategoryLogger({ ...d, prop: "funAndLearn" })),
    });
  }, [dispatch]);

  return (
    <Modal
      isOpen={isOpen}
      className="coin-modal flex w-[358px] flex-col items-center justify-center gap-6 rounded-[25px] bg-white py-12 pl-[50px] pr-[39px] md:w-[756px] md:flex-row"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Fun And Learn Modal"
      ariaHideApp={false}
    >
      <div>
        {active === 1 ? (
          <div className="mt-8 flex justify-center gap-6">
            <div
              style={{
                boxShadow: "0px 0px 1px -2px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white p-6"
            >
              <h6 className="krub text-center text-sm font-semibold text-[#1b1b1b]">
                Entry Fee
              </h6>
              <p className="krub text-center text-sm font-medium text-[#1b1b1b]">
                {coins} Coins
              </p>
            </div>
            <div
              style={{
                boxShadow: "0px 0px 1px -2px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white p-6"
            >
              <h6 className="krub text-center text-sm font-semibold text-[#1b1b1b]">
                Current Coins
              </h6>
              <p className="krub text-center text-sm font-medium text-[#1b1b1b]">
                {(user as any)?.points || 0} Coins
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-5 grid grid-cols-2 gap-10 px-8 md:grid-cols-2 lg:grid-cols-5">
              {category?.[type]?.docs?.map((item: any, ind: number) => (
                <div
                  key={ind}
                  style={{
                    boxShadow: "0px 0px 1px -2px rgba(0, 0, 0, 0.25)",
                    background:
                      locationState?.typeID === item?._id ? "#000" : "",
                  }}
                  onClick={() => {
                    setLocationState((prev: any) => {
                      return { ...prev, typeID: item?._id };
                    });
                    setCoins(item?.entryFee);
                  }}
                  className="cursor-pointer bg-white p-6"
                >
                  <h6
                    style={{
                      color: locationState?.typeID === item?._id ? "#fff" : "",
                    }}
                    className="krub text-center text-sm font-semibold text-[#1b1b1b]"
                  >
                    {item?.name || item?.title}
                  </h6>
                  {/* <p className="text-sm font-medium krub text-center text-[#1b1b1b]">
										{auth?.user?.coins || 0} Coins
									</p> */}
                </div>
              ))}
            </div>
          </>
        )}
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => {
              if (active === 0 && type === "funAndLearn") {
                if (!locationState?.typeID)
                  return toast.info("Please Select a type");
                setLocationState((prev: any) => {
                  return {
                    ...prev,
                    type,
                    typeID: locationState?.typeID,
                  };
                });
                return router.push("/games/category");
              }
            }}
            className="cursor-pointer rounded-[5px] bg-[#0B2239] px-10 py-3 text-center text-base font-bold capitalize text-white md:text-[22px]"
          >
            Play Now
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FunAndLearnModal;

export const ComingSoonModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
}) => {
  useNoScroll(isOpen);

  return (
    <Modal
      isOpen={isOpen}
      className="coin-modal flex w-[358px] flex-col items-center justify-center gap-6 rounded-[25px] bg-white py-12 pl-[50px] pr-[39px] md:w-[756px] md:flex-row"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen("")}
      shouldCloseOnOverlayClick={true}
      contentLabel="Coming Soon Modal"
      ariaHideApp={false}
    >
      <div>
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          className="sansation text-center text-4xl font-extrabold leading-10 text-[#002224]"
        >
          Coming Soon!!!
        </h1>
      </div>
    </Modal>
  );
};
