import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

const navLinks = [
  { id: crypto.randomUUID(), name: 'Features', href: '#features' },
  { id: crypto.randomUUID(), name: 'Pricing', href: '#pricing' },
  { id: crypto.randomUUID(), name: 'FAQ', href: '#faq' },
  { id: crypto.randomUUID(), name: 'Testimonials', href: '#testimonials' },
];

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className='gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start'>
      {navLinks.map((link) => (
        <NavigationMenuItem key={link.id}>
          <NavigationMenuLink
            asChild
            className={cn(
              'h-fit p-0 rounded-none',
              'hover:bg-transparent!',
              'border-b-2 border-transparent hover:border-primary data-[active=true]:border-primary',
              // 'data-[active=true]:bg-transparent!',
              'focus:bg-transparent!',
              // add before pseudo element for active state
              'data-[active=true]:before:absolute data-[active=true]:bottom-0 data-[active=true]:left-0 data-[active=true]:h-1 data-[active=true]:w-full data-[active=true]:bg-primary',
            )}>
            <Link href={link.href} className=''>
              {link.name}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
