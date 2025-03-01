"use client";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { PurifiedText } from "../about";

export const Contact = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(false),
    [type, setType] = useState("");
  return (
    <main className="">
      <div className="contacts-bg flex min-h-[932px] px-0 pb-6 md:min-h-screen md:pb-14 lg:px-12 lg:pb-0">
        <div className="container relative flex flex-col justify-end lg:justify-center">
          <div className="absolute right-3 top-10">
            <Image
              src={"/images/contact-us.svg"}
              alt="contact us image"
              width={256}
              height={214}
              className="block h-[192px] w-[231px] object-cover md:hidden"
            />
          </div>
          <div className="">
            <Image
              src={"/images/contact-us.svg"}
              alt="contact us image"
              width={256}
              height={214}
              className="hidden md:block"
            />
            <div className="mt-5 flex items-center gap-7">
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
            {/* <div className="mt-8 flex gap-4 md:gap-8">
            <div className="max-w-[155px] space-y-2 md:max-w-[173px]">
              <p className="font-switch text-[10px] font-bold text-white md:text-sm">
                A Product of Martad Education & Skills Development Ltd.
              </p>
              <p className="font-switch text-[10px] font-medium text-white md:text-sm md:font-bold">
                3b, Alegbe Close Mende, Maryland Lagos, Nigeria.
              </p>
            </div>
            <div className="max-w-[110px] space-y-5 md:max-w-[134px]">
              <p className="font-switch text-[10px] font-bold text-white md:text-sm">
                Contact Us
              </p>
              <p className="font-switch break-all text-[10px] font-medium text-white md:text-sm md:font-bold">
                +234 704 330 3000 +234 809 293 3330 info@examsprimed.com
              </p>
            </div>
            <div className="max-w-[110px] space-y-1 md:max-w-[134px]">
              <p>
                <Link
                  href="/policy"
                  className="font-switch text-[10px] font-medium text-white md:text-sm md:font-bold"
                >
                  Policy
                </Link>
              </p>
              <p>
                <Link
                  href="/terms-conditions"
                  className="font-switch text-[10px] font-medium text-white md:text-sm md:font-bold"
                >
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link
                  href=""
                  className="font-switch text-[10px] font-medium text-white md:text-sm md:font-bold"
                >
                  Company
                </Link>
              </p>
              <p>
                <Link
                  href="/about"
                  className="font-switch text-[10px] font-medium text-white md:text-sm md:font-bold"
                >
                  About Us
                </Link>
              </p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      <div className="satoshi contacts-form-bg container flex items-center justify-center gap-24 px-2 lg:px-12">
        <div className="flex flex-col gap-10 py-20 md:flex-row lg:gap-40">
          <div className="shrink-0">
            <h1 className="text-2xl font-semibold">HOW CAN WE HELP YOU?</h1>
            <p className="mt-2.5 text-xl">
              You can fill this form or drop <br /> an email to
            </p>
            {/* email */}
            <div className="mt-4 flex w-full items-center justify-center gap-6 rounded-full bg-[#118E96] py-3">
              <EnvelopeIcon className="h-6 w-6 text-white" />{" "}
              <span className="satoshi text-xm text-white">
                info@examprimed.com
              </span>
            </div>
            {/* telephone */}
            <div className="mt-4 flex w-full items-center justify-center gap-6 rounded-full border-2 border-[#118E96] py-3">
              <PhoneIcon className="h-6 w-6 text-black" />{" "}
              <span className="satoshi text-xm text-black">
                +234 7043303000
              </span>
            </div>
            {/* whatsapp */}
            <div className="mt-4 flex w-full items-center justify-center gap-6 rounded-full border-2 border-[#118E96] py-3">
              <Image
                src="/images/whatsapp-icon.png"
                alt="whatsapp icon"
                width={49}
                height={48}
                className="h-6 w-6 object-cover"
              />
              <span className="satoshi text-xm text-black">07043303000</span>
            </div>
            {/* facebook */}
            <div className="mt-4 flex w-full items-center justify-center gap-6 rounded-full border-2 border-[#118E96] py-3">
              <Image
                src="/images/facebook-icon.png"
                alt="facebook icon"
                width={49}
                height={48}
                className="h-6 w-6 object-cover"
              />
              <span className="satoshi text-xm text-black">ExamPrime</span>
            </div>
            {/* twitter */}
            <div className="mt-4 flex w-full items-center justify-center gap-6 rounded-full border-2 border-[#118E96] py-3">
              <Image
                src="/images/twitter-icon.png"
                alt="twitter icon"
                width={49}
                height={48}
                className="h-6 w-6 object-cover"
              />
              <span className="satoshi text-xm text-black">Exam_Prime</span>
            </div>
            <PurifiedText type={type} setType={setType} section={"contact"} />
          </div>
          <form className="w-full space-y-6 md:w-[400px]">
            <input
              type="text"
              className="h-12 w-full rounded-lg bg-zinc-50 px-4 pr-12 text-sm text-black shadow-sm outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              className="h-12 w-full rounded-lg bg-zinc-50 px-4 pr-12 text-sm text-black shadow-sm outline-none"
              placeholder="Email Address"
            />
            <input
              type="tel"
              className="h-12 w-full rounded-lg bg-zinc-50 px-4 pr-12 text-sm text-black shadow-sm outline-none"
              placeholder="Phone Number"
            />
            <textarea
              rows={8}
              className="w-full resize-none rounded-lg bg-zinc-50 px-4 pr-12 text-sm text-black shadow-sm outline-none"
              placeholder="Enter your text here..."
            />
            <div className="flex items-center gap-2">
              <div
                onClick={() => setIsTermsChecked(isTermsChecked ? false : true)}
                className={`flex h-4 w-4 items-center justify-center ${isTermsChecked ? "bg-[#04C323]" : "border border-black bg-transparent"} cursor-pointer rounded-[2px]`}
              >
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={13}
                  height={13}
                  className={`${isTermsChecked ? "block" : "hidden"}`}
                />
              </div>
              <p className="text-sm font-bold text-[#002724]">
                I accept terms & conditions
              </p>
            </div>
            <button className="w-full rounded-full bg-[#118E96] py-4 font-medium text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
