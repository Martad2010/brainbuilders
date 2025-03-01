/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
import useNoScroll from "../hooks/useNoScroll";
import { useAppDispatch, useAppSelector } from "@/data/store/hooks";
import { authUserSelector } from "@/data/store/selectors/userSelector";
import { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import moment from "moment";
import axios, { AxiosError, isAxiosError } from "axios";
import { toast } from "react-toastify";
import { returnErrors } from "@/data/store/reducers/errorReducer";
import Button from "./Button";

const PaystackModal = ({
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

export default PaystackModal;
