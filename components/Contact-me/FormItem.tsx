import React from 'react';
import { ReactNode, useState } from 'react';

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
    <div className='flex flex-col'>
      <label className='text-xs ml-2 mt-2 text-gray-300' htmlFor={id}>
        {label}
      </label>
      <div className='flex flex-col'>
        {React.cloneElement(children as React.ReactElement<any>, {
          id,
          ref: inputRef,
          onBlur: handleOnBlur,
          onChange: () => setError(''),
        })}
        {error && (
          <span style={{ color: '#ff6889' }} className='error text-xs ml-4'>
            {error}
          </span>
        )}
      </div>
    </div>
  );
};