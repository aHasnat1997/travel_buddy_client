'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import TripCard from '@/components/Ui/TripCard';
import { Box, IconButton, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TCardProps } from '@/types';

export default function Carousel({ tripsData }: { tripsData: TCardProps[] }) {
  return (
    <>
      <Stack justifyContent='space-between' alignItems='center'>
        <Box position='absolute' zIndex='2' left='0'>
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
        <Box position='absolute' zIndex='2' right='0'>
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
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
        }}
        pagination={true}
        navigation={{
          prevEl: '#prev',
          nextEl: '#next',
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="bg-transparent"
      >
        {
          tripsData.map((trip, i) => <SwiperSlide key={i} className='my-12'>
            <Box mx='1rem'>
              <TripCard cardProps={trip} />
            </Box>
          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};
