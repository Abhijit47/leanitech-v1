import SplashCursor from '@/components/backgrounds/animations/splash-cursor';
import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { siteMetadata } from '@/constants/seo';
import { LazyPortfolioCarousel } from '@/features/portfolios/lazy';
// import { portfolios } from '@/constants/portfolios';
// import PortfolioCard from '@/features/home/components/portfolios/portfolio-card';
// import PortfolioMotionWrapper from '@/features/home/components/portfolios/portfolio-motion-wrapper';
// import { PortfolioCarousel } from '@/features/portfolios/portfolio-carousel';
// import { getResoursesByFolder } from '@/lib/cloudinary';

const isDev = process.env.NODE_ENV === 'development';

export const metadata = siteMetadata('Portfolios');

export default function PortfoliosPage() {
  // Home > leaniech-v1 > portfolios = clodinary folder name
  // const result = await getResoursesByFolder('leanitech-v1/portfolios');
  // console.log('Cloudinary Resources:', JSON.stringify(result, null, 2));

  return (
    <main className='py-24 sm:py-28 md:py-32 lg:py-36 xl:py-36 space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 relative'>
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

      <section className={'max-w-(--breakpoint-md) mx-auto px-4 sm:px-6'}>
        <AfterBeforeWrapper>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
            Our Portfolios
          </h1>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-muted-foreground'>
            Explore our diverse range of portfolios showcasing our expertise and
            creativity in various industries. Each portfolio highlights our
            commitment to delivering exceptional results and innovative
            solutions for our clients.
          </p>
        </AfterBeforeWrapper>
      </section>

      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <AfterBeforeWrapper>
          <LazyPortfolioCarousel />
        </AfterBeforeWrapper>
      </section>

      <section className={'max-w-(--breakpoint-md) mx-auto px-4 sm:px-6'}>
        <AfterBeforeWrapper>
          <h2 className='text-2xl text-center font-bold mb-4'>
            Want to connect with us?
          </h2>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='text-lg text-center text-muted-foreground mb-8'>
            We are always open to new opportunities and collaborations. Whether
            you have a project in mind or just want to say hello, feel free to
            reach out to us. Let&apos;s create something amazing together!
          </p>
        </AfterBeforeWrapper>
      </section>
    </main>
  );
}
