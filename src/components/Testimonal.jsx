import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Avatar from '../components/Avatar';
import ranjit from '../images/profile/IMG_20211221_180808_560(1).jpg';
import jhon from '../images/john-fornander-TAZoUmDqzXk-unsplash.jpg';
import samBg from '../images/aaron-brogden-2q14ySG6Qxc-unsplash.jpg';

const testimonalPlay = [
  {
    reviewText: `Simply the best. Better than all the rest. I’d recommend this gym to beginners and advanced users`,
    avatarPic: ranjit,
    avatarName: 'Ranjit',
    text: 'our client',
  },
  {
    reviewText:
      'Best place to learn workout and decipline to build ur body....in this Gravity Fitness we hv Trainer who motivate us to build our body in natural way and also he hv gud knowledge in protein foods.',
    avatarPic: jhon,
    avatarName: 'varun',
    text: 'our client',
  },
  {
    reviewText:
      'Gravity fitness center.The state-of-the-art equipment, knowledgeable Trainers, and vibrant atmosphere make it a top choice for fitness enthuasiasts.The diverse range of classes and personalize ',
    avatarPic: samBg,
    avatarName: 'Vijay',
    text: 'our client',
  },
];

const Testimonal = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div id='testimonal' className='mt-16'>
      <h1 className='text-6xl text-center capitalize mb-16 font-semibold'>
        Reviews
      </h1>
      {/* hero */}
      <div
        className='hero min-h-screen '
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1679792756270-c90bb6f34868?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <div className='hero-overlay bg-opacity-50'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='lg:max-w-2xl max-w-sm'>
            <div className='embla' ref={emblaRef}>
              <div className='embla__container'>
                {testimonalPlay.map((item) => (
                  <div className='embla__slide '>
                    <div className=' items-center text-center font-primary'>
                      <p className='text-3xl mb-3 font-semibold italic text-orange-600'>
                        {item.reviewText}
                      </p>
                      <Avatar image={item.avatarPic} />
                      <h1 className='uppercase font-semibold  text-2xl tracking-[.5rem]'>
                        {item.avatarName}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero */}
      {/* <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {testimonalPlay.map((item) => (
            <div className='embla__slide '>
              <div className='max-w-md items-center text-center font-primary'>
                <p className='mb-3'>{item.reviewText}</p>
                <Avatar image={item.avatarPic} />
                <h1 className='uppercase font-semibold'>{item.avatarName}</h1>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Testimonal;
