import React, { LegacyRef, useState, useEffect } from 'react';
import faPaperPlane from '@public/icons/faPaperPlane.svg';
import { MessageStatus, sendMessage } from './sendMessage';
import { FormItem } from './FormItem';
import { motion, AnimatePresence } from 'framer-motion';
import { ISocialLink } from 'types';
import Image from 'next/image';


type IProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  title: string;
  findMeOn: ISocialLink[];
};

export default function ContactMe({ innerRef, title, findMeOn }: IProps) {
  const [status, setStatus] = useState<MessageStatus>({
    message: 'Send Message',
  });
  const [mounted, setMounted] = useState(false);
  const [formHover, setFormHover] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Code symbols for floating effect
  const codeSymbols = [
    '{ }',
    '</>',
    'const',
    '()',
    '=>',
    'async',
    '= {}',
    '.then()',
  ];

  // Animation variants
  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const inputVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    focus: {
      scale: 1.02,
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.3)',
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      ref={innerRef}
      id='contact'
      className='relative py-20 overflow-hidden theme-bg-primary'
    >
      {/* Enhanced background elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-600/10 filter blur-[100px]'></div>
        <div className='absolute top-40 left-20 w-40 h-40 rounded-full bg-purple-600/5 filter blur-[80px]'></div>

        {/* Animated code symbols in background */}
        {mounted && (
          <div className='absolute inset-0 overflow-hidden'>
            {codeSymbols.map((symbol, index) => (
              <motion.div
                key={`code-${index}`}
                className='absolute font-mono text-blue-500/10 text-sm md:text-base'
                style={{
                  left: `${10 + ((index * 12) % 80)}%`,
                  top: `${5 + ((index * 10) % 90)}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  y: [0, -20],
                  x: [index % 2 === 0 ? -5 : 5, index % 2 === 0 ? 5 : -5],
                }}
                transition={{
                  duration: 5 + index * 2,
                  repeat: Infinity,
                  delay: index,
                  ease: 'easeInOut',
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className='max-w-screen-xl mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-10 text-center'
        >
          <motion.h2
            className='font-semibold text-5xl md:text-6xl theme-text-primary inline-block'
            dangerouslySetInnerHTML={{ __html: title }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.div
            className='h-1 bg-blue-500 mx-auto mt-4 w-24'
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className='max-w-2xl mx-auto'>
          <motion.div
            className='theme-card p-8 rounded-xl shadow-lg relative overflow-hidden'
            variants={formVariants}
            initial='initial'
            whileInView='animate'
            whileHover='hover'
            viewport={{ once: true }}
            onHoverStart={() => setFormHover(true)}
            onHoverEnd={() => setFormHover(false)}
          >
            {/* Animated glow effect when hovering form */}
            <AnimatePresence>
              {formHover && (
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            <form onSubmit={sendMessage(setStatus)}>
              <fieldset
                className='flex flex-col w-full'
                disabled={status.success}
              >
                <div className='grid gap-6 md:grid-cols-2'>
                  <motion.div
                    variants={inputVariants}
                    transition={{ delay: 0.1 }}
                  >
                    <FormItem
                      label='Your Name'
                      id='Name'
                      validator={(input: string) => {
                        if (!input?.trim()) return 'Name is required!';
                      }}
                    >
                      <motion.input
                        className='w-full my-2 py-3 px-6 theme-blur-bg border border-gray-300/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all theme-text-primary'
                        inputMode='text'
                        maxLength={100}
                        placeholder='John Doe'
                        whileFocus='focus'
                        variants={inputVariants}
                      />
                    </FormItem>
                  </motion.div>

                  <motion.div
                    variants={inputVariants}
                    transition={{ delay: 0.2 }}
                  >
                    <FormItem
                      label='Your Email'
                      id='email'
                      validator={(email: string) => {
                        if (!email?.trim()) return 'Email is required!';
                        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
                          return 'Invalid email address!';
                      }}
                    >
                      <motion.input
                        className='w-full my-2 py-3 px-6 theme-blur-bg border border-gray-300/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all theme-text-primary'
                        inputMode='text'
                        maxLength={100}
                        placeholder='example@email.com'
                        whileFocus='focus'
                        variants={inputVariants}
                      />
                    </FormItem>
                  </motion.div>
                </div>

                <motion.div
                  variants={inputVariants}
                  transition={{ delay: 0.3 }}
                >
                  <FormItem
                    label='Your Message'
                    id='message'
                    validator={(message: string) => {
                      if (!message?.trim())
                        return 'Message could not be empty!';
                      if (message.trim().length < 10)
                        return 'Message is too short!';
                    }}
                  >
                    <motion.textarea
                      rows={6}
                      className='w-full my-2 px-6 py-3 theme-blur-bg border border-gray-300/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all theme-text-primary resize-none'
                      placeholder='Your message here...'
                      whileFocus='focus'
                      variants={inputVariants}
                    />
                  </FormItem>
                </motion.div>

                <div className='flex justify-center mt-6'>
                  <motion.button
                    type='submit'
                    disabled={status.sending}
                    className={`px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all ${
                      (status.success === false &&
                        'bg-red-500 hover:bg-red-600') ||
                      (status.success === true &&
                        'bg-green-500 hover:bg-green-600') ||
                      'bg-blue-500 hover:bg-blue-600'
                    } text-white shadow-lg`}
                    variants={buttonVariants}
                    whileHover='hover'
                    whileTap='tap'
                  >
                    {/* Button icon with animation */}
                    <motion.div
                      animate={
                        status.sending
                          ? {
                              rotate: 360,
                              transition: {
                                duration: 1,
                                repeat: Infinity,
                                ease: 'linear',
                              },
                            }
                          : {}
                      }
                    >
                      <Image
                        alt='send'
                        width={16}
                        height={16}
                        src={faPaperPlane}
                      />
                    </motion.div>
                    <span>{status.message}</span>
                  </motion.button>
                </div>
              </fieldset>
            </form>
          </motion.div>

          <motion.div
            className='text-center mt-8 theme-text-secondary'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>Or connect with me on social media</p>
            <div className='flex justify-center gap-5 mt-4'>
              {findMeOn?.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.link}
                  target='_blank'
                  rel='noreferrer'
                  className='w-10 h-10 flex items-center justify-center rounded-full theme-icon-bg text-blue-500 transition-all'
                  whileHover={{
                    y: -3,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Image
                    width={18}
                    height={18}
                    src={link.icon}
                    alt={link.name}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
