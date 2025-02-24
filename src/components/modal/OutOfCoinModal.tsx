"use client";
import Image from "next/image";
import Modal from "react-modal";
import useNoScroll from "../hooks/useNoScroll";
import { useRouter } from "next/navigation";

const OutOfCoinModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  useNoScroll(isOpen);
  return (
    <Modal
      isOpen={isOpen}
      className="coin-modal flex w-[358px] flex-col items-center justify-center gap-6 rounded-[25px] bg-white py-12 pl-[50px] pr-[39px] md:w-[756px] md:flex-row"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Out of Coin Modal"
      ariaHideApp={false}
    >
      <div>
        <h2 className="text-center text-2xl font-bold text-[#000024] md:text-[32px]">
          Oops!
        </h2>
        <p
          className="mt-8 text-center text-2xl font-bold text-white md:text-4xl"
          style={{
            textShadow: "0px 2px 0px #0B2239",
          }}
        >
          You are out of coin!
        </p>
        <div className="hidden items-center justify-center md:flex">
          <button onClick={() => router.push('/buy-coins')} className="mt-11 h-[45px] w-[236px] rounded-[10px] bg-[#0B2239] text-xl font-bold text-white">
            Buy Coin
          </button>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src="/images/sad brain.svg"
          alt="a sad brain"
          width={338}
          height={409}
          className="h-[259px] w-[211px] object-cover md:h-[409px] md:w-[338px]"
        />
      </div>
      <div className="flex items-center justify-center md:hidden">
        <button onClick={() => router.push('/buy-coins')} className="h-[45px] w-[236px] rounded-[10px] bg-[#0B2239] text-xl font-bold text-white">
          Buy Coin
        </button>
      </div>
    </Modal>
  );
};

export default OutOfCoinModal;
