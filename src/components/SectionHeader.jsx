import React from 'react'

const SectionHeader = ({textAbove, textBelow, textColor}) => {
  return (
    <div
      className={`text-center font-montserrat text-3xl md:text-4xl md:mb-12 mb-6 ${
        textColor ? "!text-white" : "text-secondary"
      }`}
    >
      <p className='text-primary'>{textAbove}</p>
      <p className='font-bold'>{textBelow}</p>
    </div>
  );
}

export default SectionHeader