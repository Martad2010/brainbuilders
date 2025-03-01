/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { mobileNavLinks, navLinks } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useClickOutside } from "../hooks/useOutsideClick";
import { useAppSelector } from "@/data/store/hooks";
import { authUserSelector } from "@/data/store/selectors/userSelector";

const Header = () => {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const dropdownRef = useClickOutside(() => setShowMoreDropdown(false));
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const isAuthenticated = false;
  const pathname = usePathname();
  const router = useRouter(),
    { isAuth, user } = useAppSelector(authUserSelector);
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center bg-white px-4 xl:px-12">
      <div className="container">
        <nav className="flex w-full items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={144}
              height={44}
            />
          </Link>
          <ul className="hidden items-center gap-8 xl:flex">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                {navLink?.type === "scroll" ? (
                  <ScrollLink
                    style={{
                      textDecoration: "none !important",
                    }}
                    to={navLink.href.substring(1)}
                    smooth={true}
                    duration={500}
                    className={`${pathname === navLink.href ? "text-[#F17700]" : "text-[#118E96]"} cursor-pointer font-bold`}
                  >
                    {navLink?.name}
                  </ScrollLink>
                ) : navLink.type === "link" ? (
                  <Link
                    href={navLink.href}
                    className={`${pathname === navLink.href ? "text-[#F17700]" : "text-[#118E96]"} font-bold`}
                  >
                    {navLink.name}
                  </Link>
                ) : (
                  // @ts-expect-error: wrong type
                  <div className="relative" ref={dropdownRef}>
                    <div
                      onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                      className={`flex cursor-pointer items-center gap-2 font-bold text-[#118E96]`}
                    >
                      <p>{navLink.name}</p>
                      <Image
                        src={"/images/arrow-down.svg"}
                        alt="arrow down icon"
                        width={17}
                        height={8}
                      />
                    </div>
                    <div
                      className={`absolute top-12 z-20 flex w-[250px] transform flex-col gap-7 rounded-xl bg-[#FAFAFA] px-6 py-4 transition-opacity duration-500 ease-in ${showMoreDropdown ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}
                    >
                      {navLink.options.map((option) => (
                        <Link key={option.id} href={option.href} legacyBehavior>
                          <a
                            onClick={() => setShowMoreDropdown(false)}
                            className={`satoshi ${pathname === navLink.href ? "text-[#F17700]" : "text-[#000000]"} font-medium`}
                          >
                            {option.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {isAuth ? (
            <button
              onClick={() => router.push("/profile")}
              className="hidden h-11 w-[175px] items-center justify-center rounded-md bg-[#118E96] font-black text-white xl:flex"
            >
              My Account
            </button>
          ) : (
            <div className="hidden items-center gap-7 xl:flex">
              <button
                onClick={() => router.push("/login")}
                className={`rounded-[20px] border ${pathname === "/login" ? "border-[#F17700] text-[#F17700]" : "border-[#BBC42F] text-black"} px-[20px] py-[10px] font-black`}
              >
                Login
              </button>
              <button
                onClick={() => router.push("/signup")}
                className={`rounded-[20px] border ${pathname === "/signup" ? "border-[#F17700] text-[#F17700]" : "border-[#BBC42F] text-black"} px-[20px] py-[10px] font-black`}
              >
                Sign-up for Free
              </button>
            </div>
          )}
          {/* hamburger */}
          <div
            onClick={() => setShowMobileMenu(true)}
            className="block cursor-pointer xl:hidden"
          >
            <Image
              src={"/images/hamburger.svg"}
              alt="hamburger"
              width={28}
              height={14}
            />
          </div>

          {/* Mobile Backdrop */}
          {showMobileMenu && (
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setShowMobileMenu(false)}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={`fixed right-0 top-0 z-50 h-full w-full max-w-[506px] transform overflow-y-auto bg-[#fafafa] transition-transform duration-300 ${showMobileMenu ? "translate-x-0" : "translate-x-full"} p-4`}
          >
            {/* Close Button */}
            <div
              onClick={() => setShowMobileMenu(false)}
              className="/* Positioning */ /* Size & Alignment */ /* Background & Text */ /* Shape & Typography */ absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E34033] pb-1 text-[26px] font-bold text-white"
            >
              x
            </div>

            {/* Profile Section */}
            {isAuth && (
              <div
                onClick={() => router.push("/profile")}
                className="/* Layout & Spacing */ /* Background & Shape */ /* Padding */ mt-8 flex items-center gap-6 rounded-lg bg-white p-4"
              >
                <div className="shrink-0">
                  <Image
                    src={user?.image?.url || "/images/user-profile.svg"}
                    alt="user dp"
                    width={56}
                    height={56}
                    className="h-[56px] w-[56px] rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="satoshi font-medium text-black">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="satoshi text-[13px] text-[#4A4E4F]">
                    {user?.email || (user as any)?.createdBy?.email}
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Links */}
            <ul className="mt-4 flex flex-col gap-[30px]">
              {mobileNavLinks.map((navLink) => (
                <li key={navLink.id}>
                  {navLink?.type === "scroll" ? (
                    <ScrollLink
                      style={{
                        textDecoration: "none !important",
                      }}
                      to={navLink.href.substring(1)}
                      smooth={true}
                      duration={500}
                      className={`satoshi cursor-pointer font-medium ${
                        pathname === navLink.href
                          ? "text-[#F17700]"
                          : "text-black"
                      }`}
                    >
                      {navLink?.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      href={navLink.href}
                      className={`satoshi font-medium ${
                        pathname === navLink.href
                          ? "text-[#F17700]"
                          : "text-black"
                      }`}
                    >
                      {navLink.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            {!isAuth && (
              <>
                <button
                  onClick={() => router.push("/login")}
                  className={`mt-[30px] w-full rounded-[20px] border py-[10px] font-black ${
                    pathname === "/login"
                      ? "border-[#F17700] text-[#F17700]"
                      : "border-[#BBC42F] text-black"
                  } `}
                >
                  Login
                </button>

                <button
                  onClick={() => router.push("/signup")}
                  className={`mt-[30px] w-full rounded-[20px] border py-[10px] font-black ${
                    pathname === "/signup"
                      ? "border-[#F17700] text-[#F17700]"
                      : "border-[#BBC42F] text-black"
                  } `}
                >
                  Sign-up for Free
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
