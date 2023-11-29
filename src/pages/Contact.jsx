import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import bgimg from '../images/victor-freitas-hOuJYX2K5DA-unsplash.jpg';

const Contact = () => {
  return (
    <div id='contact' className='mb-16'>
      <h1 className='text-6xl text-center capitalize mb-16 font-semibold'>
        Contact
      </h1>
      <section
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
        className='font-primary hero  '
      >
        <div className='hero-overlay bg-opacity-60'></div>
        {/* hero-contact */}
        <section className='w-11/12 mx-auto'>
          <div className=' font-primary   '>
            <section class=' md:flex md:items-baseline md:flex-wrap lg:h-screen lg:items-center'>
              <div class=' px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 '>
                <div class='mx-auto max-w-lg text-center '>
                  <h1 class='text-2xl font-normal text-white  sm:text-3xl'>
                    send us a message!
                  </h1>
                </div>

                <form
                  // onSubmit={onSubmit}
                  class='mx-auto mb-0 mt-8 max-w-md space-y-4'
                >
                  <div>
                    <label for='email' class='sr-only'>
                      Email
                    </label>

                    <div class='relative'>
                      <input
                        type='email'
                        class='w-full  border p-4 pe-12 text-sm shadow-sm placeholder:text-sm'
                        placeholder='Enter email'
                        name='email'
                        id='email'
                        // value={email}
                        // onChange={onChange}
                        required
                      />

                      <span class='absolute inset-y-0 end-0 grid place-content-center px-4'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='h-4 w-4 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label for='personMessage' class='sr-only'>
                      Password
                    </label>

                    <div class='relative'>
                      <textarea
                        type='text'
                        rows={8}
                        class='w-full capitalize border p-4 pe-12 text-sm shadow-sm resize-y'
                        placeholder='How can we help?'
                        name='personMessage'
                        id='personMessage'
                        // value={personMessage}
                        // onChange={onChange}
                        required
                      />
                    </div>
                  </div>

                  <div class='flex items-center justify-between'>
                    <button
                      type='submit'
                      class='inline-block rounded-sm bg-orange-500 w-full hover:bg-white hover:text-orange-500 px-5 py-3 text-sm font-medium text-white'
                    >
                      send message
                    </button>
                  </div>
                </form>
              </div>

              <div class=' px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 '>
                {/* address */}
                <div className='mx-auto max-w-lg'>
                  <div className='flex gap-3 items-baseline  mb-14'>
                    <div>
                      <IoLocationSharp size={20} color='white' />
                    </div>
                    <div>
                      <h3 className='text-2xl capitalize mb-4 text-orange-500 '>
                        address
                      </h3>
                      <p className=' text-white'>
                        Sidco Industrial Estate, TANSI, Krishnagiri <br /> Tamil
                        Nadu 635001
                      </p>
                    </div>
                  </div>

                  {/* item2 */}
                  <div className='flex  gap-3 items-baseline mb-14'>
                    <div>
                      <FaPhone size={20} color='white' />
                    </div>
                    <div>
                      <h3 className='text-2xl capitalize mb-4 text-orange-500'>
                        lets talk
                      </h3>
                      <a className='text-white'>8870022008/9445757500 </a>
                    </div>
                  </div>

                  {/* item3 */}
                  <div className='flex gap-3 items-baseline'>
                    <div>
                      <CiMail size={20} color='white' />
                    </div>
                    <div>
                      <h3 className='text-2xl capitalize mb-4 text-orange-500'>
                        support
                      </h3>
                      <a className='text-white'>gravityfitness007@gmail.com</a>
                    </div>
                  </div>
                </div>
                {/* end of address */}
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
