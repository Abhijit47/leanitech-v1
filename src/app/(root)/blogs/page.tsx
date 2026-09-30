import SplashCursor from '@/components/backgrounds/animations/splash-cursor';
import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
// import BackgroundPaths from '@/components/backgrounds/background-path';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { siteMetadata } from '@/constants/seo';
import { Icon } from '@iconify/react';
import { allPosts } from 'content-collections';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = siteMetadata('Blogs');

const isDev = process.env.NODE_ENV === 'development';

export default function BlogsPage() {
  // const count = 50; // Adjust the number of meteors as needed

  const posts = allPosts;

  return (
    <main
      className={
        'relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-36 space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16'
      }>
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

      <section
        className={'max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 space-y-2'}>
        <AfterBeforeWrapper>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
            ✍️ INSIGHTS & UPDATES
          </h1>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-muted-foreground'>
            Stay ahead in the digital world with expert insights from Leanitech.
            Our blog covers the latest trends in technology, website
            development, mobile apps, AI, SaaS solutions, digital marketing, and
            SEO to help businesses grow smarter and faster.
          </p>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-muted-foreground'>
            We share practical tips, industry updates, and in-depth guides
            designed to improve your online presence, search engine rankings,
            and digital strategy. Whether you&apos;re a startup, entrepreneur,
            or enterprise, our content helps you make informed decisions and
            stay competitive.
          </p>
        </AfterBeforeWrapper>
      </section>

      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 2xl:px-0'}>
        <AfterBeforeWrapper>
          <div
            className={
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6'
            }>
            {posts.map((post) => (
              <Card key={post._meta.filePath} className={'mb-4'}>
                <CardContent>
                  <div className={'aspect-video w-full h-full'}>
                    <Image
                      src={post.cover}
                      alt={post.coverAlt}
                      width={600}
                      height={400}
                      className={'w-full h-full rounded-md object-cover'}
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>

                <CardContent className={'space-y-4'}>
                  <div className={'space-x-2'}>
                    {post.categories.map((category) => (
                      <Badge key={crypto.randomUUID()}>{category}</Badge>
                    ))}
                  </div>
                  <div className={'flex items-center gap-2'}>
                    <div className={''}>
                      <Image
                        src={post.avatar}
                        alt={`${post.author}'s avatar`}
                        width={40}
                        height={40}
                        className={'rounded-full'}
                      />
                    </div>
                    <div>
                      <p className={'font-semibold'}>By {post.author}</p>
                      <p className={'text-sm inline-flex items-center gap-1'}>
                        <Icon
                          icon='mdi:clock-time-four-outline'
                          className={'size-4'}
                        />
                        {post.readTime} min read
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className={'justify-between'}>
                  <p className={'text-xs flex flex-col'}>
                    <span>Last modified on</span>
                    <span>
                      {new Date(post.lastModified).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className={'inline-flex items-center gap-1 text-primary'}>
                    Know more
                    <Icon icon='mdi:arrow-right' className={'size-4'} />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </AfterBeforeWrapper>
      </section>
    </main>
  );
}
