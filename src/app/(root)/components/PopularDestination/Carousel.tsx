'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import TripCard from '@/components/Ui/TripCard';

type TCardProps = {
  title: string;
  image: string;
  price: number;
  destination: string;
  places: string;
  duration: string;
};
export default function Carousel({ tripsData }: { tripsData: TCardProps[] }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
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
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="bg-transparent"
      >
        {
          tripsData.map((trip, i) => <SwiperSlide key={i} className='my-12'>
            <TripCard cardProps={trip} />
          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};
