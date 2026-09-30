'use client';

import { AnimatedThemeToggler } from '@/components/extends/animated-theme-toggler';
import CollaborateButton from '@/components/shared/collaborate-button';
import { Logo } from '@/components/shared/logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navigations } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import { Route } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
// import { LeftSidePattern, RightSidePattern } from '../side-patterns';

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type HeaderProps = {
  // navigationData: NavigationSection[];
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const [sticky, setSticky] = useState(false);

  const pathname = usePathname();

  const isMobile = useIsMobile();

  const isHomePage = pathname === '/';
  // const isAboutPage = pathname === '/about';
  // const isBlogPage = pathname === '/blogs';
  // const isPortfolioPage = pathname === '/portfolios';
  // const isContactPage = pathname === '/contact';

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // remove #features and #faqs if not on home page
  const filteredNavigations = navigations.filter((nav) => {
    if (!isHomePage) {
      return nav.href !== '#features' && nav.href !== '#faqs';
    }
    return true;
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className={cn(
        // 'z-50 sticky h-16',
        'z-50 fixed inset-x-0 h-16',
        isMobile ? '-top-14' : 'top-0',
        sticky ? 'mt-4 transition-all duration-300' : '',
        // !sticky ? 'top-0' : '-top-52 md:top-4 transition-all duration-300',
        // 'inset-x-0',
        // 'flex items-center justify-center',
        // 'mx-auto',
        'lg:mx-0',
        'md:-mr-4',
        'md:-ml-4',

        'grid grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] [--gutter-width:2.5rem] md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] justify-center',
        className,
      )}>
      {!sticky ? <div></div> : <div></div>}
      {/* {!sticky ? <LeftSidePattern /> : <div></div>} */}
      {/* {!sticky ? <LeftSidePattern /> : !isMobile ? <LeftSidePattern /> : null} */}

      <nav
        className={cn(
          'max-w-(--breakpoint-xl) w-full mx-auto px-2 flex items-center h-16 justify-between gap-3.5 lg:gap-6 transition-all duration-500',
          sticky
            ? 'p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full'
            : 'bg-transparent border-transparent',
        )}>
        {/* Logo */}
        <div
          className={cn(
            'ml-0',
            'rounded-tl-xl rounded-bl-xl',
            // 'relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]',

            // change the direction to left and right from top and bottom
            // 'relative before:absolute before:left-0 before:w-px before:h-28 before:bg-gray-950/5 dark:before:bg-white/55 before:-top-24 after:absolute after:right-0 after:w-px after:h-16 after:bg-gray-950/5 dark:after:bg-white/55 after:-top-24',
          )}>
          <Link href='/'>
            {/* <Logo className='gap-3' /> */}
            <Logo className={'w-auto h-6'} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className='max-xl:hidden bg-muted p-0.5 rounded-full'>
            <NavigationMenuList className='flex gap-0'>
              {filteredNavigations.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    active={
                      // pathname === navItem.href ||
                      // (isHomePage && navItem.href === '/') ||
                      // (isAboutPage && navItem.href === '/about') ||
                      // (isBlogPage && navItem.href === '/blogs') ||
                      // (isPortfolioPage && navItem.href === '/portfolios')
                      pathname === navItem.href
                    }
                    asChild
                    className={cn(
                      'px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal',
                      // navItem.isActive ? 'bg-background text-foreground' : '',
                      pathname === navItem.href
                        ? 'bg-background text-foreground'
                        : '',
                      // pathname === '/' ||
                      //   pathname === '/about' ||
                      //   pathname === '/blogs' ||
                      //   pathname === '/portfolios'
                      //   ? 'bg-background text-foreground'
                      //   : '',
                    )}>
                    <Link href={navItem.href as Route}>{navItem.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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
      {!sticky ? <div></div> : <div></div>}
      {/* {!sticky ? <RightSidePattern /> : <div></div>} */}
    </motion.header>
  );
};

export default Header;

export const LazyMobileMenu = dynamic(() => import('./mobile-menu'), {
  ssr: false,
  loading: () => (
    <span className='block p-2 border rounded-full opacity-0 border-border'>
      <Icon icon='solar:hamburger-menu-linear' width={20} height={20} />
    </span>
  ),
});
