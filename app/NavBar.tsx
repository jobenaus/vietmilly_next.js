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
  const logoHref = '/';

  const navigation = [
    { name: 'NEUSTE', href: '/latest', current: false },
    { name: 'BLOG', href: '/blog', current: false },
    { name: 'TAGEBUCH', href: '/diary', current: false },
    { name: 'ÜBER UNS', href: '/about', current: false },
    // { name: 'Dev', href: '/dev', current: false },
  ];

  return (
    <Disclosure
      as="nav"
      className="px-4 bg-blue-300 sm:bg-opacity-0 fixed inset-0 z-50 h-min border"
    >
      {({ open, close }) => (
        <>
          <div className="flex items-center justify-between h-16 w-full">
            <Link onClick={() => close()} href={logoHref} className="shrink-0">
              <Image src={LogoWithText} alt="LogoWithText" height={40} />
            </Link>
            <div className="basis-[28%]"></div>
            <div className="hidden sm:flex justify-between basis-[627px] shrink-[0.4]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(FuzzyBubbles.className, 'text-base')}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="basis-[28%]"></div>

            <div className="flex gap-1 shrink-0">
              <Image
                src={MagnifyingGlassIcon}
                alt="Search"
                height={44}
                className="ui-open:hidden sm:block"
              />
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
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden space-y-3 pt-4 pb-6 px-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as={Link}
                href={item.href}
                className={classNames(FuzzyBubbles.className, 'text-lg block')}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
