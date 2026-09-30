import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const faqItems = [
  {
    id: 'item-1',
    question:
      'What software development services does Leanitech offer globally?',
    answer:
      'Leanitech provides custom software development, mobile app development, web solutions, and enterprise software services tailored for businesses worldwide, ensuring scalability, security, and high performance.',
  },
  {
    id: 'item-2',
    question:
      'Do you provide international software solutions for all industries?',
    answer:
      'Yes, Leanitech delivers industry-specific digital solutions for startups, SMEs, and enterprises across global markets, helping businesses streamline operations and achieve digital transformation.',
  },
  {
    id: 'item-3',
    question: 'How does Leanitech ensure software scalability and performance?',
    answer:
      'We use modern technologies, optimized architecture, and cloud-based solutions to build scalable, high-performance systems that grow with your business needs globally.',
  },
  {
    id: 'item-4',
    question: 'Can Leanitech develop mobile apps for international users?',
    answer:
      'Absolutely, we create iOS and Android mobile applications optimized for global audiences, ensuring seamless user experience, performance, and cross-platform compatibility.',
  },
  {
    id: 'item-5',
    question: 'How do your solutions improve SEO and website performance?',
    answer:
      'Our development approach focuses on fast-loading, SEO-friendly architecture, optimized code, and responsive design to improve global search rankings and user engagement.',
  },
  {
    id: 'item-6',
    question: 'Does Leanitech provide ongoing support and maintenance?',
    answer:
      'Yes, we offer continuous support, updates, and maintenance services to ensure your software remains secure, efficient, and up-to-date across international markets.',
  },
  {
    id: 'item-7',
    question:
      'What makes Leanitech different from other global software companies?',
    answer:
      'Leanitech combines innovation, strategy, and technology to deliver customized, scalable, and result-driven digital solutions that align with global business goals.',
  },
  {
    id: 'item-8',
    question: 'How can I get started with Leanitech services?',
    answer:
      'You can contact our team to discuss your project requirements, and we will provide tailored solutions to help you achieve your digital growth objectives worldwide.',
  },
];

export default function FAQsTwo() {
  return (
    <section
      id='faqs'
      className='py-16 md:py-24 max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'>
      <div className='max-w-xl mx-auto text-center'>
        <AfterBeforeWrapper className='py-1'>
          <h2 className='text-3xl font-bold text-balance md:text-4xl lg:text-5xl'>
            Frequently Asked Questions
          </h2>
        </AfterBeforeWrapper>

        <AfterBeforeWrapper>
          <p className='mt-4 text-muted-foreground text-balance'>
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </AfterBeforeWrapper>
      </div>

      <div className='mt-12'>
        <Accordion
          type='single'
          collapsible
          className='w-full px-4 py-3 border shadow-sm ring-muted ring-4 dark:ring-0'>
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className='border-dashed'>
              <AccordionTrigger className='text-base cursor-pointer hover:no-underline'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className={'px-4'}>
                <p className='text-sm'>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <AfterBeforeWrapper>
          <p className='px-4 mt-6 text-muted-foreground'>
            Can&apos;t find what you&apos;re looking for? Contact our{' '}
            <Link
              href='#contact'
              className='font-medium text-primary hover:underline'>
              customer support team
            </Link>
          </p>
        </AfterBeforeWrapper>
      </div>
    </section>
  );
}
