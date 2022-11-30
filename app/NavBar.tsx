'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import MagnifyingGlassIcon from '../assets/icons/MagnifyingGlassIcon.svg';

export default function NavBar() {
  const navigation = [
    { name: 'icon', href: '/', current: true },
    { name: 'NEUSTE', href: '/latest', current: false },
    { name: 'BLOG', href: '/blog', current: false },
    { name: 'TAGEBUCH', href: '/diary', current: false },
    { name: 'ÜBER UNS', href: '/about', current: false },
    // { name: 'Dev', href: '/dev', current: false },
  ];

  return <div className="absolute z-50 border w-full h-16">NavBar</div>;
}
