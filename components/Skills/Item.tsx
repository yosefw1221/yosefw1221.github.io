import Image from 'next/image';
import { ISkill } from 'types';

function Item({ icon, title, description, stacks }: ISkill) {
  return (
    <div className='border text-white p-6'>
      <div className='flex gap-6'>
        <Image className='h-10' width={30} height={30} src={icon} alt='icon' />
        <div className='flex flex-col gap-5'>
          <div
            className='font-semibold text-4xl decoration-8'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className='flex flex-wrap flex-row items-baseline text-xs gap-5'>
            {stacks?.map((stack) => (
              <div
                key={stack.name}
                className='flex gap-1  text-gray-200 items-center flex-col'
              >
                <Image
                  className='h-10 w-10 border-[#aaa4] p-1 rounded-md'
                  width={40}
                  height={80}
                  src={stack.icon}
                  alt={stack.name}
                />
                <span className='opacity-90 text-[10px]'>{stack.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
