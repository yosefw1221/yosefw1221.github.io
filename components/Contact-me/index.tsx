import React, { LegacyRef, useState } from 'react';
import faPaperPlane from '@public/icons/faPaperPlane.svg';
import { MessageStatus, sendMessage } from './sendMessage';
import { FormItem } from './FormItem';
import Image from 'next/image';

type IProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  title: string;
};
export default function ContactMe({ innerRef, title }: IProps) {
  const [status, setStatus] = useState<MessageStatus>({
    message: 'Send Message',
  });

  return (
    <section ref={innerRef} id='contact'>
      <div className='flex flex-col items-center mx-auto px-4 py-6 bg-[#4444]'>
        <div
          className='font-semibold text-center text-6xl py-4 text-white'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <form onSubmit={sendMessage(setStatus)}>
          <fieldset className='flex flex-col w-96' disabled={status.success}>
            <FormItem
              label='Your Name'
              id='Name'
              validator={(input: string) => {
                if (!input?.trim()) return 'Name is required!';
              }}
            >
              <input
                className='my-2 py-2 px-6 bg-slate-300 rounded-full min-w-max'
                inputMode='text'
                maxLength={100}
              />
            </FormItem>

            <FormItem
              label='Your Email'
              id='email'
              validator={(email: string) => {
                if (!email?.trim()) return 'Email is required!';
                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
                  return 'Invalid email address!';
              }}
            >
              <input
                className='my-2 py-2 px-6 bg-slate-300 rounded-full min-w-max'
                inputMode='text'
                maxLength={100}
              />
            </FormItem>

            <FormItem
              label='Your Message'
              id='message'
              validator={(message: string) => {
                if (!message?.trim()) return 'Message could not be empty!';
                if (message.trim().length < 10) return 'Message is too short!';
              }}
            >
              <textarea
                rows={6}
                className='my-2 px-6 py-2 bg-slate-300 rounded-2xl'
              />
            </FormItem>

            <button
              type='submit'
              disabled={status.sending}
              className={`border disabled:hover:bg-transparent ${
                (status.success === false &&
                  'border-red-500 hover:bg-red-500') ||
                (status.success === true &&
                  'border-green-500 hover:bg-green-500')
              } flex items-center justify-center gap-4 text-white my-4 py-2 rounded-full hover:bg-blue-500 transition-all`}
            >
              <Image
                alt='send'
                width={16}
                height={16}
                src={faPaperPlane}
                className={`mr-2 ${status.sending ? 'animate-pulse' : ''}`}
              />
              <span className='self-center text-center'>{status.message}</span>
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
