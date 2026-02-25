import CTABanner from '@/components/cta-banner';
import FAQ from '@/components/faq';
import Features from '@/components/features';
// import Hero from '@/components/hero';
// import Pricing from '@/components/pricing';
import AboutAndStats01 from '@/components/shadcn-space/blocks/about-us-01';
import Bentogrid from '@/components/shadcn-space/blocks/bento-grid-01/bentogrid';
import CTA from '@/components/shadcn-space/blocks/cta-01/cta';
import Faq2 from '@/components/shadcn-space/blocks/faq-01/faq';
import Feature01 from '@/components/shadcn-space/blocks/feature-01';
import AgencyHeroSection from '@/components/shadcn-space/blocks/hero-01';
import Newsletter from '@/components/shadcn-space/blocks/newsletter-01/newsletter';
import Portfolio from '@/components/shadcn-space/blocks/portfolio-01/portfolio';
import Services from '@/components/shadcn-space/blocks/services-01/services';
// import Services2 from '@/components/shadcn-space/blocks/services-02/services';
// import Team from '@/components/shadcn-space/blocks/team-01/team';

import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <main className='pt-16 xs:pt-20 sm:pt-24'>
      <AgencyHeroSection />
      {/* <Hero /> */}
      <AboutAndStats01 />
      <Features />
      <Feature01 />
      <Bentogrid />
      <Services />
      {/* <Services2 /> */}
      {/* <Pricing /> */}
      <Portfolio />
      {/* <Team /> */}
      <FAQ />
      <Faq2 />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <CTA />
    </main>
  );
}
