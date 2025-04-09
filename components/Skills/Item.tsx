import Image from 'next/image';
import { ISkill } from 'types';
import { motion } from 'framer-motion';

function Item({ icon, title, description, stacks }: ISkill) {
  return (
    <motion.div 
      className='theme-card border rounded-xl p-6 shadow-md'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <div className='flex gap-6'>
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-1"
        >
          <Image className='h-10 w-auto' width={30} height={30} src={icon} alt='icon' />
        </motion.div>
        <div className='flex flex-col gap-4'>
          <motion.div
            className='font-semibold text-3xl theme-text-primary'
            dangerouslySetInnerHTML={{ __html: title }}
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          />
          <motion.div 
            dangerouslySetInnerHTML={{ __html: description }}
            className="theme-text-secondary text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <div className='flex flex-wrap flex-row items-baseline text-xs gap-5 pt-2'>
            {stacks?.map((stack, index) => (
              <motion.div
                key={stack.name}
                className='flex gap-1 theme-text-secondary items-center flex-col'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <div className='theme-card p-1 rounded-md shadow-sm w-10 h-10 flex items-center justify-center'>
                  <Image
                    className='h-7 w-7'
                    width={40}
                    height={40}
                    src={stack.icon}
                    alt={stack.name}
                  />
                </div>
                <span className='opacity-90 mt-1 text-[10px]'>{stack.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Item;
