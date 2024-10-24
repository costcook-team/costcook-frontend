import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './carousel.css';
import CarouselCard from './CarouselCard';

const Carousel = () => {
  const arr = [
    { id: 1, title: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { id: 2, title: 'https://swiperjs.com/demos/images/nature-2.jpg' },
    { id: 3, title: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { id: 4, title: 'https://swiperjs.com/demos/images/nature-4.jpg' },
    { id: 5, title: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { id: 6, title: 'https://swiperjs.com/demos/images/nature-2.jpg' },
    { id: 7, title: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { id: 8, title: 'https://swiperjs.com/demos/images/nature-4.jpg' },
  ];

  return (
    <Swiper
      loop
      slidesPerView={5}
      centeredSlides={true}
      spaceBetween={40}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {arr.map((data, index) => (
        <SwiperSlide key={data.id}>
          {({ isActive, isPrev, isNext }) => (
            <CarouselCard
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
              data={data}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;