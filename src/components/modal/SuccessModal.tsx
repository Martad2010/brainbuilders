import Modal from "react-modal";
import useNoScroll from "../hooks/useNoScroll";
import Image from "next/image";
const SuccessModal = ({
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
      className="success-modal flex h-[471px] w-[358px] flex-col items-center justify-center gap-6 rounded-[25px]"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Success Modal"
      ariaHideApp={false}
    >
      <h1 className="text-2xl font-bold text-[#4A4E4F]">Success</h1>
      <Image
        src={"/images/success.png"}
        alt="success"
        width={100}
        height={110}
      />
      <p className="text-center text-[13px] font-bold text-[#4A4E4F]">
        Your Subscription has been <br /> proccessed successfully
      </p>
      <button
        onClick={() => setIsOpen(false)}
        className="h-[45px] w-[275px] rounded-[26px] bg-[#04C323] text-sm font-bold text-white"
      >
        Continue
      </button>
    </Modal>
  );
};

export default SuccessModal;
