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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import React, { useRef } from 'react';
import ChevronIcon from './ChevronRight';

export default function Dev() {
  const slides = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
  ];

  const Carousel = () => {
    const swiperRef = useRef<SwiperType>();

    return (
      <div className="relative m-10 border">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          rewind={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide}>
              <div className="h-72 border flex justify-center items-center bg-indigo-500">
                {slide}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ChevronLeftIcon
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 h-20 text-white opacity-25"
        >
          Prev
        </ChevronLeftIcon>
        <ChevronRightIcon
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-1 -translate-y-1/2 z-10 w-8"
        >
          Next
        </ChevronRightIcon>
      </div>
    );
  };

  return (
    <>
      <Carousel />
      <Carousel />
    </>
  );
}
