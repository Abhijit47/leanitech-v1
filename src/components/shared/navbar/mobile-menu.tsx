// import Logo from '@/assets/logo/logo';
import { AnimatedThemeToggler } from '@/components/extends/animated-theme-toggler';
import CollaborateButton from '@/components/shared/collaborate-button';
import { Logo } from '@/components/shared/logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navigations, socialLinks } from '@/constants';
import { cn } from '@/lib/utils';
// import { Icon } from '@iconify/react';
import { MenuIcon, XCircle } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
// import AfterBeforeWrapper from '../after-before-wrapper';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    // setMounted(true);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // remove #features and #faqs if not on home page
  const filteredNavigations = navigations.filter((nav) => {
    if (!isHomePage) {
      return nav.href !== '#features' && nav.href !== '#faqs';
    }
    return true;
  });

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger id='mobile-menu-trigger'>
        <span className='rounded-full border border-border p-2 block'>
          <MenuIcon className={'size-4 md:size-6'} />
          {/* <Icon icon='solar:hamburger-menu-linear' width={20} height={20} /> */}
          <span className='sr-only'>Menu</span>
        </span>
      </SheetTrigger>

      <SheetContent
        showCloseButton={false}
        side='right'
        className='w-full sm:w-96 p-0 border-l-0'>
        <div className='flex items-center justify-between p-4'>
          <Link href='/' onClick={() => setIsOpen(false)}>
            {/* <Logo className='gap-2' /> */}
            <Logo className={'w-auto h-6'} />
          </Link>
          <SheetClose id='mobile-menu-close'>
            <span className='rounded-full border border-border p-2 block'>
              <XCircle className={'size-4 md:size-6'} />
            </span>
          </SheetClose>
        </div>

        <div className='flex flex-col gap-12 px-4 pb-6 overflow-y-auto mt-6'>
          <div className='flex flex-col gap-8 relative'>
            <SheetTitle className='sr-only'>Menu</SheetTitle>
            <SheetDescription className='sr-only'>
              Main navigation links
            </SheetDescription>
            <div className={'fixed top-17 right-5'}>
              <AnimatedThemeToggler />
            </div>
            <NavigationMenu
              orientation='vertical'
              className='items-start flex-none'>
              <NavigationMenuList className='flex flex-col items-start gap-3'>
                {filteredNavigations.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      active={pathname === item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent',
                        item.href === pathname
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:translate-x-2',
                      )}>
                      <div
                        className={cn(
                          'h-0.5 bg-primary transition-all duration-300 overflow-hidden',
                          item.href === pathname
                            ? 'w-4 mr-2 opacity-100'
                            : 'w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100',
                        )}
                      />
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className={'isolate'}>
              {/* <AfterBeforeWrapper
              // className={'before:w-[140vw] after:w-[140vw]'}
              > */}
              <div className='w-fit'>
                <CollaborateButton>Let&apos;s Collaborate</CollaborateButton>
              </div>
              {/* </AfterBeforeWrapper> */}
            </div>
          </div>

          <div className='mt-auto flex flex-col gap-4'>
            {/* <AfterBeforeWrapper
            // className={
            //   'before:w-[150vw] after:w-[150vw] md:before:w-[140vw] md:after:w-[140vw]'
            // }
            > */}
            <div className='flex gap-3'>
              {socialLinks.map((icon) => (
                <Link
                  key={icon.id}
                  onClick={() => setIsOpen(false)}
                  href={icon.href as Route}
                  target='_blank'
                  className='flex items-center justify-center rounded-full outline outline-border hover:bg-muted transition p-3 shadow-xs'>
                  {icon.icon}
                </Link>
              ))}
            </div>
            {/* </AfterBeforeWrapper> */}

            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} Leanitech. All Rights Reserved.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
