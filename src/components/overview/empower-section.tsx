import Image from "next/image";

const EmpowerSection = () => {
  return (
    <div className="overview-empower-bg flex min-h-[932px] w-full pl-4 pr-4 md:pl-0 lg:max-h-[932px] lg:min-h-screen lg:pr-[76px]">
      <div className="container flex flex-col items-start justify-center md:items-end">
        <div className="w-fit">
          <div>
            <h2 className="w-[214px] text-[28px] font-bold text-white md:w-full md:text-[32px]">
              Empower Yourself for a{" "}
              <span className="block text-[40px] text-[#FFC43E] md:text-[32px] md:text-[#FF3A2A]">
                Brighter Tomorrrow
              </span>
            </h2>
            <p className="ml-auto mt-7 max-w-[306px] text-sm font-bold text-white md:ml-0 md:mt-0 md:max-w-[506px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
          <div className="mt-20">
            <h2 className="text-[28px] font-bold text-white md:text-[32px]">
              <span className="block text-[40px] text-[#FFC43E] md:inline-block md:text-[32px]">
                Education
              </span>{" "}
              takes you as far <br /> as you are willing to go....
            </h2>
            <p className="ml-auto mt-7 max-w-[306px] text-sm font-bold text-white md:ml-0 md:mt-0 md:max-w-[506px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
          <div className="mt-20 flex items-center justify-center gap-[14px] md:mt-14 md:gap-7">
            <div className="cursor-pointer">
              <Image
                src="/images/google-play.svg"
                alt="google-play"
                width={204}
                height={192}
                className="h-[23px] w-[74px] rounded object-cover md:h-[47px] md:w-[150px] md:rounded-lg"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/images/apple-store.svg"
                alt="apple-store"
                width={150}
                height={45}
                className="h-[22px] w-[74px] rounded object-cover md:h-[45px] md:w-[150px] md:rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerSection;
