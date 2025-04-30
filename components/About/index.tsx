import React, { LegacyRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Profile = dynamic(() => import('./Profile'), { ssr: false });

type IAboutProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  content: string;
  title: string;
};
export default function Index({ innerRef, content, title }: IAboutProps) {
  return (
    <section ref={innerRef} id='about' className="py-20 theme-bg-primary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-600/5 filter blur-[120px]"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 rounded-full bg-purple-600/5 filter blur-[100px]"></div>
      
      <div className='grid lg:grid-cols-2 max-w-screen-xl mx-auto place-items-center gap-16 px-6 relative'>
        <motion.div 
          className='flex sm:px-8 flex-col order-2 lg:order-1 max-w-xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className='theme-text-primary hidden mb-6 lg:block text-4xl md:text-5xl font-semibold heading-text'
            dangerouslySetInnerHTML={{ __html: title }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="w-24 h-1 bg-blue-500 mb-8 hidden lg:block"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div 
            className="theme-about-text text-base md:text-lg leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: content }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>
        <motion.div 
          className='order-1 lg:order-2 w-full max-w-md'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Profile />
        </motion.div>
      </div>
    </section>
  );
}
