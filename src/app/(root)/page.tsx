import CTA from '@/components/shared/cta';
import { siteMetadata } from '@/constants/seo';
import { ContactBlock } from '@/features/contact/components/contact';
import AboutAndStats01 from '@/features/home/components/about-us';
import Bentogrid from '@/features/home/components/bento-grid/bentogrid';
import BrandSlider from '@/features/home/components/brand-slider';
// import FAQ from '@/features/home/components/faq';
import Faq2 from '@/features/home/components/faq/faq';
import Feature01 from '@/features/home/components/feature';
// import Features from '@/features/home/components/features';
import HeroSection from '@/features/home/components/hero';
import Portfolios from '@/features/home/components/portfolios/portfolio';
import TechStacks from '@/features/home/components/tech-stacks';
import Testimonials from '@/features/home/components/testimonials';
// import Services from '@/features/home/components/services/services';
// import Testimonials from '@/features/home/components/testimonials';

export const metadata = siteMetadata('Home');

export default function Home() {
  return (
    <main
      // className='pt-16 xs:pt-20 sm:pt-16 md:pt-12 lg:pt-8'
      className={'pt-28 xs:pt-24 sm:pt-16 md:pt-12 lg:pt-8'}>
      <HeroSection />
      <BrandSlider />
      <AboutAndStats01 />
      {/* <Services /> */}
      <Feature01 />
      <Bentogrid />
      <Portfolios />
      {/* <Features /> */}
      {/* <FAQ /> */}
      <TechStacks />
      <Faq2 />
      {/* <div className='relative w-full overflow-hidden bg-background/50 mb-16'>
        <TestimonialMarquee items={items} />
      </div>
      <div className='relative w-full overflow-hidden bg-background/50 mb-16'>
        <TestimonialMarquee items={items} variant='dual' />
      </div> */}

      <Testimonials />

      {/* <div className='relative w-full overflow-hidden bg-background/50 mb-16'>
        <TestimonialMarquee items={items} variant='flush' />
      </div>
      <div className='relative w-full overflow-hidden bg-background/50 mb-16'>
        <TestimonialMarquee items={items} variant='flush-dual' />
      </div> */}
      {/* <Testimonials /> */}
      <CTA />
      <ContactBlock />
    </main>
  );
}
