import { IHero } from 'types';
import ArrowAnim from '../ArrowAnim';
import { LegacyRef } from 'react';

type IHeroProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  content: IHero;
};
export default function Hero({ innerRef, content }: IHeroProps) {
  return (
    <section
      ref={innerRef}
      style={{
        backgroundImage: content.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='text-white min-h-screen px-5 backdrop-blur flex justify-center items-center flex-col'>
        <div
          className=' text-white text-center font-semibold text-5xl md:text-6xl'
          dangerouslySetInnerHTML={{ __html: content.title }}
        />
        <span className='w-46 h-[1.5px] mb-2  bg-[#4d85e6]' />
        <div
          className=' text-white text-center font-thin text-2xl'
          dangerouslySetInnerHTML={{ __html: content.subtitle }}
        />

        <ArrowAnim />
      </div>
    </section>
  );
}
