import React from 'react';
import faLink from '@public/icons/faLink.svg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { IBlog } from 'types';

type BlogProps = {
  slug: string;
  title: string;
  titleStyle?: string;
  thumbnail?: string | StaticImageData;
  tags?: string[];
};

export default function BlogItem({
  id,
  title,
  thumbnail,
  tags,
  readTime,
  ...rest
}: IBlog) {
  return (
    <div
      {...rest}
      className='group text-white flex hover:drop-shadow-lg duration-500 transition-all hover:scale-105 flex-col max-w-sm m-3 bg-neutral-800 rounded-md drop-shadow-sm p-2 shadow-black'
    >
      {thumbnail && (
        <Image
          className='rounded-t-md self-center max-h-60 object-contain'
          src={thumbnail}
          width={380}
          height={200}
          alt={title}
        />
      )}
      <span className='text-center font-semibold p-4'>{title}</span>
      {tags?.length && (
        <div className='flex justify-center gap-2 flex-wrap mx-6'>
          {tags.map((tag) => (
            <span
              className='border-gray-500 border select-none py-1 rounded-full px-2.5 text-xs text-gray-300'
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      <Link href={`/blogs/${id}`}>
        <div className='hidden group-hover:flex gap-1 justify-center cursor-pointer absolute items-center  top-0 bottom-0 rounded-md left-0 right-0 p-6 bg-blue-500 opacity-30 transition-all backdrop-blur-xs'>
          <Image width={32} src={faLink} alt='read more' />
          {'Read More'}
        </div>
      </Link>
    </div>
  );
}
