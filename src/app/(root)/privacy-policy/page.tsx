import { MDXContent } from '@content-collections/mdx/react';
import { allPrivacies } from 'content-collections';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { siteMetadata } from '@/constants/seo';
import { cn } from '@/lib/utils';

export const metadata = siteMetadata('Privacy Policy');

export default function PrivacyPolicyPage() {
  const privacyPolicy = allPrivacies[0];

  return (
    <main className={'pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-36'}>
      <section
        className={'max-w-(--breakpoint-lg) w-full px-4 2xl:px-0 mx-auto'}>
        <Card>
          <CardHeader>
            <h1 className={'text-3xl text-center'}>{privacyPolicy.title}</h1>
            <CardDescription
              className={'text-sm font-medium text-center underline'}>
              <div className={'flex items-center justify-center gap-2'}>
                <span
                  className={'size-2 rounded-full bg-green-600 animate-pulse'}
                />
                <p>
                  Last Updated At :{' '}
                  {new Intl.DateTimeFormat('en-IN', {
                    dateStyle: 'long',
                  }).format(new Date())}
                </p>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <article
              className={cn(
                'prose-sm prose md:prose-base lg:prose-lg dark:prose-invert max-w-none',
                // target first paragraph to be larger and bolder
                // 'prose-p:first-child:text-lg prose-p:first-child:font-medium',

                // target all hr and update the default margin to be smaller
                'prose-hr:my-4',

                'prose-h2:mb-2',
                'prose-h3:mt-2',

                'prose-p:first:text-center prose-p:first:pb-0',
              )}>
              <MDXContent code={privacyPolicy.mdx} />
            </article>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </main>
  );
}
