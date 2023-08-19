import React, { LegacyRef } from 'react';
import Profile from './Profile';

type IAboutProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  content: string;
  title: string;
};
export default function Index({ innerRef, content, title }: IAboutProps) {
  return (
    <section ref={innerRef} id='about'>
      <div className='grid lg:grid-cols-2 max-w-screen-xl mx-auto my-32 text-white place-items-center gap-4'>
        <div className='flex px-6 sm:px-8 flex-col order-2 lg:order-1'>
          <div
            className='text-white hidden mb-6 lg:block text-5xl md:text-6xl font-semibold'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className='order-1 lg:order-1'>
          <Profile />
        </div>
      </div>
    </section>
  );
}
