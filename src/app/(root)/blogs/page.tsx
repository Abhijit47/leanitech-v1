import BackgroundMeteors from '@/components/backgrounds/background-meteors';
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

export default function BlogsPage() {
  const count = 50; // Adjust the number of meteors as needed

  const posts = allPosts;

  return (
    <main className={'relative'}>
      <BackgroundMeteors count={count} key={count} />

      <section className={'max-w-(--breakpoint-xl) mx-auto px-4'}>
        <div className={'grid grid-cols-3 gap-6'}>
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
      </section>
    </main>
  );
}
