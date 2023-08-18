import React from 'react';
import Footer from './Footer';

export default function Layout({ children, findMeOn }: any) {
  return (
    <div className='min-h-screen  w-screen flex  flex-col bg-[#1a191d]  selection:bg-[#37e5] selection:text-white'>
      <main className='flex-1 '>{children}</main>
      <Footer findMeOn={findMeOn} />
    </div>
  );
}
