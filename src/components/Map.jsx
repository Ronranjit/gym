import React from 'react';

const Map = () => {
  return (
    <div className='font-primary p-4  mb-9' id='location'>
      <h1 className='text-6xl text-center capitalize mb-16 font-semibold'>
        Locate me
      </h1>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3894.8386300800503!2d78.2007333!3d12.526847199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDMxJzM2LjciTiA3OMKwMTInMDIuNiJF!5e0!3m2!1sen!2sin!4v1701003920391!5m2!1sen!2sin'
        // width={900}
        height='200'
        styles='border:0;'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
        className='mx-auto lg:w-11/12'
      ></iframe>
    </div>
  );
};

export default Map;
