'use client';

import { AnimatedThemeToggler } from '@/components/extends/animated-theme-toggler';
import { Logo } from '@/components/shared/logo';
import { navigations } from '@/constants';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CollaborateButton from '../collaborate-button';
import { LazyMobileMenu } from './header';

export default function HeaderNew() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  // remove #features and #faqs if not on home page
  const filteredNavigations = navigations.filter((nav) => {
    if (!isHomePage) {
      return nav.href !== '#features' && nav.href !== '#faqs';
    }
    return true;
  });

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-100 border-b border-black/5 dark:border-white/10'
      }>
      <div className={'bg-white dark:bg-gray-950'}>
        <div
          className={
            'flex h-14 items-center justify-between gap-8 px-4 sm:px-6'
          }>
          <nav className={'flex items-center justify-between gap-4 w-full'}>
            <div>
              <Link href='/'>
                {/* <Logo className='gap-3' /> */}
                <Logo className={'w-auto h-6'} />
              </Link>
            </div>

            <ul className={'hidden xl:flex items-center gap-4'}>
              {filteredNavigations.map((item) => {
                const isActive = item.href === pathname;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href as Route}
                      className={`text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 ${
                        isActive
                          ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100'
                          : ''
                      }`}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className='flex items-center gap-4'>
              <AnimatedThemeToggler className='hidden xl:flex' />
              <CollaborateButton className='hidden xl:flex'>
                Let&apos;s Collaborate
              </CollaborateButton>

              <div className='flex items-center xl:hidden'>
                <LazyMobileMenu />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
