import React, { LegacyRef } from 'react';
import { ISkill } from 'types';
import Item from './Item';

type IProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  content: ISkill[];
  title: string;
};
export default function Index({ innerRef, content, title }: IProps) {
  return (
    <section
      ref={innerRef}
      id='skills'
      style={{ background: '#4444', width: '100vw', paddingBottom: '3rem' }}
    >
      <div className='max-w-screen-xl p-4 mx-auto'>
        <span
          className='font-semibold py-4 text-5xl md:text-6xl text-white'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className='grid pt-6 lg:grid-cols-2 gap-6 flex-wrap'>
          {content.map((skill) => (
            <Item {...skill} key={skill.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
