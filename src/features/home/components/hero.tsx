'use client';

import SplashCursor from '@/components/backgrounds/animations/splash-cursor';
import { AnimatedTooltip } from '@/components/extends/animated-tooltip';
import { TypingAnimation } from '@/components/extends/typing-animation';
import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { buttonVariants } from '@/components/ui/button';
import { people } from '@/constants';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
});

export type AvatarList = {
  image: string;
};

const isDev = process.env.NODE_ENV === 'development';

function HeroSection() {
  return (
    <section
      id='home'
      className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
      <div className='relative w-full h-full'>
        {!isDev && (
          <div className='absolute inset-0 pointer-events-none -z-1'>
            <SplashCursor
              SIM_RESOLUTION={128}
              DYE_RESOLUTION={1440}
              DENSITY_DISSIPATION={3.5}
              VELOCITY_DISSIPATION={2}
              PRESSURE={0.1}
              CURL={3}
              SPLAT_RADIUS={0.2}
              SPLAT_FORCE={6000}
              COLOR_UPDATE_SPEED={10}
            />
          </div>
        )}
        <div className='relative w-full pt-0 pb-6 md:pt-20 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
          <div className='container relative z-10 mx-auto'>
            <div className='flex flex-col max-w-5xl gap-8 mx-auto'>
              <div className='relative flex flex-col items-center gap-4 text-center md:gap-6'>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className='text-3xl font-medium leading-tight sm:text-4xl md:text-6xl lg:text-8xl sm:leading-8 md:leading-12 lg:leading-24 xl:leading-28 text-wrap'>
                  <AfterBeforeWrapper>
                    Turning ideas into scalable
                  </AfterBeforeWrapper>{' '}
                  <AfterBeforeWrapper className='pb-2'>
                    <TypingAnimation
                      as='span'
                      className={`${instrumentSerif.className} leading-8 sm:leading-12 md:leading-20 tracking-tight block md:inline`}
                      words={[
                        'digital solutions.',
                        'web applications.',
                        'software products.',
                        'digital success.',
                      ]}
                      loop
                    />
                  </AfterBeforeWrapper>
                  {/* <span
                    className={`${instrumentSerif.className} tracking-tight`}>
                    digital success
                  </span> */}
                </motion.h1>
                <AfterBeforeWrapper>
                  <motion.blockquote
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.05, ease: 'easeInOut' }}
                    className='max-w-4xl pl-6 text-base italic font-normal text-muted-foreground'>
                    {/* <blockquote className='pl-6 mt-6 italic border-l-2'>
                    &quot;After all,&quot; he said, &quot;everyone enjoys a good
                    joke, so it&apos;s only fair that they should pay for the
                    privilege.&quot;
                  </blockquote> */}

                    <p>
                      &quot;At Leanitech, we empower startups and enterprises to
                      solve complex business challenges through innovative
                      software, modern web development, and data-driven digital
                      strategies
                    </p>
                    <cite>
                      &mdash;guiding you from idea to impactful success.&quot;
                    </cite>
                  </motion.blockquote>
                </AfterBeforeWrapper>
                {/* <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
                  className='max-w-2xl text-base font-normal text-muted-foreground'>
                  At Leanitech, we empower startups and enterprises to solve
                  complex business challenges through innovative software,
                  modern web development, and data-driven digital
                  strategies—guiding you from idea to impactful success.
                </motion.p> */}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
                className='flex flex-col items-center justify-center gap-12'>
                <AfterBeforeWrapper>
                  <Link
                    href={'#contact'}
                    className={cn(
                      // 'relative h-12 p-1 overflow-hidden text-sm font-medium transition-all duration-500 rounded-full ps-6 pe-14 group hover:ps-14 hover:pe-6 w-fit',
                      buttonVariants({
                        variant: 'default',
                        size: 'lg',
                        className:
                          'relative h-12 p-1 overflow-hidden text-sm font-medium transition-all duration-500 rounded-full ps-6 pe-14 group hover:ps-14 hover:pe-6 w-fit',
                      }),
                    )}>
                    <span className='relative z-10 transition-all duration-500'>
                      Get Started
                    </span>
                    <span className='absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45'>
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </AfterBeforeWrapper>
                <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-7'>
                  {/* <ul className='flex flex-row items-center avatar'>
                    {avatarList.map((avatar, index) => (
                      <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                        <Image
                          src={avatar.image}
                          alt='Avatar'
                          width={40}
                          height={40}
                          className='border-2 border-white rounded-full'
                        />
                      </li>
                    ))}
                  </ul> */}
                  <AfterBeforeWrapper>
                    <div className='flex flex-row items-center justify-center w-full py-2'>
                      <AnimatedTooltip items={people} />
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                      <AfterBeforeWrapper>
                        <div className='flex gap-1'>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                              key={index}
                              src='https://images.shadcnspace.com/assets/svgs/icon-star.svg'
                              alt='star'
                              className='w-4 h-4'
                              width={16}
                              height={16}
                            />
                          ))}
                        </div>
                      </AfterBeforeWrapper>

                      <AfterBeforeWrapper>
                        <p className='text-xs font-normal sm:text-sm text-muted-foreground'>
                          Trusted by 1000+ clients
                        </p>
                      </AfterBeforeWrapper>
                    </div>
                  </AfterBeforeWrapper>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
