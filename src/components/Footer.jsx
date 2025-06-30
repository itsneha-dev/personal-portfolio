import React from 'react';

export default function Footer() {
  const menuItem = [
  { name: "Home", redirect: "#home" },
  { name: "Skills", redirect: "#skills" },
  { name: "Projects", redirect: "#projects" },
  { name: "Experience", redirect: "#experience" },
  { name: "Education", redirect: "#education" },
  { name: "Contact", redirect: "#contact" },
  ];

  return (
    <footer className=" text-white py-4 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        <h2 className="text-3xl text-[#854CE6] font-bold tracking-wider" style={{ fontFamily: "'Great Vibes', cursive" }}>Neha Rani</h2>
        <ul className="flex flex-wrap justify-center gap-6 md:text-lg sm:text-[12px]">
          {menuItem.map((menu, index) => (
            <li key={`menu-${index}`}>
              <a
                href={menu.redirect}
                className="hover:text-[#854CE6] transition-colors duration-200"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-full border-t border-gray-700 my-2" />
        <p className="text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Neha Rani. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
