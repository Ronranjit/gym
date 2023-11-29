import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../images/mob-alizadeh-HeXq-ssuM1I-unsplash.jpg';

const About = () => {
  return (
    <section className='mt-16 font-primary mb-16 ' id='about'>
      <h1 className='text-6xl text-center capitalize mb-16 font-semibold'>
        about <span className='text-orange-600'>gravity</span> fitness
      </h1>
      <div className='bg-black '>
        <section>
          {/* hero-contact */}
          <section className='w-11/12 mx-auto'>
            <div className=' font-primary   '>
              <section class=' md:flex md:items-center md:flex-wrap  lg:items-center'>
                <div class=' px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 '>
                  <h1 className='text-3xl mb-5  text-orange-500 font-semibold'>
                    About Our Gym
                  </h1>
                  <p className='text-white'>
                    Gravity club - A health club (also known as a fitness club,
                    fitness center, health spa, weight room and commonly
                    referred to as a gym) is a place that houses exercise
                    equipment for the purpose of physical exercise.
                  </p>
                </div>

                <div class=' px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 '>
                  <img src={aboutImg} alt='' />
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default About;
