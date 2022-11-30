'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Disclosure } from '@headlessui/react';

import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '../styles/icons';
import { LogoWithText } from '../styles/logos';

import { FuzzyBubbles } from '../styles/fonts';

import { classNames } from '../utils/tailwind';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';

export default function NavBar() {
  const navigation = [
    { name: 'icon', href: '/', current: true },
    { name: 'NEUSTE', href: '/latest', current: false },
    { name: 'BLOG', href: '/blog', current: false },
    { name: 'TAGEBUCH', href: '/diary', current: false },
    { name: 'ÜBER UNS', href: '/about', current: false },
    // { name: 'Dev', href: '/dev', current: false },
  ];

  return (
    <Disclosure
      as="nav"
      className="bg-blue-300 sm:bg-opacity-0 absolute z-50 border h-16 w-full flex justify-between items-center"
    >
      {({ open }) => (
        <>
          <div></div>
          <Disclosure.Button as="div" className="mr-4 sm:hidden">
            {open ? (
              <Image src={XMarkIcon} alt="Close main menu" />
            ) : (
              <Image src={Bars3Icon} alt="Open main menu" />
            )}
          </Disclosure.Button>
        </>
      )}
    </Disclosure>
  );
}
