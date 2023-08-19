import faLink2 from '@public/icons/faLink2.svg';
import Image from 'next/image';

type PortfolioCardProps = {
  title: string;
  image: string | any;
  tags: string[];
  description: string;
  link?: string;
  linkText?: string;
};

export default function PortfolioCard({
  title,
  image,
  tags,
  description,
  link,
  linkText,
}: PortfolioCardProps) {
  return (
    <div className='group text-white flex hover:drop-shadow-lg duration-500 transition-all hover:scale-105 flex-col max-w-sm m-3 bg-neutral-800 rounded-md drop-shadow-sm p-2 shadow-black'>
      <div className='w-full max-h-48' >
        <Image
          className='rounded-t-md self-center '
          src={image}
          height={300}
          width={500}
          alt={title}
        />
      </div>

      <span className='text-center font-semibold p-4'>{title}</span>
      {tags.length && (
        <div className='flex justify-center gap-2 flex-wrap mx-6'>
          {tags.map((tag) => (
            <span
              className='bg-blue-500 select-none hover:bg-blue-600 py-1 rounded-full px-2.5 text-xs text-white'
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <span
        className='m-4 list-disc'
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {link && (
        <div className='hidden  group-hover:block absolute bottom-0 left-0 right-0 p-6 bg-[#39f4] transition-all backdrop-blur-md'>
          <a
            className='flex hover:underline gap-2 items-center justify-center cursor-pointer'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            <Image
              alt='visit'
              className='inline'
              width={20}
              height={20}
              src={faLink2}
            />
            {linkText || 'View Project'}
          </a>
        </div>
      )}
    </div>
  );
}
