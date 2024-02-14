import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, label }) => {
  return (
    <div className='relative mb-6' data-te-input-wrapper-init>
      <input
        type={type}
        className='peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
        placeholder={placeholder}
      />
      <label
        htmlFor='exampleFormControlInput3'
        className='peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none'
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
