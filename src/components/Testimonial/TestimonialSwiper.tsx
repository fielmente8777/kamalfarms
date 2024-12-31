"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

interface TestimonialCard {
  data?: {
    icon: React.ReactNode;
    text: string;
    name: string;
  }[];
}
const TestimonialSwiper: React.FC<TestimonialCard> = ({ data }) => {
  return (
    <div className="banner">
      <Swiper
        speed={1000}
        autoplay={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Autoplay, Pagination]}
        pagination={{
          el: ".banner-pagination1",
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map((testimonial, index) => (
          <SwiperSlide key={index} className="w-full h-full  bg-bgclr">
            <TestimonialCard key={index} {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`flex items-center justify-center gap-1 mt-5 banner-pagination1`}
      />
    </div>
  );
};

export default TestimonialSwiper;
