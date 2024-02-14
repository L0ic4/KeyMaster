import Image from 'next/image';
import React from 'react';
import shield from '../../public/shield.png';

const About = () => {
  return (
    <>
      <section className='bg-white dark:bg-gray-900'>
        <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
              Payments tool for software companies
            </h1>
            <p className='mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400'>
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href='#'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4'
            >
              Get started
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
            <a
              href='#'
              className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              Speak to Sales
            </a>
          </div>
          <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
            <Image width={640} height={640} src={shield} alt='mockup' />
          </div>
        </div>
      </section>
      <section className='body-font text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
              Master Cleanse Reliac Heirloom
            </h1>
            <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              havent heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className='-m-4 flex flex-wrap text-center'>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-200 px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='mb-3 inline-block h-12 w-12 text-indigo-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className='title-font text-3xl font-medium text-gray-900'>
                  2.7K
                </h2>
                <p className='leading-relaxed'>Downloads</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-200 px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='mb-3 inline-block h-12 w-12 text-indigo-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
                </svg>
                <h2 className='title-font text-3xl font-medium text-gray-900'>
                  1.3K
                </h2>
                <p className='leading-relaxed'>Users</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-200 px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='mb-3 inline-block h-12 w-12 text-indigo-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M3 18v-6a9 9 0 0118 0v6'></path>
                  <path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'></path>
                </svg>
                <h2 className='title-font text-3xl font-medium text-gray-900'>
                  74
                </h2>
                <p className='leading-relaxed'>Files</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-200 px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='mb-3 inline-block h-12 w-12 text-indigo-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
                <h2 className='title-font text-3xl font-medium text-gray-900'>
                  46
                </h2>
                <p className='leading-relaxed'>Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='flex min-h-screen flex-col items-center justify-center bg-[#E5E5E5]'>
        <div className='rounded-xl bg-[#F4F5FA] p-10'>
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='max-w-sm font-sans font-bold'>
              Get the most out of your mobile with the right subscription
            </div>
            <div className='mt-5 max-w-lg text-sm font-light'>
              All devices come with free delivery or pickup as standard. See
              information on available shopping options for your location.
            </div>
          </div>

          <div className='mt-10 flex flex-col items-center justify-center space-x-0  space-y-12 md:flex-row md:space-x-8 md:space-y-0'>
            <div className='rounded-xl bg-[#FFFBEC]'>
              <div className='flex w-96 translate-x-4 translate-y-4 flex-col rounded-xl bg-white p-8 shadow-xl md:w-auto'>
                <Image
                  alt='test'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535'
                  className='w-8'
                />
                <div className='mt-3 text-lg font-semibold'>
                  Ice Mobile 10GB
                </div>
                <div className='text-sm font-light'>Up to 100Mbit/s</div>
                <div className='my-4'>
                  <span className='text-base font-bold'>299,-</span>
                  <span className='text-sm font-light'>/month</span>
                </div>

                <button className='mt-4 rounded-full border border-[#F0F0F6]  bg-[#F4F5FA] px-4 py-3 shadow-xl'>
                  Add subscription
                </button>
              </div>
            </div>

            <div className='rounded-xl bg-[#F9ECFF]'>
              <div className='flex w-96 translate-x-4 translate-y-4 flex-col rounded-xl bg-white p-8 shadow-xl md:w-auto'>
                <Image
                  alt=' test3'
                  src='https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp'
                  className='w-12'
                />
                <div className='mt-3 text-lg font-semibold'>
                  Telia Mobil 15GB
                </div>
                <div className='w-60 text-sm font-light md:w-auto'>
                  Unlimited calls
                </div>
                <div className='my-4'>
                  <span className='text-base font-bold'>953,-</span>
                  <span className='text-sm font-light'>/month</span>
                </div>

                <button className='mt-4 rounded-full border border-[#F0F0F6]  bg-[#F4F5FA] px-4 py-3 shadow-xl'>
                  Add subscription
                </button>
              </div>
            </div>

            <div className='rounded-xl bg-[#ECEEFF]'>
              <div className='flex w-96 translate-x-4 translate-y-4 flex-col rounded-xl bg-white p-8 shadow-xl md:w-auto'>
                <Image
                  alt=' test2'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png'
                  className='w-12'
                />
                <div className='mt-3 text-lg font-semibold'>
                  Telenor Next Fast
                </div>
                <div className='w-60 text-sm font-light md:w-auto'>
                  Up to 100Mbit/s
                </div>
                <div className='my-4'>
                  <span className='text-base font-bold'>1028,-</span>
                  <span className='text-sm font-light'>/month</span>
                </div>

                <button className='mt-4 rounded-full border border-[#F0F0F6]  bg-[#F4F5FA] px-4 py-3 shadow-xl'>
                  Add subscription
                </button>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <button className='mt-12 rounded-full bg-slate-900 px-4 py-3 text-white'>
              See all subscriptions
            </button>
          </div>
        </div>
      </div>

      <footer className='m-4 rounded-lg bg-white shadow dark:bg-gray-900'>
        <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a
              href='https://flowbite.com/'
              className='mb-4 flex items-center sm:mb-0'
            >
              <Image
                src='https://flowbite.com/docs/images/logo.svg'
                className='mr-3 h-8'
                alt='Flowbite Logo'
              />
              <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
                Flowbite
              </span>
            </a>
            <ul className='mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6 '>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6 '>
                  Licensing
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700' />
          <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{' '}
            <a href='https://flowbite.com/' className='hover:underline'>
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default About;
