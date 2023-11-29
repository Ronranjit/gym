import React from 'react';

const Avatar = ({ image }) => {
  return (
    <div>
      <div className='avatar mb-3'>
        <div className='w-24 rounded-full'>
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
