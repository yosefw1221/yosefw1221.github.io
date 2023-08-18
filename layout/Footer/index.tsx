import { ISocialLink } from 'types';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ findMeOn }: { findMeOn: ISocialLink[] }) {
  return (
    <footer className='bg-slate-800 px-4 py-6 w-full mt-auto'>
      <div className='flex flex-col items-center'>
        <p className=' font-extralight text-white mb-2 text-sm'>Find me on</p>
        <ul className='flex flex-row gap-4 text-white'>
          {findMeOn?.map((link) => (
            <Link key={link.name} href={link.link}>
              <Image width={18} height={18} src={link.icon} alt={link.name} />
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}
