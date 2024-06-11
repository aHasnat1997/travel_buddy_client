'use client';

import React, { useState } from 'react';
import { Swiper as SwiperClass, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { Box, IconButton, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const GalleryCarousel = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <Box sx={{
      position: 'relative'
    }}>
      <Stack justifyContent='space-between' alignItems='center'>
        <Box position='absolute' zIndex='2' left='0' top='30%'>
          <IconButton id='prev' color='secondary' sx={{
            color: '#fff',
            bgcolor: 'primary.main',
            padding: '1rem',
            '&:hover': {
              bgcolor: 'secondary.main'
            }
          }}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box position='absolute' zIndex='2' right='0' top='30%'>
          <IconButton id='next' color='secondary' sx={{
            color: '#fff',
            bgcolor: 'primary.main',
            padding: '1rem',
            '&:hover': {
              bgcolor: 'secondary.main'
            }
          }}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Stack>
      <SwiperClass
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        loop={true}
        spaceBetween={10}
        navigation={{
          prevEl: '#prev',
          nextEl: '#next',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='h-80 w-full mb-4'
      >
        {
          images?.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </SwiperSlide>
          ))
        }
      </SwiperClass>
      <SwiperClass
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='h-24 w-full'
      >
        {
          images?.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </SwiperSlide>
          ))
        }
      </SwiperClass>
    </Box>
  );
};

export default GalleryCarousel;
