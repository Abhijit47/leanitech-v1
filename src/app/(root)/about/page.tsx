import SplashCursor from '@/components/backgrounds/animations/splash-cursor';
import { CompanyLogos } from '@/components/extends/company-logos';
import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
// import { Badge } from '@/components/ui/badge';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
import { siteMetadata } from '@/constants/seo';
import AboutUsCTA from '@/features/about/components/about-us-cta';
// import AboutUsCTA from '@/features/about/components/about-us-cta';
import AboutUsSection from '@/features/about/components/about-us-section';
import OurTeam from '@/features/about/components/our-teams';
// import Image from 'next/image';
// import { ArrowUpRight } from 'lucide-react';
// import Image from 'next/image';

// const teamMembers = [
//   {
//     id: crypto.randomUUID(),
//     name: 'Darlene Robertson',
//     role: 'Co-Founder & CEO',
//     avatar: 'https://metafi-nextjs-template.vercel.app/images/team/1.webp',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Ralph Edwards',
//     role: 'Co-Founder & CTO',
//     avatar: 'https://metafi-nextjs-template.vercel.app/images/team/2.webp',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Dianne Russell',
//     role: 'Engineering',
//     avatar: 'https://metafi-nextjs-template.vercel.app/images/team/3.webp',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Albert Flores',
//     role: 'Engineering',
//     avatar: 'https://metafi-nextjs-template.vercel.app/images/team/4.webp',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Theresa Webb',
//     role: 'Human Resources',
//     avatar: 'https://metafi-nextjs-template.vercel.app/images/team/5.webp',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Robert Fox',
//     role: 'Growth',
//     avatar: 'https://metafi-nextjs-template.vercel.app/images/team/6.webp',
//   },
// ];

export const metadata = siteMetadata('About Us');

const isDev = process.env.NODE_ENV === 'development';

export default function AboutPage() {
  // const cardClasses = 'bg-transparent border-0 rounded-none shadow-none px-0';
  const sectionClasses: HTMLElement['className'] =
    'max-w-(--breakpoint-xl) w-full px-4 2xl:px-0 mx-auto';

  return (
    <main
      // className={'relative'}
      className={'relative pt-28 xs:pt-24 sm:pt-16 md:pt-12 lg:pt-8'}>
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
      <AboutUsSection />

      <section className={sectionClasses}>
        <AfterBeforeWrapper>
          <CompanyLogos />
        </AfterBeforeWrapper>
      </section>

      <section className={sectionClasses}>
        <OurTeam />
      </section>

      {/* <section className={sectionClasses}>
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
                      className='object-cover w-full h-full rounded-lg'
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
      </section> */}

      <section className={sectionClasses}>
        <AboutUsCTA />
      </section>
    </main>
  );
}
