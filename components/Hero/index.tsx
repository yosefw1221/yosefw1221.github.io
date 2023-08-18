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
      <div className='text-white min-h-screen px-2 backdrop-blur flex justify-center items-center flex-col'>
        <div
          style={{ fontSize: '4rem' }}
          className=' text-white text-center font-semibold'
          dangerouslySetInnerHTML={{ __html: content.title }}
        />
        <span className='w-46 h-[1.5px] mb-2  bg-[#4d85e6]' />
        <div
          style={{ fontSize: '1.8rem' }}
          className=' text-white text-center font-thin'
          dangerouslySetInnerHTML={{ __html: content.subtitle }}
        />

        <ArrowAnim />
      </div>
    </section>
  );
}
