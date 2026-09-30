'use client';

import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'leanitech@gmail.com',
    href: 'mailto:leanitech@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8870238256',
    href: 'tel:+918870238256',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6382240928',
    href: 'tel:+916382240928',
  },
  {
    icon: MapPin,
    label: 'Location',
    value:
      '11th cross road, West of Chord Road, 2nd Stage, Nagapura, Bengaluru, Karnataka, IN - 560086',
    href: 'https://maps.app.goo.gl/ozhPfHmNXgcPsY2y7',
  },
];

export function ContactBlock() {
  return (
    <section
      id='contact'
      className='max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 w-full lg:py-16'>
      {/* <div className='w-full'> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='mb-8 text-center sm:mb-12 md:mb-16'>
        <AfterBeforeWrapper>
          <h2 className='mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl'>
            Get In Touch
          </h2>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='max-w-2xl px-4 mx-auto text-base text-muted-foreground sm:text-lg'>
            Have a project in mind? Let&apos;s discuss how we can work together
          </p>
        </AfterBeforeWrapper>
      </motion.div>

      <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className='relative p-6 overflow-hidden border rounded-xl border-border/40 bg-background/60 backdrop-blur-sm sm:p-8'>
            <div className='absolute inset-0 opacity-50 bg-linear-to-br from-primary/5 via-transparent to-transparent' />
            <form className='relative z-10 space-y-6'>
              <div className='grid gap-6 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <Label htmlFor='name' className='text-sm font-medium'>
                    First Name
                  </Label>
                  <Input
                    id='firstName'
                    placeholder='ex. John'
                    className='transition-colors bg-background/50 focus:bg-background'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='name' className='text-sm font-medium'>
                    Last Name
                  </Label>
                  <Input
                    id='lastName'
                    placeholder='ex. Doe'
                    className='transition-colors bg-background/50 focus:bg-background'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='phone' className='text-sm font-medium'>
                    Phone Number
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='+1 (555) 123-4567'
                    className='transition-colors bg-background/50 focus:bg-background'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email' className='text-sm font-medium'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='your.email@example.com'
                    className='transition-colors bg-background/50 focus:bg-background'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='subject' className='text-sm font-medium'>
                  Subject
                </Label>
                <Input
                  id='subject'
                  placeholder='How can I help you?'
                  className='transition-colors bg-background/50 focus:bg-background'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message' className='text-sm font-medium'>
                  Message
                </Label>
                <Textarea
                  id='message'
                  placeholder='Tell me about your project...'
                  rows={5}
                  className='transition-colors resize-none bg-background/50 focus:bg-background'
                />
              </div>

              <Button type='submit' className='w-full gap-2 text-base'>
                Send Message
                <Send className='w-4 h-4' />
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <div className='space-y-6 lg:space-y-8'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1'>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}>
                <Card className='relative p-4 overflow-hidden transition-all duration-300 border group rounded-xl border-border/40 bg-background/60 hover:border-foreground/20 hover:shadow-md hover:-translate-y-1 backdrop-blur-sm sm:p-6'>
                  <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-linear-to-br from-primary/5 via-transparent to-transparent group-hover:opacity-100' />
                  <Link
                    href={info.href as Route}
                    target={'_blank'}
                    rel='noopener noreferrer'
                    className='relative z-10 flex items-center gap-4'>
                    <div className='flex items-center justify-center w-12 h-12 transition-colors rounded-lg shrink-0 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'>
                      <info.icon className='w-5 h-5' />
                    </div>
                    <div>
                      <h3 className='mb-1 font-semibold text-foreground'>
                        {info.label}
                      </h3>
                      <p className='text-sm transition-colors text-muted-foreground group-hover:text-foreground/80'>
                        {info.value}
                      </p>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}>
              <Card className='p-6 border rounded-xl border-border/40 bg-background/60 backdrop-blur-sm sm:p-8'>
                <h3 className='mb-4 text-xl font-semibold text-foreground'>
                  Working Hours
                </h3>
                <div className='space-y-3 text-sm text-muted-foreground sm:text-base'>
                  <div className='flex justify-between pb-2 border-b border-border/40'>
                    <span>Monday - Friday</span>
                    <span className='font-medium text-foreground'>
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className='flex justify-between pb-2 border-b border-border/40'>
                    <span>Saturday</span>
                    <span className='font-medium text-foreground'>
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className='flex justify-between pt-1'>
                    <span>Sunday</span>
                    <span className='font-medium text-foreground'>Closed</span>
                  </div>
                </div>
              </Card>
            </motion.div> */}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
