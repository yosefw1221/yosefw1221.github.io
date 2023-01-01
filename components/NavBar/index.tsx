import HamburgerIcon from "./HambergerIcon";
import {  useState } from "react";

export default function NavBar({ active = "#" }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="fixed top-0 left-6 right-6 invisible z-10 md:visible bg-sky-200 backdrop-blur-sm select-none m-8 bg-opacity-50 drop-shadow-sm p-6 rounded-full max-w-screen-lg mx-auto ">
        <ul className="flex flex-row gap-4  md:gap-8 lg:gap-8 justify-center items-center font-light ">
          <MenuItem active={active} href="#" title="Home" />
          <MenuItem active={active} href="#about" title="About" />
          <MenuItem active={active} href="#service" title="Service" />
          <MenuItem active={active} href="#project" title="Project" />
          <MenuItem active={active} href="#experience" title="Experience" />
          <li
            className="animate-none border-[1.5px] bg-blue-500 border-blue-500 hover:scale-105 transition-all cursor-pointer rounded-full px-4 py-2
        absolute right-12 text-white drop-shadow-md"
          >
            <a href="mailTo:yosefworku1221@gmail.com">Get in Touch</a>
          </li>
        </ul>
      </div>
      <div className="absolute md:hidden flex flex-col top-0 left-0 right-0">
        <HamburgerIcon
          isOpen={isOpen}
          className="z-20 p-8"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div
          className={`z-10 bg-[#0007] backdrop-blur-md transition-all duration-300 ${
            isOpen ? "clip-path-circle-active" : "clip-path-circle"
          } w-full h-screen absolute top-0 text-white flex flex-col`}
        >
          <ul className="flex justify-center  h-full items-center uppercase flex-col gap-6">
            <li className="hover:text-blue-400 cursor-pointer hover:scale-105">
              <a onClick={() => setIsOpen(false)} href="#">
                Home
              </a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer hover:scale-105">
              <a onClick={() => setIsOpen(false)} href="#about">
                About
              </a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer hover:scale-105">
              <a onClick={() => setIsOpen(false)} href="#service">
                Service
              </a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer hover:scale-105">
              <a onClick={() => setIsOpen(false)} href="#project">
                Project
              </a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer hover:scale-105">
              <a onClick={() => setIsOpen(false)} href="#experience">
                Experience
              </a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer hover:scale-105 border-blue-500 border rounded-full px-4 py-2">
              <a onClick={() => setIsOpen(false)} href="mailTo:yosefworku1221@gmail.com">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

interface MenuItemProps {
  title: string;
  href: string;
  active: string;
}

function MenuItem({ title, href, active, ...props }: MenuItemProps) {
  return (
    <li className="hover:text-blue-400 text-white hover:font-normal hover:scale-105 transition-all cursor-pointer">
      <a
        className={`${active === href ? "text-blue-400" : "text-white"}`}
        href={href}
      >
        {title}
      </a>
    </li>
  );
}
