import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';
import logo from '../images/Free_Sample_By_Wix.jpg';

const navigation = [
  {
    name: 'About',
    href: 'about',
    current: true,
  },

  {
    name: 'Pricing',
    href: 'pricing',
    current: false,
  },
  {
    name: 'Reviews',
    href: 'testimonal',
    current: false,
  },
  {
    name: 'Programs',
    href: 'programs',
    current: false,
  },

  {
    name: 'Contact',
    href: 'contact',
    current: false,
  },
  {
    name: 'Location',
    href: 'location',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const Navbar = () => {
  return (
    <>
      <Disclosure as='nav' className='font-primary  bg-base-50 relative'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='relative inline-flex items-center justify-center  p-2 text-gray-400   focus:outline-none focus:ring-2  focus:ring-white'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className='block h-6 w-6 border-none'
                        aria-hidden='true'
                      />
                    ) : (
                      <Bars3Icon
                        className='block h-6 w-6 '
                        aria-hidden='true'
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-1 items-center  sm:items-stretch sm:justify-start'>
                  <div className='flex flex-shrink-0 items-center'>
                    <h1 className=' font-semibold capitalize'>
                      <Link
                        className='text-orange-600 italic bg-transparent cursor-pointer'
                        to='hero'
                      >
                        <img width={70} src={logo} alt='' />
                      </Link>
                    </h1>
                  </div>
                  <div className='hidden sm:ml-6 sm:block'></div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <>
                          <div className='dropdown  dropdown-hover  lg:dropdown-end'>
                            <Link
                              smooth={true}
                              duration={1000}
                              offset={-50}
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current ? ' text-black' : 'text-black ',
                                'rounded-md px-3 hover:text-orange-600 py-2 text-sm font-medium cursor-pointer'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <label tabIndex={0}>{item.name}</label>
                            </Link>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current ? ' text-black' : 'text-black',
                      'block rounded-md px-3 hover:text-orange-600 py-2 text-base font-medium cursor-pointer'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <Link to={item.href}>{item.name}</Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
