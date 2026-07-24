"use client";

import Image from "next/image";
import React from "react";

interface LearningCardProps {
  frameImage: string;
  topImage: string;
  vectorImage?: string;
  mobileFrameImage?: string;
  label: string;
  color: string;
  onClick: () => void;
}

const LearningCard = ({
  frameImage,
  mobileFrameImage,
  topImage,
  vectorImage,
  label,
  color,
  onClick,
}: LearningCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[164/150] w-full max-w-[170px] transition-transform duration-300 hover:scale-105 lg:max-w-[340px] xl:max-w-[380px]"
    >
      {/* Mobile */}
      {mobileFrameImage ? (
        <Image
          src={mobileFrameImage}
          alt={label}
          width={163}
          height={150}
          className="block h-full w-full object-contain lg:hidden"
        />
      ) : (
        <Image
          src={frameImage}
          alt={label}
          width={295}
          height={267}
          className="block h-full w-full object-contain lg:hidden"
        />
      )}

      {/* Desktop */}
      <Image
        src={frameImage}
        alt={label}
        width={295}
        height={267}
        className="hidden h-full w-full object-contain lg:block"
      />

      {/* Top illustration */}
      <div className="absolute left-1/2 top-[14%] lg:top-[16%] -translate-x-1/2">
        <Image
          src={topImage}
          alt={label}
          width={178}
          height={93}
         className="h-[52px] w-[104px] object-contain lg:h-[105px] lg:w-[200px] xl:h-[118px] xl:w-[220px]"
        />
      </div>

      {/* Bottom banner */}
      <div className="absolute bottom-[12%] lg:bottom-[9%] left-1/2 -translate-x-1/2">
        {vectorImage ? (
          <>
            <Image
              src={vectorImage}
              alt=""
              width={200}
              height={70}
              className="hidden lg:block w-[190px] xl:w-[205px]"
            />
            <div
              className="h-[48px] w-[100px] rounded-b-full lg:hidden"
              style={{ backgroundColor: color }}
            />
          </>
        ) : (
          <div
            className="h-[48px] w-[100px] rounded-b-full lg:hidden"
            style={{ backgroundColor: color }}
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center px-2">
          <p
    className="w-[90px] text-center text-[11px] font-bold uppercase leading-tight text-white lg:w-[170px] lg:text-[15px] xl:w-[190px]">
            {label}
          </p>
        </div>
      </div>
    </button>
  );
};

export default LearningCard;