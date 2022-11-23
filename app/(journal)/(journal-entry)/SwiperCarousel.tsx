'use client';

import { JournalImgModel } from '../../../models/JournalModel';
import Image from 'next/image';
import ReactHTMLParser from 'react-html-parser';
import { useRef } from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Swiper as SwiperType,
} from 'swiper';
import { EffectFlip } from 'swiper';

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

type SwiperCarouselProps = {
  journalImgs: JournalImgModel[];
};

export default function SwiperCarousel({ journalImgs }: SwiperCarouselProps) {
  return (
    <div className="aspect-[4/3] group">
      <Swiper>
        {journalImgs.map((journalImg) => {
          const imgPath = `/imgs/${journalImg.img}.jpeg`;
          return (
            <SwiperSlide key={journalImg.img}>
              <div className="flex justify-center items-center h-full bg-neutral-300">
                <Image
                  src={imgPath}
                  className="max-h-full max-w-full object-contain absolute"
                  alt={journalImg.img}
                  width={896}
                  height={672}
                  quality={75}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
