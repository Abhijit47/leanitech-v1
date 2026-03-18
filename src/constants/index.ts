import { BrandList } from '@/components/shadcn-space/blocks/hero-01/brand-slider';
import { NavigationSection } from '@/components/shadcn-space/blocks/hero-01/header';
import { AvatarList } from '@/components/shadcn-space/blocks/hero-01/hero';

export const navigations: NavigationSection[] = [
  {
    title: 'Home',
    href: '/',
    isActive: true,
  },
  {
    title: 'About us',
    href: '/about',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'Portfolio',
    href: '#portfolio',
  },
  {
    title: 'Faqs',
    href: '#faqs',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export const avatarList: AvatarList[] = [
  {
    image: 'https://images.shadcnspace.com/assets/profiles/user-1.jpg',
  },
  {
    image: 'https://images.shadcnspace.com/assets/profiles/user-2.jpg',
  },
  {
    image: 'https://images.shadcnspace.com/assets/profiles/user-3.jpg',
  },
  {
    image: 'https://images.shadcnspace.com/assets/profiles/user-5.jpg',
  },
];

export const brandList: BrandList[] = [
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg',
    lightimg:
      'https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-1.svg',
    name: 'Brand 1',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg',
    lightimg:
      'https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-2.svg',
    name: 'Brand 2',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg',
    lightimg:
      'https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-3.svg',
    name: 'Brand 3',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg',
    lightimg:
      'https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-4.svg',
    name: 'Brand 4',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg:
      'https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-5.svg',
    name: 'Brand 5',
  },
];
