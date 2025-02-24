import Image from "next/image";

export const About = () => {
  return (
    <main className="">
      <div className="about-bg flex h-[392px] flex-col items-center justify-center">
        <h1 className="text-[32px] font-bold text-white md:text-5xl md:font-black">
          About us
        </h1>
        <div className="mt-10 flex items-center gap-7">
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
      <div className="container flex w-full justify-center pb-8 pt-10 md:pt-20">
        <div className="w-full px-0 lg:px-12 xl:w-[60%]">
          <p
            className="font-switch text-sm font-normal text-[#4A4E4F] md:text-base md:font-black"
            style={{
              marginTop: "10px",
            }}
          >
            Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
            amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur
            adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,
            Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
            amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur
            adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,
            Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
            amet, consectetur adipiscing elit, Ipsum dolor sit amet, consec
          </p>
          <p
            className="font-switch text-sm font-normal text-[#4A4E4F] md:text-base md:font-black"
            style={{
              marginTop: "10px",
            }}
          >
            dipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,
            ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit
            amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur
            adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,
            ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit
            amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur
            adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,
            ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit
            amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur
            adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,
            ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit
            amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur
            adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,
            ipsum dolor sit
          </p>
        </div>
      </div>
    </main>
  );
};
