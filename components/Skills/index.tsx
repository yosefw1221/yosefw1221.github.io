import React, { LegacyRef } from 'react';
import { ISkill } from 'types';
import Item from './Item';
import { motion } from 'framer-motion';

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
      className="skills-section w-full py-20 overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/10 filter blur-[80px]"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-purple-600/10 filter blur-[100px]"></div>
      </div>

      <div className='max-w-screen-xl p-4 mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span
            className='font-semibold py-4 text-5xl md:text-6xl theme-text-primary inline-block'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="w-24 h-1 bg-blue-500 mt-2 mb-12"></div>
        </motion.div>
        <div className='grid pt-6 lg:grid-cols-2 gap-6 flex-wrap'>
          {content.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Item {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
