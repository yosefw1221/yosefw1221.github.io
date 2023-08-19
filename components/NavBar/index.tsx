import React from 'react';
import Link from 'next/link';
import HamburgerIcon from '../../components/HambergerIcon';
import { useState } from 'react';
import { INavItem } from 'types';

type IProps = {
  content: INavItem[];
  active: string;
};
export default function NavBar({ content, active }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className='fixed top-0 left-6 right-6 invisible z-10 lg:visible bg-sky-200 backdrop-blur-sm select-none m-8 bg-opacity-50 drop-shadow-sm p-6 rounded-full max-w-screen-lg mx-auto '>
        <ul className='flex flex-row gap-4  md:gap-4 lg:gap-8 justify-center items-center font-light '>
          {content.map(({ link, title }) => (
            <MenuItem
              key={link}
              active={active === link}
              href={link}
              title={title}
            />
          ))}
          <li
            className='border-[1.5px] bg-blue-500 border-blue-500 hover:scale-105 transition-all cursor-pointer rounded-full px-4 py-2
        absolute right-12 text-white drop-shadow-md'
          >
            <Link className={`${'/#contact' === active ? 'animate-pulse' : ''}`} href='#contact'>Let&apos;s Talk</Link>
          </li>
        </ul>
      </div>
      {/* // for small device */}
      <div className='fixed lg:hidden z-10 flex flex-col top-0 left-0 right-0'>
        <HamburgerIcon
          isOpen={isOpen}
          className='z-20 p-8'
          onClick={() => setIsOpen(!isOpen)}
        />
        <div
          className={`z-10 bg-[#0007] backdrop-blur-md transition-all duration-300 ${
            isOpen ? 'clip-path-circle-active' : 'clip-path-circle'
          } w-full h-screen absolute top-0 text-white flex flex-col`}
        >
          <ul className='flex justify-center  h-full items-center uppercase flex-col gap-6'>
            {content.map(({ link, title }) => (
              <li
                key={link}
                className={`hover:text-blue-400 cursor-pointer hover:scale-105 ${
                  link === active ? 'font-semibold text-blue-500' : ''
                }`}
              >
                <Link onClick={() => setIsOpen(false)} href={link}>
                  {title}
                </Link>
              </li>
            ))}
            <li
              className={`hover:text-blue-400 cursor-pointer hover:scale-105 border-blue-500 border rounded-full px-4 py-2`}
            >
              <Link
                className={`${'/#contact' === active ? 'font-bold' : ''}`}
                href='#contact'
              >
                Let&apos;s Talk
              </Link>
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
  active: boolean;
}

function MenuItem({ title, href, active, ...props }: MenuItemProps) {
  return (
    <li className='hover:text-blue-400 text-white hover:font-normal hover:scale-105 transition-all cursor-pointer'>
      <Link
        className={`${active ? 'text-blue-400' : 'text-white'}`}
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
