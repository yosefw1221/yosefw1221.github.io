import React from 'react';
import Link from 'next/link';
import HamburgerIcon from '../../components/HambergerIcon';
import { useState, useEffect } from 'react';
import { INavItem } from 'types';
import { motion, AnimatePresence } from 'framer-motion';

type IProps = {
  content: INavItem[];
  active: string;
};
export default function NavBar({ content, active }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-20 invisible lg:visible select-none max-w-screen-lg mx-auto px-6 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      >
        <motion.div 
          className={`${
            scrolled 
              ? 'theme-card shadow-lg backdrop-blur-md' 
              : 'bg-transparent'
          } transition-all duration-300 rounded-full px-6 py-3 flex justify-between items-center`}
        >
          <div className="w-[100px]"></div> {/* Spacer for alignment */}
          
          <ul className='flex flex-row gap-8 justify-center items-center'>
            {content.map(({ link, title }) => (
              <MenuItem
                key={link}
                active={active === link}
                href={link}
                title={title}
              />
            ))}
          </ul>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='theme-accent-bg hover:bg-blue-600 transition-all cursor-pointer rounded-full px-6 py-2 w-[120px] text-center whitespace-nowrap'
          >
            <Link
              className={`${'/#contact' === active ? 'font-medium' : ''} text-white`}
              href='#contact'
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile menu */}
      <div className='fixed lg:hidden z-30 flex flex-col top-0 left-0 right-0'>
        <HamburgerIcon
          isOpen={isOpen}
          className='z-40 p-8'
          onClick={() => setIsOpen(!isOpen)}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='z-30 theme-bg-primary/95 backdrop-blur-md w-full h-screen fixed top-0 flex flex-col'
              initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
              animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
              exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.ul
                className='flex justify-center h-full items-center flex-col gap-8'
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {content.map(({ link, title }) => (
                  <motion.li
                    key={link}
                    className={`text-xl theme-text-primary hover:text-blue-400 cursor-pointer ${
                      link === active ? 'font-semibold text-blue-500' : ''
                    }`}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    <Link onClick={() => setIsOpen(false)} href={link}>
                      {title}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  className={`mt-6`}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                >
                  <motion.div
                    className="theme-accent-bg px-8 py-3 rounded-full text-white shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      className={`${'/#contact' === active ? 'font-bold' : ''}`}
                      href='#contact'
                      onClick={() => setIsOpen(false)}
                    >
                      Let&apos;s Talk
                    </Link>
                  </motion.div>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
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
    <motion.li 
      className='theme-text-primary hover:font-normal cursor-pointer'
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <Link
        className={`${
          active 
            ? 'text-blue-400 font-medium relative after:content-[""] after:absolute after:left-1/4 after:bottom-[-5px] after:h-[2px] after:w-1/2 after:bg-blue-400'
            : 'hover:text-blue-200'
        } transition-colors`}
        href={href}
      >
        {title}
      </Link>
    </motion.li>
  );
}
