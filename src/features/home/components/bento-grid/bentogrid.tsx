import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { Badge } from '@/components/ui/badge';
import AnimatedUiBlock from './AnimatedUiBlock';
import ReminderAnimation from './ReminderAnimation';
import SecureSolutionsBeam from './secure-solutions-beam';
import SeoOrbitingCircles from './seo-orbitting-circle';

const Bentogrid = () => {
  return (
    <section
      id='features'
      className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
      <div className='py-11 md:py-20'>
        <div className='container flex flex-col gap-12 mx-auto'>
          <div className='flex flex-col items-center justify-center max-w-3xl gap-4 mx-auto'>
            <AfterBeforeWrapper className={'py-1'}>
              <Badge
                variant={'outline'}
                className='h-auto px-3 py-1 text-sm font-normal'>
                Our Services
              </Badge>
            </AfterBeforeWrapper>
            <AfterBeforeWrapper>
              <h2 className='mx-auto text-3xl font-medium text-center md:text-5xl'>
                Comprehensive IT Solutions Tailored to Your Business Needs
              </h2>
            </AfterBeforeWrapper>
          </div>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 overflow-hidden lg:col-span-4'>
              <div className='border rounded-xl border-border'>
                <div className='relative px-4 py-8 bg-muted rounded-t-xl'>
                  <ReminderAnimation />
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Digital Solutions & Media
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Driving global visibility with responsive design, optimized
                    content, and performance-based digital marketing solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-12 overflow-hidden lg:col-span-8'>
              <div className='border rounded-xl border-border'>
                <div className='relative px-6 bg-muted rounded-t-xl py-7 lg:px-30'>
                  <AnimatedUiBlock />
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Software Solutions
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Leanitech empowers businesses with powerful, future-ready
                    software solutions. Scale faster with secure,
                    high-performance systems built for global success. Drive
                    transformation with Leanitech’s cutting-edge software
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-span-12 overflow-hidden lg:col-span-4'>
              <div className='flex flex-col border rounded-xl border-border'>
                <div className='flex items-center justify-center flex-1 w-full h-full p-0 bg-muted rounded-t-xl'>
                  {/* <AppDevelopment /> */}
                  <div className='relative w-full h-full aspect-video lg:aspect-square'>
                    {/* <AndroidMockDevice
                      className='w-full h-full'
                      src='https://images.unsplash.com/photo-1730326405863-c6fa7e499a6e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    /> */}
                    {/* <video className="w-full h-auto" muted={true} loop={true}>
                      <source src="/showcase/hero.webm" type="video/webm">
                        <source src="/showcase/hero.mp4" type="video/mp4">
                        </video> */}
                    <video
                      className='w-full h-full'
                      muted={true}
                      loop={true}
                      autoPlay={true}
                      playsInline={true}>
                      <source src='/videos/hero.webm' type='video/webm' />
                    </video>
                  </div>
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    App solutions
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Crafting next-generation mobile applications for iOS and
                    Android with optimized performance, user-centric design, and
                    global scalability to drive engagement and growth.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-span-12 overflow-hidden lg:col-span-4'>
              <div className='flex flex-col border rounded-xl border-border'>
                <div className='flex items-center justify-center flex-1 p-0 bg-muted rounded-t-xl'>
                  <div
                    className={
                      'aspect-square sm:aspect-video lg:aspect-square w-full h-full'
                    }>
                    <SecureSolutionsBeam />
                  </div>
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Networking And Secure Solutions
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Strengthening business operations with secure network
                    architecture and cutting-edge cybersecurity solutions.
                    Providing robust IT networks and cybersecurity to protect
                    your business.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-span-12 lg:col-span-4'>
              <div className='flex flex-col border rounded-xl border-border'>
                <div className='relative flex items-center justify-center flex-1 w-full h-full p-0 bg-muted rounded-t-xl'>
                  <div
                    className={
                      'aspect-square sm:aspect-14/9 lg:aspect-square w-full h-full'
                    }>
                    <SeoOrbitingCircles />
                  </div>
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Seo and Performance optimized
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Optimize your website with high-performance components and
                    efficient global architecture. Enhance SEO rankings, speed,
                    and user experience across international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
