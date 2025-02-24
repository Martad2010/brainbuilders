import Modal from "react-modal";
import useNoScroll from "../hooks/useNoScroll";
import Image from "next/image";

const HurrayModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useNoScroll(isOpen);
  return (
    <Modal
      isOpen={isOpen}
      className="coin-modal flex w-[358px] flex-col items-center justify-center gap-6 rounded-[25px] bg-white py-12 pl-[50px] pr-[39px] md:w-[756px] md:flex-row"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Success Modal"
      ariaHideApp={false}
    >
      <div className="">
        <h2 className="text-center text-2xl font-bold text-[#000024] md:text-[32px]">
          Hurray!
        </h2>
        <p
          className="mt-8 text-center text-2xl font-bold text-white md:text-4xl"
          style={{
            textShadow: "0px 2px 0px #0B2239",
          }}
        >
          You have been granted 70 coins
        </p>
        <div className="hidden items-center justify-center md:flex">
          <button className="mt-11 h-[45px] w-[236px] rounded-[10px] bg-[#0B2239] text-xl font-bold text-white">
            Let&apos;s Play
          </button>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src="/images/happy brain.svg"
          alt="a happy brain"
          width={312}
          height={382}
          className="h-[219px] w-[179px] object-cover md:h-[382px] md:w-[312px]"
        />
      </div>
      <div className="flex items-center justify-center md:hidden">
        <button className="h-[45px] w-[236px] rounded-[10px] bg-[#0B2239] text-xl font-bold text-white">
          Let&apos;s Play
        </button>
      </div>
    </Modal>
  );
}

export default HurrayModal;
