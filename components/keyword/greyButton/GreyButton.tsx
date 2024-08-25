import React from 'react';

interface greyButtonProps {
  label: string;
  onClick?: () => void;
}

const GreyButton: React.FC<greyButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <>
      <div className='buttonDiv py-3'>
        <button
          className={"bg-gray-100 border-2 border-black text-black text-2xl font-bold py-2 px-4 rounded w-[400px]"}
          onClick={onClick}
        >
          {label}
        </button>
      </div>

    </>
  )

};

export default GreyButton;