import faLink2 from '@public/icons/faLink2.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='theme-card relative overflow-hidden rounded-xl shadow-xl h-full flex flex-col'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative h-52 overflow-hidden">
        {/* Tags overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 flex items-end p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className='bg-blue-500/80 select-none py-1 rounded-full px-2.5 text-xs text-white'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
        
        {/* Image with subtle zoom effect */}
        <motion.div 
          className='w-full h-full'
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            className='rounded-t-xl object-cover w-full h-full'
            src={image}
            height={300}
            width={500}
            alt={title}
            priority
          />
        </motion.div>
      </div>

      {/* Content section */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className='text-xl font-bold mb-3 theme-text-primary'>
          {title}
        </h3>
        
        <div
          className='theme-text-secondary text-sm'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        
        {link && (
          <div className="mt-auto pt-4">
            <motion.a
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors'
              href={link}
              target='_blank'
              rel='noreferrer'
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                alt='visit'
                width={16}
                height={16}
                src={faLink2}
              />
              <span>{linkText || 'View Project'}</span>
            </motion.a>
          </div>
        )}
      </div>
      
      {/* Simple highlight effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
