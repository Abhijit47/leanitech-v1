import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { TestimonialMarquee } from '@/components/shared/testimonial-marquee';
import { testimonials } from '@/constants';

export default function Testimonials() {
  return (
    <section id='testimonials' className={'space-y-12'}>
      <div className='max-w-2xl mx-auto text-center'>
        <AfterBeforeWrapper className='py-1'>
          <h2 className='text-3xl font-bold text-balance md:text-4xl lg:text-5xl'>
            Wall of Love
          </h2>
        </AfterBeforeWrapper>

        <AfterBeforeWrapper>
          <p className='mt-4 text-muted-foreground text-balance'>
            Discover how Leanitech transforms digital presence and accelerates
            growth. Our clients&apos; success stories showcase exceptional
            results and lasting partnerships.
          </p>
        </AfterBeforeWrapper>
      </div>
      <div className='relative w-full overflow-hidden mb-16'>
        <TestimonialMarquee items={testimonials} variant='stacked' />
      </div>
    </section>
  );
}
