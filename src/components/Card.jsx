import React from 'react';
import { motion } from 'framer-motion';
import jhon from '../images/john-fornander-TAZoUmDqzXk-unsplash.jpg';
import samBg from '../images/aaron-brogden-miCR9VIQ5PE-unsplash.jpg';
import heroBg from '../images/vadim-paripa-MmrSaEJZs4s-unsplash.jpg';
import sven from '../images/anastase-maragos-DHsdSeCpjRU-unsplash.jpg';
import lorenz from '../images/milan-csizmadia-pAlhyoKWlPo-unsplash.jpg';
import { Link } from 'react-scroll';

const cardPack = [
  {
    id: 1,
    img: `url(${lorenz})`,
    text: 'persnol trainer',
  },
  {
    id: 2,
    img: `url(${samBg})`,
    text: 'weight gain',
  },
  {
    id: 3,
    img: `url(${sven})`,
    text: 'weight loss',
  },
  {
    id: 4,
    img: `url(${heroBg})`,
    text: 'cross fit',
  },
];

const Card = () => {
  return (
    <div className='font-primary' id='programs'>
      <h1 className='text-6xl text-center capitalize mb-16 font-semibold'>
        our <span className='text-orange-600'>programs</span>
      </h1>
      {/* hero */}
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: `url(${samBg})`,
        }}
      >
        <div className='hero-overlay bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='lg:grid lg:grid-cols-4 gap-14'>
            {cardPack.map((item) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={item.id}
                className='hero h-96 w-64 cursor-pointer'
                style={{
                  backgroundImage: item.img,
                }}
              >
                <div className='hero-overlay bg-opacity-30'></div>
                <div className='hero-content text-center text-neutral-content'>
                  <div className='max-w-md'>
                    <h1 className='mb-5 text-base-50 capitalize text-3xl font-bold'>
                      {item.text}
                    </h1>
                    <Link
                      to='contact'
                      className='btn bg-red-600 rounded-none font-normal text-white border-none'
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* hero */}
    </div>
  );
};

export default Card;
