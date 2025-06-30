import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const menuItem = [
  { name: "Home", redirect: "#home" },
  { name: "Skills", redirect: "#skills" },
  { name: "Projects", redirect: "#projects" },
  { name: "Experience", redirect: "#experience" },
  { name: "Education", redirect: "#education" },
  { name: "Contact", redirect: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen((prev) => {
    const newState = !prev;
    if (newState) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return newState;
  });
};

  return (
    <React.Fragment>
      <div className="bg-gray-900 text-white h-20 sticky top-0 z-10 flex items-center justify-between px-8">
        <a
  href="/"
  className="text-white text-2xl font-bold whitespace-nowrap"
  style={{ fontFamily: "'Great Vibes', cursive" }}
>
  Neha Rani
</a>

        {/* Menu Items */}
        <ul className="gap-6 list-none hidden md:flex">
          {menuItem.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.redirect}
                className="text-white font-medium hover:text-gray-400"
                activeclassname="border-b-2 border-white"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://github.com/itsneha-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#854CE6] bg-transparent text-[#854CE6] rounded-3xl shadow cursor-pointer duration-300 ease-in ... hover:bg-[#854CE6] hover:text-white "
            style={{ padding: "8px" }}
          >
            Github Profile
          </a>
        </div>
        {/* Humburger menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-900 relative z-50">
          <ul className="flex flex-col gap-4">
            {menuItem.map((menu) => (
              <li key={menu.name}>
                <a
                  href={menu.redirect}
                  onClick={() => setIsOpen(false)}
                  className="block text-white font-medium hover:text-gray-400"
                >
                  {menu.name}
                </a>
              </li>
            ))}

            {/* GitHub Button for mobile */}
            <a
              href="https://github.com/itsneha-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 border-2 border-[#854CE6] bg-transparent text-[#854CE6] rounded-3xl shadow cursor-pointer duration-300 ease-in px-4 py-2 text-center hover:bg-[#854CE6] hover:text-white"
            >
              GitHub Profile
            </a>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}
