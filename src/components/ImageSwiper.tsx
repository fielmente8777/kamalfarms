"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { NextButton, PrevButton } from "../icons/icons";
import Link from "next/link";

interface ImageSwiperProps {
  images?: string[];
  index?: number;
  btnName?: string;
  paginationClass?: string;
}
const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  index,
  btnName = "",
  paginationClass = "pagination_0",
}) => {
  const buttonName = index !== undefined ? index : btnName;

  const swiperButtonNext = `.button-next-${buttonName}`;
  const swiperButtonPrev = `.button-prev-${buttonName}`;

  return (
    <div className="w-full bg-transparent slider">
      <Swiper
        speed={1000}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        navigation={{
          nextEl: swiperButtonNext,
          prevEl: swiperButtonPrev,
        }}
        pagination={{
          el: "." + paginationClass,
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          depth: 0,
          modifier: 3,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {images?.map((roomImage, idx) => (
          <SwiperSlide key={idx} className="w-full h-full ">
            <div className="w-full h-full relative">
              <div className="w-full h-full relative lg:aspect-[4/2.5] aspect-[3/2.5]">
                <Image
                  src={roomImage}
                  className="h-full object-cover"
                  alt={"room"}
                  fill
                />
              </div>
              <div className=" p-12 z-10 w-[80%] bg-white bg-opacity-80 absolute top-1/2 -translate-y-1/2 translate-x-1/2 transform">
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <h3 className="text-lg font-semibold text-secondary nexa">
                    title
                  </h3>
                  <p className="text-textlight text-base">description</p>
                  <Link href="#">button</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 justify-center w-fit mx-auto mt-5 items-center">
        <button
          className={`button-prev-${buttonName} p-2 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-[#f69f2b] hover:border-[#f69f2b] active:scale-95`}
        >
          <PrevButton />
        </button>
        <div
          className={`flex items-center justify-center gap-1 ${paginationClass}`}
        />
        <button
          className={`button-next-${buttonName} p-2 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-[#f69f2b] hover:border-[#f69f2b] active:scale-95`}
        >
          <NextButton />
        </button>
      </div>
    </div>
  );
};

export default ImageSwiper;
