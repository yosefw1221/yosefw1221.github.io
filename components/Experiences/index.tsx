import React, { LegacyRef, useState, useEffect } from 'react';
import { IExperience } from 'types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type IProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  content: IExperience[];
  title: string;
};

export default function Index({ innerRef, content, title }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Code symbols for subtle background
  const codeSymbols = ['{...}', '</>', 'const', 'async', 'await', '=> {}'];
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section
      ref={innerRef}
      id='experience'
      className='experience-section relative py-24 theme-bg-secondary overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/5 filter blur-[80px]'></div>
        <div className='absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-purple-600/5 filter blur-[100px]'></div>

        {/* Subtle code symbols in background */}
        {mounted && (
          <div className='absolute inset-0 overflow-hidden'>
            {codeSymbols.map((symbol, index) => (
              <motion.div
                key={`code-symbol-${index}`}
                className='absolute font-mono text-blue-500/10 text-sm md:text-base'
                style={{
                  left: `${(index * 15) % 100}%`,
                  top: `${10 + ((index * 8) % 80)}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.7, 0],
                  y: [0, -30],
                  rotate: [0, index % 2 === 0 ? 5 : -5],
                }}
                transition={{
                  duration: 8 + index,
                  repeat: Infinity,
                  delay: index * 2,
                  ease: 'easeInOut',
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='mb-16 text-center'
        >
          <h2
            className='font-semibold text-4xl sm:text-5xl md:text-6xl theme-text-primary heading-text'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <motion.div
            className='w-24 h-1 bg-blue-500 mt-4 mx-auto'
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Modern Timeline Layout */}
        <div className='max-w-5xl mx-auto relative'>
          {/* Vertical timeline line */}
          <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/10 via-blue-500/30 to-purple-500/10 transform md:-translate-x-1/2'></div>

          {content?.map((experience, index) => {
            // Create alternating layout for desktop
            const isEven = index % 2 === 0;

            return (
              <div
                ref={ref}
                key={experience.company + index}
                className='relative mb-12 last:mb-0'
              >
                {/* Timeline node */}
                <div className='hidden md:block absolute left-0 md:left-1/2 top-12 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10'></div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`md:w-[calc(50%-20px)] ${
                    isEven ? 'md:mr-auto' : 'md:ml-[calc(50%+20px)]'
                  }`}
                >
                  <div className='theme-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                    {/* Company logo or badge - can be added if available */}
                    {experience.link && (
                      <div className='absolute top-4 right-4'>
                        <a
                          href={experience.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-blue-500 hover:text-blue-600 transition-colors'
                        >
                          <svg
                            className='w-5 h-5'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                          </svg>
                        </a>
                      </div>
                    )}

                    {/* Experience header with all important info */}
                    <div className='p-6 border-b theme-border'>
                      <div className='flex flex-col gap-4'>
                        <div>
                          <h3 className='text-xl sm:text-2xl font-bold text-blue-500'>
                            {experience.company}
                          </h3>
                          <h4 className='text-lg sm:text-xl font-medium theme-text-primary mt-1'>
                            {experience.title}
                          </h4>
                        </div>

                        <div className='flex flex-wrap gap-3'>
                          <div className='flex items-center gap-1.5 theme-text-secondary text-sm border theme-border px-3 py-1.5 rounded-full'>
                            <svg
                              className='w-4 h-4 text-blue-500'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                              />
                            </svg>
                            <span>{experience.period}</span>
                            {experience.duration && (
                              <span className='ml-1 text-blue-500 font-medium'>
                                ({experience.duration})
                              </span>
                            )}
                          </div>

                          <div className='flex items-center gap-1.5 theme-text-secondary text-sm border theme-border px-3 py-1.5 rounded-full'>
                            <svg
                              className='w-4 h-4 text-blue-500'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                              />
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                              />
                            </svg>
                            <span>{experience.location}</span>
                          </div>

                          {experience.active && (
                            <div className='flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'>
                              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
                              <span>Current</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Experience content */}
                    <div className='p-6'>
                      {/* Experience description */}
                      <div className='theme-text-secondary text-sm sm:text-base leading-relaxed'>
                        {experience.description &&
                          (typeof experience.description === 'string' &&
                          experience.description.includes('<') ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: experience.description,
                              }}
                              className='prose prose-sm max-w-none theme-text-primary'
                            />
                          ) : (
                            <ul className='list-disc pl-5 space-y-2'>
                              {(typeof experience.description === 'string'
                                ? experience.description
                                    .toString()
                                    .split('.')
                                    .filter((s) => s.trim().length > 0)
                                : [experience.description]
                              ).map((sentence, i) => (
                                <li
                                  key={i}
                                  className='transition-colors duration-300 hover:text-blue-500'
                                >
                                  {typeof sentence === 'string'
                                    ? sentence.trim() +
                                      (sentence.endsWith('.') ? '' : '.')
                                    : sentence}
                                </li>
                              ))}
                            </ul>
                          ))}
                      </div>

                      {/* Skills tags */}
                      {experience.skills && experience.skills.length > 0 && (
                        <div className='flex flex-wrap gap-2 mt-6'>
                          {experience.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              className='px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 cursor-default'
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 17,
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
