import faExternalLink from '@public/icons/faLink.svg';
import Image from 'next/image';
import { IExperience } from 'types';

const Experience = ({
  company,
  duration,
  position,
  description,
  link,
  active,
}: IExperience) => {
  return (
    <li className='mb-10 ml-8'>
      <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
      <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        {duration}
      </time>
      <br />
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className={`text-lg cursor-pointer hover:underline underline-offset-4 font-semibold ${
          active ? 'text-blue-400' : 'text-orange-200'
        } dark:text-white`}
      >
        {company}
        <Image
          alt='visit'
          className='inline'
          width={12}
          height={12}
          src={faExternalLink}
        />
      </a>
      <div className='mb-6 text-sm font-normal text-gray-500 dark:text-gray-400'>
        {position}
        <br />
        <div
          className='text-gray-300 pt-1 text-base'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </li>
  );
};

export default Experience;
