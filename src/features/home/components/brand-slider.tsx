'use client';

import Marquee from '@/components/extends/marquee';
import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { brandList } from '@/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider() {
  return (
    <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
      <div className='py-6 md:py-10'>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
          className='flex flex-col gap-3'>
          <div className='relative flex justify-center py-3 text-center md:py-4'>
            <AfterBeforeWrapper>
              <div className='flex items-center justify-center gap-4'>
                <div className='hidden md:block h-0.5 w-40 bg-linear-to-l from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20' />
                <p className='px-10 text-sm font-normal text-center sm:px-2 text-muted-foreground'>
                  Loved by big and small brands around the worlds
                </p>
                <div className='hidden md:block h-0.5 w-40 bg-linear-to-r from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20' />
              </div>
            </AfterBeforeWrapper>
          </div>
          <AfterBeforeWrapper className='w-full'>
            {brandList.length > 0 && (
              <div className='py-4'>
                <Marquee pauseOnHover className='[--duration:20s] p-0'>
                  {brandList.map((brand, index) => (
                    <div key={index}>
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        className='h-8 mr-6 w-36 lg:mr-20 dark:hidden'
                        width={144}
                        height={32}
                      />
                      <Image
                        src={brand.lightimg}
                        alt={brand.name}
                        className='hidden h-8 mr-12 dark:block w-36 lg:mr-20'
                        width={144}
                        height={32}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </AfterBeforeWrapper>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandSlider;
