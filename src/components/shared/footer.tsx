import { footerLinks } from "@/data/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2239] px-4 pb-20 pt-16 md:px-12">
      <div className="container grid gap-16 md:grid-cols-3 lg:grid-cols-4">
        {footerLinks.map((link) => (
          <div key={link.id} className="flex justify-start md:justify-center">
            <ul className="space-y-3">
              {link.sub.map((subLink) => (
                <li key={subLink.id} className="">
                  {subLink.href ? (
                    <Link
                      href={subLink.href}
                      className="satoshi font-medium text-white"
                    >
                      {subLink.name}
                    </Link>
                  ) : (
                    <p className="satoshi font-medium text-white">
                      {subLink.name}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
