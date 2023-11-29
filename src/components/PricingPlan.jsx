import React from 'react';
import { Link } from 'react-scroll';

const PricingPlan = () => {
  return (
    <div id='pricing'>
      <div class='min-h-screen flex justify-center items-center bg-gray-50'>
        <section class='pt-12 bg-gray-50 sm:pt-16'>
          <div class='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div class='max-w-2xl mx-auto text-center'>
              <h1 class='px-6 text-lg text-gray-600 font-inter'>
                Smart email campaign builder, made for Developers
              </h1>
              <p class='mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj'>
                Make the wise decision for your
                <span class='relative inline-flex sm:inline'>
                  <span class='bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0'></span>
                  <span class='relative'> fitness </span>
                </span>
              </p>

              <div class='px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9'>
                <a
                  href='#'
                  title=''
                  class='inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                  role='button'
                >
                  Start Today
                </a>

                <a
                  href='#'
                  title=''
                  class='inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900'
                  role='button'
                >
                  <svg
                    class='w-5 h-5 mr-2'
                    viewBox='0 0 18 18'
                    fill='none'
                    stroke='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z'
                      stroke-width='2'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                  Try free demo
                </a>
              </div>

              <p class='mt-8 text-base text-gray-500 font-inter'>
                1 Days free trial
              </p>
            </div>
          </div>

          <div class='pb-12 mt-6 bg-white'>
            <div class='relative'>
              <div class='absolute inset-0 h-2/3 bg-gray-50'></div>
              <div class='relative mx-auto'>
                <div class='lg:max-w-6xl lg:mx-auto '>
                  <div className='flex justify-center'>
                    <section className='lg:grid lg:grid-cols-3 gap-5 '>
                      <div className='card w-80 bg-base-50 shadow-xl font-primary'>
                        <div className='card-body'>
                          <h2 className='card-title text-gray-400'>Monthly</h2>
                          <p className='text-4xl  font-bold'>500 &#8377;</p>
                          <p className='py-4'>
                            Best for small period, person who needs <br />
                            to start fresh as a beginner
                          </p>

                          <div className='card-actions justify-end mt-2 mb-4'>
                            <Link
                              to='contact'
                              className='btn hover:bg-black hover:text-white border  w-full'
                            >
                              Buy Now
                            </Link>
                          </div>
                          <p className='font-bold'>whats included</p>
                          <ul className='text-gray-500 capitalize'>
                            <li>Best for beginners</li>
                            <li>Freash start</li>
                            <li>great result</li>
                          </ul>
                        </div>
                      </div>
                      {/* two */}
                      <div className='card bg-orange-500 w-80  shadow-2xl font-primary'>
                        <div className='card-body text-white'>
                          <h2 className='card-title text-white'>Annual</h2>
                          <p className='text-4xl  font-bold'>8000 &#8377;</p>
                          <p className='py-4'>
                            Best for long period, person who needs <br />
                            to build their body and fitness
                          </p>
                          <div className='card-actions justify-end mt-2 mb-4'>
                            <Link
                              to='contact'
                              className='btn hover:bg-black hover:text-white border  w-full'
                            >
                              Buy Now
                            </Link>
                          </div>
                          <p className='font-bold'>whats included</p>
                          <ul className='text-gray-500 capitalize'>
                            <li>Best for builder</li>
                            <li>Asthetic</li>
                            <li>great result</li>
                          </ul>
                        </div>
                      </div>
                      {/* three */}
                      <div className='card w-80 bg-base-50 shadow-xl font-primary'>
                        <div className='card-body'>
                          <h2 className='card-title text-gray-400'>6 month</h2>
                          <p className='text-4xl  font-bold'>4000 &#8377;</p>
                          <p className='py-4'>
                            Best for long period, person who needs <br />
                            to stay in a shape.
                          </p>
                          <div className='card-actions justify-end mt-2 mb-4'>
                            <Link
                              to='contact'
                              className='btn hover:bg-black hover:text-white border  w-full'
                            >
                              Buy Now
                            </Link>
                          </div>
                          <p className='font-bold'>whats included</p>
                          <ul className='text-gray-500 capitalize'>
                            <li>Best for builder</li>
                            <li>Asthetic</li>
                            <li>great result</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPlan;
