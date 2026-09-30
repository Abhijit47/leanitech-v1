import SplashCursor from '@/components/backgrounds/animations/splash-cursor';
import WorldMap from '@/components/extends/global-nextwork-map';
import { siteMetadata } from '@/constants/seo';
import { ContactBlock } from '@/features/contact/components/contact';
// import ContactUs1 from '@/features/contact/components/contact-us';

const isDev = process.env.NODE_ENV === 'development';

export const metadata = siteMetadata('Contact Us');

export default function ContactUs() {
  return (
    <main className='py-24 sm:py-28 md:py-32 lg:py-36 xl:py-36 space-y-8 md:space-y-12 lg:space-y-16 relative'>
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
      <ContactBlock />

      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='font-bold text-xl md:text-4xl dark:text-white text-black'>
            Global Connections, Local Impact
          </p>
          <p className='text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4'>
            Connect with teams and clients worldwide. Our platform enables
            seamless collaboration across continents, bringing the world to your
            workspace.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: 'Fairbanks',
              },
              end: {
                lat: 34.0522,
                lng: -118.2437,
                label: 'Los Angeles',
              },
            },
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: 'Fairbanks',
              },
              end: {
                lat: -15.7975,
                lng: -47.8919,
                label: 'Brasília',
              },
            },
            {
              start: {
                lat: -15.7975,
                lng: -47.8919,
                label: 'Brasília',
              },
              end: {
                lat: 38.7223,
                lng: -9.1393,
                label: 'Lisbon',
              },
            },
            {
              start: {
                lat: 51.5074,
                lng: -0.1278,
                label: 'London',
              },
              end: {
                lat: 28.6139,
                lng: 77.209,
                label: 'New Delhi',
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: 'New Delhi',
              },
              end: {
                lat: 43.1332,
                lng: 131.9113,
                label: 'Vladivostok',
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: 'New Delhi',
              },
              end: {
                lat: -1.2921,
                lng: 36.8219,
                label: 'Nairobi',
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: 'New Delhi',
              },
              end: {
                lat: -43.8688,
                lng: 145.2093,
                label: 'Australia',
              },
            },
          ]}
        />
      </section>

      {/* <ContactUs1 /> */}
    </main>
  );
}
