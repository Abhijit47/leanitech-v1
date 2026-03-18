// import { BackgroundBeams } from '@/components/backgrounds/background-beams';
import { BackgroundBeamsWithCollision } from '@/components/backgrounds/background-beams-collision';
import LogoCloud1 from '@/components/logo-cloud-1';
import CTA from '@/components/shadcn-space/blocks/cta-01/cta';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
// import ConstellationBackground from '@/components/backgrounds/background-constellation';

const teamMembers = [
  {
    id: crypto.randomUUID(),
    name: 'Darlene Robertson',
    role: 'Co-Founder & CEO',
    avatar: 'https://metafi-nextjs-template.vercel.app/images/team/1.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Ralph Edwards',
    role: 'Co-Founder & CTO',
    avatar: 'https://metafi-nextjs-template.vercel.app/images/team/2.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Dianne Russell',
    role: 'Engineering',
    avatar: 'https://metafi-nextjs-template.vercel.app/images/team/3.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Albert Flores',
    role: 'Engineering',
    avatar: 'https://metafi-nextjs-template.vercel.app/images/team/4.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Theresa Webb',
    role: 'Human Resources',
    avatar: 'https://metafi-nextjs-template.vercel.app/images/team/5.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Robert Fox',
    role: 'Growth',
    avatar: 'https://metafi-nextjs-template.vercel.app/images/team/6.webp',
  },
];

export default function AboutPage() {
  const cardClasses = 'bg-transparent border-0 rounded-none shadow-none px-0';
  const sectionClasses: HTMLElement['className'] =
    'max-w-(--breakpoint-xl) w-full px-4 2xl:px-0 mx-auto';

  return (
    <main className={'relative'}>
      <BackgroundBeamsWithCollision>
        {/* <div className='pointer-events-none' /> */}
        <section className={sectionClasses}>
          <Card className={cardClasses}>
            <CardHeader>
              <Badge>About Us</Badge>
              <CardTitle>Get to Know Metafi</CardTitle>
              <CardDescription>
                <p>
                  Gateway to discovering the essence of our company and the
                  comprehensive suite of financial solutions we offer.
                </p>
              </CardDescription>
            </CardHeader>

            <CardContent className={'space-y-6'}>
              <Button
                className={cn(
                  'relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden',
                  'className',
                )}>
                <span className='relative z-10 transition-all duration-500'>
                  Get Open Position
                </span>
                <span className='absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45'>
                  <ArrowUpRight size={16} />
                </span>
              </Button>
              <div>
                <Image
                  src={
                    'https://metafi-nextjs-template.vercel.app/images/about/hero.webp'
                  }
                  alt='about hero image'
                  width={4000}
                  height={1348}
                  className='w-full h-full rounded-lg object-cover'
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className={sectionClasses}>
          <Card
            className={cn(
              'grid grid-cols-1 lg:grid-cols-2 gap-4',
              cardClasses,
            )}>
            <Card className={'px-0 w-full h-full grid content-center'}>
              <CardContent className={'space-y-6'}>
                <Badge>Leanitech Through The Years</Badge>
                <h2>The Number to Back It Up</h2>
                <p>
                  Encapsulates our journey of growth, innovation, and unwavering
                  dedication to our customers. Over the years, Metafi has
                  evolved into a leading provider of financial solutions,
                  constantly adapting to meet the ever-changing needs of
                  businesses worldwide. Our success is not just measured in
                  years but in the tangible impact we&apos;ve made, backed by
                  concrete data and statistics that validate our journey.
                </p>

                <p>
                  With a proven track record of delivering results, Metafi
                  stands as a testament to our commitment to excellence and
                  continuous improvement. Our growth trajectory is marked by
                  milestones, each supported by solid numbers that underscore
                  our achievements and validate our position as a trusted
                  partner in the financial industry.
                </p>

                <div className={'grid grid-cols-3 gap-4'}>
                  <Card className={'p-4 aspect-video w-full justify-center'}>
                    <CardHeader>
                      <CardTitle>2023</CardTitle>
                      <CardDescription>
                        <p>Launched</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className={'p-4 aspect-video w-full justify-center'}>
                    <CardHeader>
                      <CardTitle>1500+</CardTitle>
                      <CardDescription>
                        <p>Team Members</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className={'p-4 aspect-video w-full justify-center'}>
                    <CardHeader>
                      <CardTitle>131M</CardTitle>
                      <CardDescription>
                        <p>Pre-seed Round</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card className={'py-4'}>
              <CardContent className={'relative'}>
                <Image
                  src={
                    'https://metafi-nextjs-template.vercel.app/images/about/years.webp'
                  }
                  alt='about years image'
                  width={1960}
                  height={2093}
                  className='rounded-lg object-cover'
                />
              </CardContent>
            </Card>
          </Card>
        </section>
      </BackgroundBeamsWithCollision>

      <section className={sectionClasses}>
        <Card className={cardClasses}>
          <CardHeader>
            <Badge>Our Team</Badge>
            <CardTitle>It’s All About The People</CardTitle>
            <CardDescription>
              <p>
                Hendrerit fames metus leo ut orci pretium. Sit vitae montes
                egestas montes mauris. Auctor vitae neque urna nam nunc
                pellentesque.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={'grid grid-cols-3 gap-6'}>
              {teamMembers.map((member) => (
                <Card key={member.id} className={'px-0 w-full h-full'}>
                  <CardContent>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={400}
                      height={400}
                      className='rounded-lg object-cover w-full h-full'
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>
                      <p>{member.role}</p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className={cn('p-0 w-full h-full', cardClasses)}>
          <CardContent>
            <LogoCloud1 />
          </CardContent>
        </Card>
      </section>

      <section>
        <CTA />
      </section>

      {/* <div className='relative h-screen w-full overflow-hidden bg-neutral-950'>
        <BackgroundBeams />
      </div> */}
      {/* <section className={'h-dvh w-full'}>Hero</section>
      <section className={'h-dvh w-full'}>Hero</section>
      <section className={'h-dvh w-full'}>Hero</section> */}
    </main>
  );
}
