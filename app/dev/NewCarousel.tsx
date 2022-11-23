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

import React, { useRef } from 'react';
import { JournalImgModel } from '../../models/JournalModel';
import Image from 'next/image';

type SwiperCarouselProps = {
  journalImgs: JournalImgModel[];
};

export default function NewCarousel({ journalImgs }: SwiperCarouselProps) {
  return (
    <>
      <Swiper>
        {journalImgs.map((journalImg) => {
          const imgPath = `/imgs/${journalImg.img}.jpeg`;
          return (
            <SwiperSlide key={imgPath}>
              <Image src={imgPath} alt={imgPath} width={200} height={200} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
