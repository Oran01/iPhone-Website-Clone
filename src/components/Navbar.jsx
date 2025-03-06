import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import React from "react";

/**
 * Navbar Component
 *
 * This component represents the navigation bar at the top of the page.
 * It includes the Apple logo, navigation links, and icons for search and shopping bag.
 *
 * @component
 * @returns {JSX.Element} The navbar section.
 */
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {/* Apple Logo */}
        <img src={appleImg} alt="Apple" width={14} height={18} />
        {/* Navigation Links (Hidden on small screens) */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        {/* Search and Shopping Bag Icons */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
