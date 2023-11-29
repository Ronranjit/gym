import React, { useState } from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import imgthree from '../images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg';
import imgfour from '../images/alonso-reyes-0HlI76m4jxU-unsplash.jpg';
import imgsix from '../images/mob-alizadeh-93or5BgHobk-unsplash.jpg';
import Navbar from './Navbar';

const sliderImg = [
  {
    image: imgfour,
  },
  {
    image: imgsix,
  },
  {
    image: imgthree,
  },
];

const Slider = () => {
  return (
    <div className='mb-16 relative' id='hero'>
      <Navbar />
      <ScrollCarousel
        className=''
        autoplay
        autoplaySpeed={4}
        speed={8}
        margin={0}
        onReady={() => console.log('I am ready')}
      >
        {sliderImg.map((item) => (
          <img src={item.image} key={item} className='h-[50rem]' />
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default Slider;
