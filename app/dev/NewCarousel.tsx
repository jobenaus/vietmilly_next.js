'use client';

// import Swiper core and required modules
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

import { JournalImgModel } from '../../models/JournalModel';
import Image from 'next/image';

type SwiperCarouselProps = {
  journalImgs: JournalImgModel[];
};

export default function NewCarousel({ journalImgs }: SwiperCarouselProps) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full"
      >
        {journalImgs.map((journalImg) => {
          const imgPath = `/imgs/${journalImg.img}.jpeg`;
          return (
            <SwiperSlide key={imgPath} className="border">
              <Image
                src={imgPath}
                alt={imgPath}
                fill
                className="object-contain"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
