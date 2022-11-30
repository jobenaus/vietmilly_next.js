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
      className="px-2 bg-blue-300 sm:bg-opacity-0 fixed inset-0 z-50 border h-16 w-full flex items-center justify-between"
    >
      {({ open }) => (
        <>
          <Link href={navigation[0].href}>
            <Image src={LogoWithText} alt="LogoWithText" height={40} />
          </Link>
          <div></div>
          <Disclosure.Button className="sm:hidden">
            {open ? (
              <Image
                src={XMarkIcon}
                alt="Close main menu"
                height={60}
                className="translate-x-3 translate-y-1"
              />
            ) : (
              <Image src={Bars3Icon} alt="Open main menu" height={44} />
            )}
          </Disclosure.Button>
        </>
      )}
    </Disclosure>
  );
}
