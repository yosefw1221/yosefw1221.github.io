import React, { LegacyRef } from 'react';
import { IExperience } from 'types';
import Experience from './Experience';

type IProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  content: IExperience[];
  title: string;
};
export default function Index({ innerRef, content, title }: IProps) {
  return (
    <div
      ref={innerRef}
      id='experience'
      className='grid lg:grid-cols-2 max-w-screen-xl mx-auto my-32 px-6 text-justify text-white place-items-center gap-4'
    >
      <span
        style={{ lineHeight: '4rem' }}
        className='font-semibold text-center text-5xl md:text-6xl py-4 text-white overflow-wrap break-words'
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        {content?.map((experience: IExperience) => (
          <Experience key={experience.company} {...experience} />
        ))}
      </ol>
    </div>
  );
}
