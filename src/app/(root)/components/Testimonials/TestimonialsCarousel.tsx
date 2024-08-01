'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function TestimonialsCarousel() {
  const userReviews = [
    {
      name: "Alice Johnson",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userProfession: "Software Engineer",
      review: "Amazing experience! The travel agency took care of everything from start to finish. Highly recommend their services!"
    },
    {
      name: "Michael Brown",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userProfession: "Graphic Designer",
      review: "Great service and friendly staff. They planned a wonderful trip for my family. Will definitely use them again."
    },
    {
      name: "Emily Davis",
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userProfession: "Marketing Manager",
      review: "Good experience overall. The agency was helpful, but there were a few minor hiccups along the way. Still, a great trip!"
    },
    {
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userProfession: "Financial Analyst",
      review: "Exceptional service! The travel agency made our honeymoon unforgettable. Everything was perfectly organized."
    },
    {
      name: "Sophia Martinez",
      image: "https://m.media-amazon.com/images/M/MV5BMTQxOTU2ODM1OV5BMl5BanBnXkFtZTcwODUzMzExOA@@._V1_.jpg",
      userProfession: "Photographer",
      review: "Very satisfied with the trip arrangements. The team was professional and attentive to our needs. Would recommend."
    }
  ];

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
            slidesPerView: 2,
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
        modules={[Navigation, Autoplay]}
        className="bg-transparent"
      >
        {
          userReviews.map((review, i) => <SwiperSlide key={i} className='my-12'>
            <Box bgcolor='#fff' mx='1rem' p='2rem' position='relative' borderRadius='1rem' sx={{
              boxShadow: '.5rem .5rem #1ec28b',
              '&:hover': {
                background: 'linear-gradient(to top, #fff, #b1f3dd)'
              }
            }}>
              <Box sx={{
                width: '4rem',
                height: '3rem',
                bgcolor: '#fff',
                clipPath: 'polygon(100% 0, 0 0, 0 100%)',
                position: 'absolute',
                bottom: '-2.5rem',
                zIndex: '1'
              }} />
              <Box sx={{
                width: '4rem',
                height: '3rem',
                bgcolor: '#1ec28b',
                clipPath: 'polygon(100% 0, 0 0, 0 100%)',
                position: 'absolute',
                bottom: '-3rem',
              }} />
              <Image
                alt='user image'
                src={review.image}
                width={100}
                height={100}
                className='size-20 rounded-full absolute -top-10 right-5 shadow-xl'
              />
              <Stack direction='column'>
                <Typography variant='h5' fontWeight='bold' color='text.primary'>{review.name}</Typography>
                <Typography>{review.userProfession}</Typography>
              </Stack>
              <Typography mt='1rem' textAlign='justify'>{review.review}</Typography>
            </Box>
          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};
