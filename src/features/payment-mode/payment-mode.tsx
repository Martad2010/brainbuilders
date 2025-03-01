/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Modal from "react-modal";
import useNoScroll from "@/components/hooks/useNoScroll";
import { ComingSoonModal } from "@/components/modal/FunAndLearnModal";
import SuccessModal from "@/components/modal/SuccessModal";
import { GlobalState } from "@/data/Context";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/data/store/hooks";
import { authUserSelector } from "@/data/store/selectors/userSelector";
import { usePaystackPayment } from "react-paystack";
import moment from "moment";
import axios, { AxiosError, isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { returnErrors } from "@/data/store/reducers/errorReducer";
import Button from "@/components/utils/Button";

export const PaymentMode = () => {
  const [mode, setMode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false),
    [isProceed, setIsProceed] = useState(false),
    { locationState } = useContext(GlobalState),
    router = useRouter();

  const mainArr = [
    locationState?.paymentType !== "not-airtime" && {
      title: "Pay with Airtime (MTN Users only)",
      platform: "mtn",
      bg: "#F2B605",
    },
    {
      title: "Pay with Credit/Debit card",
      platform: "paystack",
      bg: "#1DC9A0",
    },
    {
      title: "Pay with MOMO (MTN Users only)",
      platform: "momo",
      bg: "#F2B605",
    },
  ];

  useEffect(() => {
    if (!locationState) router.back();
  }, [locationState, router]);

  return (
    <main className="payment-mode-bg flex min-h-screen flex-col px-0 pb-6 pt-[60px] md:flex-row md:px-12 md:pb-24">
      <SuccessModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <div className="-mt-[60px] block md:mt-0 md:hidden">
        <Image
          src="/images/mobile-payment-mode-bg.png"
          alt="an image showing showing pos"
          width={430}
          height={318}
          className="h-[318px] w-full object-cover"
        />
      </div>
      <div className="container flex items-center justify-center md:justify-end">
        <div className="w-full md:w-[585px]">
          <h1
            className="font-switch mb-6 mt-6 text-left text-2xl font-black text-[#002724] md:mt-0 md:text-center md:text-[40px] md:text-white"
            style={{
              textShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
            }}
          >
            PAYMENT MODE
          </h1>
          <div className="flex w-full flex-col items-center gap-6 rounded-none border-[6px] border-white bg-transparent p-0 md:w-[585px] md:gap-11 md:rounded-lg md:border md:bg-[#0B2239] md:p-12">
            {mainArr
              ?.filter((item) => item)
              ?.map((it: any, i: number) => (
                <div
                  className={`flex h-[71px] w-full cursor-pointer items-center justify-between rounded-md px-6 py-7 ${it?.platform === "paystack" ? "bg-[#1DC9A0] md:bg-[#FFF]" : "bg-[#F2B605]"}`}
                  key={i}
                >
                  <p className="text-[13px] font-bold text-black md:text-lg">
                    {it?.title}
                  </p>
                  <div
                    onClick={() =>
                      setMode(mode === it?.platform ? "" : it?.platform)
                    }
                    className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9] md:border-[2px] md:border-black md:bg-transparent"
                  >
                    {mode === it?.platform && (
                      <div className="h-[10px] w-[10px] rounded-full bg-[#002724]"></div>
                    )}
                  </div>
                </div>
              ))}
            {/* airtime mode */}
            {/* <div className="flex h-[71px] w-full cursor-pointer items-center justify-between rounded-md bg-[#F2B605] px-6 py-7">
              <p className="text-[13px] font-bold text-black md:text-lg">
                Pay with Airtime (MTN Users only)
              </p>
              <div
                onClick={() => setMode(mode === "airtime" ? "" : "airtime")}
                className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9] md:border-[2px] md:border-black md:bg-transparent"
              >
                {mode === "airtime" && (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#002724]"></div>
                )}
              </div>
            </div> */}
            {/* card */}
            {/* <div className="flex h-[71px] w-full cursor-pointer items-center justify-between rounded-md bg-[#1DC9A0] px-6 py-7 md:bg-[#FFF]">
              <p className="text-[13px] font-bold text-black md:text-lg">
                Pay with Credit/Debit card
              </p>
              <div
                onClick={() => setMode(mode === "card" ? "" : "card")}
                className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9] md:border-[2px] md:border-black md:bg-transparent"
              >
                {mode === "card" && (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#002724]"></div>
                )}
              </div>
            </div> */}
            {/* momo */}
            {/* <div className="flex h-[71px] w-full cursor-pointer items-center justify-between rounded-md bg-[#F2B605] px-6 py-7">
              <p className="text-[13px] font-bold text-black md:text-lg">
                Pay with MOMO (MTN Users only)
              </p>
              <div
                onClick={() => setMode(mode === "momo" ? "" : "momo")}
                className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9] md:border-[2px] md:border-black md:bg-transparent"
              >
                {mode === "momo" && (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#002724]"></div>
                )}
              </div>
            </div> */}
            <button
              onClick={() => {
                if (!mode) return;
                if (mode === "mtn") {
                  let link =
                    "http://ng-app.com/MARTAD/GET2KNOW-24-Yes-23410220000028099-web?trxId=xxx";
                  if (locationState?.item?.type === "weekly")
                    link =
                      "http://ng-app.com/MARTAD/GET2KNOW-168-Yes-23410220000028100-web?trxId=xxx";
                  if (locationState?.item?.type === "monthly")
                    link =
                      "http://ng-app.com/MARTAD/GET2KNOW-720-Yes-23410220000028101-web?trxId=xxx";

                  window.open(link, "_blank");
                  setMode("");
                } else setIsProceed(true);
                // setIsSuccess(true);
              }}
              className="font-switch mt-10 h-[48px] w-full rounded-xl bg-[#04C323] text-base font-bold text-white md:h-[70px] md:w-[394px] md:rounded-md md:text-2xl"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>{" "}
      <ComingSoonModal
        isOpen={["momo", "stripe"]?.includes(mode) && isProceed}
        setIsOpen={setMode}
      />
      <PaystackModal
        isOpen={["paystack"]?.includes(mode) && isProceed}
        setIsOpen={setMode}
        locationState={locationState}
        handleClose={() => {
          setIsSuccess(true);
          setIsProceed(false);
          setMode("");
        }}
      />
    </main>
  );
};

export default PaymentMode;

export const PaystackModal = ({
  isOpen,
  setIsOpen,
  locationState,
  handleClose,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
  handleClose: () => void;
  locationState: any;
}) => {
  useNoScroll(isOpen);

  const navigate = useRouter(),
    { user } = useAppSelector(authUserSelector),
    [reference, setReference] = useState(""),
    mainName = `${user?.firstName || (user as any)?.createdBy?.firstName} ${
      user?.lastName || (user as any)?.createdBy?.lastName
    }`,
    config = {
      email: user?.email || (user as any)?.createdBy?.email,
      amount: Number(locationState?.amount * 100),
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
      reference: reference ? reference?.toString()?.split("|")?.join("") : "",
      metadata: {
        name: mainName,
        phone: user?.phone || (user as any)?.createdBy?.phone,
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: mainName,
          },
          {
            display_name: "Phone Number",
            variable_name: "phone_number",
            value: user?.phone,
          },
        ],
      },
    },
    initializePayment = usePaystackPayment(config),
    dispatch = useAppDispatch();

  // console.log({ config });
  useEffect(() => {
    if (locationState?.amount && isOpen) {
      setReference(moment().format("YYYYMMDDHHmmssASSS"));
    }
  }, [locationState?.amount, isOpen]);

  const handleSuccess = async (item: any) => {
    setLoading(true);
    console.log({ item }, "async");
    try {
      const res = await axios.post("/api/v1/subscription/paystack", {
        pay_ref: item?.reference,
        // channel: "paystack",
        plan_id: locationState?.item?.type,
        // msisdn,
      });
      console.log({ res }, "paystack");
      toast.success(res?.data?.message);
      handleClose();
      setTimeout(() => {
        navigate.push("/");
      }, 1500);
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
      setLoading(false);
    }
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    setIsOpen("");
  };

  const onSuccess = (ref: any) => {
    console.log({ ref }, "success");
    handleSuccess(ref);
  };

  useEffect(() => {
    if (reference && isOpen) {
      initializePayment({ onSuccess, onClose });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reference, isOpen]);

  const [loading, setLoading] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      className="coin-modal flex w-[358px] flex-col items-center justify-center gap-6 rounded-[25px] bg-white py-12 pl-[50px] pr-[39px] md:w-[756px] md:flex-row"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen("")}
      shouldCloseOnOverlayClick={true}
      contentLabel="Paystack Modal"
      ariaHideApp={false}
    >
      <div className="align-center flex justify-center">
        <Button
          type="button"
          isLoading={loading}
          onClick={() => {}}
          className="cursor-pointer rounded-[5px] bg-[#0B2239] px-8 py-2 text-center text-[10px] font-bold capitalize text-white md:text-[22px] xl:px-10 xl:py-3"
        >
          <>Paystack</>
        </Button>
      </div>
    </Modal>
  );
};
