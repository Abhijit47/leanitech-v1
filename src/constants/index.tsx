// import { BrandList } from '@/components/brand-slider';
// import { AvatarList } from '@/components/hero';
// import { NavigationSection } from '@/components/shadcn-space/blocks/hero-01/header';

import { NavigationSection } from '@/components/shared/navbar/header';
import { BrandList } from '@/features/home/components/brand-slider';
import { AvatarList } from '@/features/home/components/hero';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

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
    href: '/services',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'Portfolios',
    href: '/portfolios',
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
    href: '/contact',
  },
];

export const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
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
    image: '/company-logos/bread-light.svg',
    lightimg: '/company-logos/bread-dark.svg',
    name: 'Brand 1',
  },
  {
    image: '/company-logos/chase-light.svg',
    lightimg: '/company-logos/chase-dark.svg',
    name: 'Brand 2',
  },
  {
    image: '/company-logos/lydia-light.svg',
    lightimg: '/company-logos/lydia-dark.svg',
    name: 'Brand 3',
  },
  {
    image: '/company-logos/the-guardian-new-light.svg',
    lightimg: '/company-logos/the-guardian-new-dark.svg',
    name: 'Brand 4',
  },
  {
    image: '/company-logos/the-seattle-times-light.svg',
    lightimg: '/company-logos/the-seattle-times-dark.svg',
    name: 'Brand 5',
  },
  {
    image: '/company-logos/trustpilot-light.svg',
    lightimg: '/company-logos/trustpilot-dark.svg',
    name: 'Brand 6',
  },
];

export const testimonials = [
  {
    name: 'Sunrisers Event Planners',
    username: 'event planners',
    text: 'Working with Leanitech was a game-changer for Sunrisers Event Planners. Their team delivered a visually stunning and highly responsive website that perfectly reflects our brand. The user experience has significantly improved our client engagement and inquiries.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Ascent Wealth',
    username: 'ascentwealth',
    text: 'The team did an exceptional job building our website, Ascent Wealth. For a financial services brand, clarity and credibility are everything — and they’ve managed to bring both together seamlessly. The website is clean, structured, and communicates our offerings with precision while still feeling premium. It truly reflects the way we work with our clients.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Sunrisers Digital Hub ',
    username: 'sunrisersdigital',
    text: 'Leanitech delivered exactly what we needed – a scalable and secure website tailored to our business goals. We highly recommend their web development services for any growing company.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Branding and Solutions',
    username: 'branding_solutions',
    text: 'Innovative, strategic, and visually stunning—these branding solutions helped us establish a strong and consistent brand identity.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Finnoaq',
    username: 'finnoaq',
    text: 'The website development exceeded our expectations, delivering a secure and high-performance platform that aligns perfectly with FinnoAQ’s fintech vision.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'iqbox ',
    username: 'iqbox',
    text: 'Working with Leanitech on our Australian project was a seamless experience. From branding to website development, every detail was executed with precision. The final outcome is clean, professional, and aligned with global standards.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'RotateKey',
    username: 'rotatekey',
    text: 'We partnered with Leanitech for our website development, and the results exceeded expectations. The platform is fast, scalable, and designed with precision. Their technical knowledge and commitment to quality truly stand out.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Onism Himachal',
    username: 'onism himachal',
    text: 'A well-structured and SEO-optimized website that helps us reach more travelers. The overall development process was smooth and highly professional.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'AMD Groups',
    username: 'amd groups',
    text: 'From initial planning to final delivery, the process was smooth and efficient. The website reflects innovation, reliability, and strong technical expertise.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'WalkNoodles',
    username: 'walknoodles',
    text: 'Delivering innovative branding, logo design, and high-performance website development to build a strong and scalable business identity',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  // {
  //   name: '',
  //   username: 'john_doe',
  //   text: '',
  //   avatar: '',
  // },
];

export const socialLinks = [
  {
    id: crypto.randomUUID(),
    title: 'Facebook',
    href: 'https://www.facebook.com/leanitechsolutions',
    icon: <IconBrandFacebook className={'size-4 md:size-6'} />,
  },
  {
    id: crypto.randomUUID(),
    title: 'Instagram',
    href: 'https://www.instagram.com/leanitech/',
    icon: <IconBrandInstagram className={'size-4 md:size-6'} />,
  },
  {
    id: crypto.randomUUID(),
    title: 'Linkedin',
    href: 'https://www.linkedin.com/company/leanitech',
    icon: <IconBrandLinkedin className={'size-4 md:size-6'} />,
  },
];

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Resources', href: '#' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-and-conditions' },
  { label: 'Contact Us', href: '/contact' },
];
