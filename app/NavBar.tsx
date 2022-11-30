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
    <div className="absolute z-50 border w-full">
      <Disclosure>
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclosure.Button>
              {!open ? (
                <Image src={Bars3Icon} alt="open menu" />
              ) : (
                <Image src={XMarkIcon} alt="close menu" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel>No</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
