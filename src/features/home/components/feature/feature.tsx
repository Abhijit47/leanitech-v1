import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

type Features = {
  icon: LucideIcon;
  content: string;
}[];

const Feature = ({ featureData }: { featureData: Features }) => {
  return (
    <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
      <div className='flex flex-col gap-8 md:gap-12'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className='flex flex-col items-center justify-center gap-4 md:flex-row md:items-end md:justify-between'>
          <div className='flex flex-col items-center max-w-full gap-4 text-center md:items-start md:text-left md:max-w-xl'>
            <AfterBeforeWrapper className='py-1'>
              <Badge
                variant={'outline'}
                className='h-auto px-3 py-1 text-sm font-normal'>
                Features
              </Badge>
            </AfterBeforeWrapper>
            <AfterBeforeWrapper>
              <h2 className='text-3xl font-semibold md:text-4xl'>
                Innovating Digital Growth with Smart ERP & SaaS Solutions
              </h2>
            </AfterBeforeWrapper>
            <AfterBeforeWrapper className='pb-1'>
              <p className='text-lg font-normal text-muted-foreground'>
                At RotateKey by Leanitech, we empower businesses with
                cutting-edge ERP systems, SaaS platforms, and custom software
                development to streamline operations, enhance productivity, and
                accelerate digital transformation.
              </p>
            </AfterBeforeWrapper>
          </div>

          <Link
            className={cn(
              buttonVariants({
                size: 'sm',
              }),
              'rounded-full px-5 py-2.5 shadow-xs h-auto',
            )}
            href='#contact'>
            Transform Your Business Today
          </Link>
        </motion.div>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 md:gap-6'>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="p-6 sm:p-16 rounded-2xl bg-[url('https://images.shadcnspace.com/assets/feature/feature-01-img.webp')] object-cover bg-center h-full w-full bg-cover bg-no-repeat">
            <Card className='flex items-start gap-12 py-6 border-none rounded-lg shadow-none sm:py-10 ring-0 backdrop-blur-sm bg-background/50'>
              <CardContent className='flex flex-col gap-6 px-6 sm:px-8'>
                <Avatar className='size-12'>
                  <AvatarFallback>
                    <Image
                      src='/features/user-1.jpg'
                      className='rounded-full'
                      alt='avatar'
                      width={48}
                      height={48}
                    />
                  </AvatarFallback>
                </Avatar>
                <h3 className='text-xl font-medium sm:text-2xl'>
                  “Before implementing RotateKey’s ERP solutions by Leanitech,
                  managing operations was complex and time-consuming. Now, our
                  workflows are fully automated, and we deliver faster, more
                  efficient results with ease.”
                </h3>
              </CardContent>
              <CardFooter className='w-full px-6 sm:px-8 flex flex-col items-start gap-0.5'>
                <p className='text-sm font-medium text-primary'>Rajesh Kumar</p>
                <span className='text-xs font-normal uppercase text-muted-foreground'>
                  CEO, RotateKey Inc.
                </span>
              </CardFooter>
            </Card>
          </motion.div>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6'>
            {featureData?.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}>
                  <div className='relative w-full h-full overflow-hidden rounded-xl'>
                    <div
                      className='absolute z-0 rounded-lg inset-1'
                      style={{
                        backgroundImage:
                          'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--border) 2px, var(--border) 4px)',
                        opacity: 0.5, // Adjust this value (0.0 to 1.0) to change opacity
                      }}
                    />
                    <Card className='z-10 w-full h-full bg-transparent border-2 isolate border-border'>
                      <CardHeader className={'w-fit'}>
                        <div className={'p-4 bg-background rounded-full'}>
                          <value.icon
                            className='w-6 h-6 text-muted-foreground'
                            strokeWidth={1.5}
                          />
                        </div>
                        {/* <CardTitle>
                          <value.icon
                            className='w-6 h-6 text-muted-foreground'
                            strokeWidth={1.5}
                          />
                        </CardTitle> */}
                      </CardHeader>
                      <CardContent className={'mt-auto'}>
                        <p className='text-base font-normal text-primary'>
                          {value?.content}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* <Card className='h-full border-0 bg-muted ring-0'>
                    <CardContent className='flex flex-col items-start justify-between w-full h-full gap-4 px-8'>
                      <div className={'p-4 bg-background rounded-full'}>
                        <value.icon
                          className='w-6 h-6 text-muted-foreground'
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className='text-base font-normal text-primary'>
                        {value?.content}
                      </p>
                    </CardContent>
                  </Card> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
