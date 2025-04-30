import React from 'react';
import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FormItem = ({
  label,
  id,
  children,
  validator,
}: {
  label: string;
  id: string;
  error?: string;
  validator?: Function;
  children: ReactNode;
}) => {
  const [error, setError] = useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOnBlur = () => {
    if (validator) {
      setError(validator(inputRef.current?.value));
    }
  };

  return (
    <div className='flex flex-col mb-2'>
      <label className='text-sm mb-1 ml-2 font-medium theme-text-primary opacity-80' htmlFor={id}>
        {label}
      </label>
      <div className='flex flex-col'>
        {React.cloneElement(children as React.ReactElement<any>, {
          id,
          ref: inputRef,
          onBlur: handleOnBlur,
          onChange: () => setError(''),
        })}
        <AnimatePresence>
          {error && (
            <motion.span 
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className='text-red-500 text-xs mt-1 ml-3 font-medium'
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};