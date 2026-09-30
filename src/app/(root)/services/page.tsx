import SplashCursor from '@/components/backgrounds/animations/splash-cursor';
import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { siteMetadata } from '@/constants/seo';
import ServicesTab from '@/features/services/components/services-tab';

const isDev = process.env.NODE_ENV === 'development';

export const metadata = siteMetadata('Our Expertise');

export default function ServicePage() {
  return (
    <main className='py-24 sm:py-28 md:py-32 lg:py-36 xl:py-36 space-y-8'>
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
            ⚡ DISCOVER OUR EXPERTISE
          </h1>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-muted-foreground'>
            At Leanitech, we offer a wide range of cutting-edge digital
            solutions designed to help businesses innovate, grow, and stay ahead
            in a competitive market. Our services combine technology,
            creativity, and strategy to deliver impactful results.
          </p>
        </AfterBeforeWrapper>
      </section>

      <ServicesTab />
    </main>
  );
}
