import React from "react";
import { footerLinks } from "../constants";

/**
 * Footer Component
 *
 * This component represents the footer section of the website.
 * It contains additional shopping information, a copyright notice,
 * and links to important sections.
 *
 * @component
 * @returns {JSX.Element} The footer section.
 */
const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        {/* Shopping and Contact Information */}
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">
              Find an Apple Store {""}{" "}
            </span>
            or{""} <span className="underline text-blue">other retailer </span>
            {""} near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000030-070-1832
          </p>
        </div>
        {/* Divider Line */}
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        {/* Copyright and Footer Links */}
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          {/* Footer Navigation Links */}
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link} {""}
                {/* Separator for links, except for the last one */}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
