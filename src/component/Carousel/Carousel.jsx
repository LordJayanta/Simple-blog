import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Carousel = ({
  data = [
    { path: '/', img: './img/img-1.jpg' },
    { path: '/', img: './img/img-2.jpg' },
    { path: '/', img: './img/img-3.jpg' },
    { path: '/', img: './img/img-4.jpg' },
    { path: '/', img: './img/img-5.jpg' },
    { path: '/', img: './img/img-6.jpg' },
  ]
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}            // Enable infinite loop
      autoplay={{
        delay: 3000,         // Autoplay speed
        disableOnInteraction: false,
      }}
    >
      {data.map((item) => (
        <SwiperSlide className={`h-[70vh] bg-cover`} style={{ backgroundImage: `url(${item.img})` }}></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
