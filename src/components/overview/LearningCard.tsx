"use client";

import Image from "next/image";

interface LearningCardProps {
  frameImage: string;
  mobileFrameImage?: string;
  topImage: string;
  vectorImage: string;
  label: string;
  color: string;
  onClick: () => void;
}

export default function LearningCard({
  frameImage,
  mobileFrameImage,
  topImage,
  vectorImage,
  label,
  color,
  onClick,
}: LearningCardProps) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        cursor-pointer
        border-0
        bg-transparent
        p-0

        w-[164px]
        h-[150px]

        lg:w-[295px]
        lg:h-[267px]

        xl:w-[325px]
        xl:h-[295px]

        transition-transform
        duration-300
        hover:scale-[1.03]
      "
    >
      {/* Mobile */}
      {mobileFrameImage ? (
        <Image
          src={mobileFrameImage}
          alt={label}
          width={163}
          height={150}
          className="block lg:hidden"
        />
      ) : (
        <Image
          src={frameImage}
          alt={label}
          width={164}
          height={150}
          className="block lg:hidden"
        />
      )}

      {/* Desktop */}
      <Image
        src={frameImage}
        alt={label}
        width={1048}
        height={966}
        className="
          hidden
          lg:block

          w-[295px]
          h-[267px]

          xl:w-[325px]
          xl:h-[295px]
        "
      />

      {/* ========= TOP TITLE IMAGE ========= */}

      <div
        className="
          absolute

          left-1/2
          -translate-x-1/2

          top-[20px]

          lg:top-[50px]

          xl:top-[55px]
        "
      >
        <Image
          src={topImage}
          alt={label}
          width={671}
          height={337}
          className="
            w-[104px]
            h-[52px]

            lg:w-[178px]
            lg:h-[93px]

            xl:w-[195px]
            xl:h-[102px]
          "
        />
      </div>

      {/* ========= BOTTOM VECTOR ========= */}

      <div
        className="
          absolute

          left-1/2
          -translate-x-1/2

          bottom-[28px]

          lg:bottom-[54px]

          xl:bottom-[58px]
        "
      >
        <Image
          src={vectorImage}
          alt=""
          width={161}
          height={55}
          className="
            hidden

            lg:block

            w-[161px]

            xl:w-[180px]
          "
        />

        <div
          className="h-[50px] w-[98px] rounded-b-full lg:hidden"
          style={{
            background: color,
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="
              text-center
              font-bold
              uppercase
              text-white

              w-[85px]
              text-[11px]
              leading-[13px]

              lg:w-[145px]
              lg:text-[13px]
              lg:leading-[16px]

              xl:w-[165px]
              xl:text-[14px]
            "
          >
            {label}
          </p>
        </div>
      </div>
    </button>
  );
}