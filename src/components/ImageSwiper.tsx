"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { NextButton, PrevButton } from "../icons/icons";
import MainHeading from "./Heading/MainHeading";
import LinkComponent from "./Link/LinkComponent";
import { useState } from "react";

export interface ImageSwiperProps {
  images: {
    src: string;
    title?: string;
    description?: string;
    alt?: string;
    link?: {
      href: string;
      label: string;
    };
  }[];
  index?: number;

  btnName?: string;
  paginationClass?: string;
  details?: boolean;
}
const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  index,
  btnName = "",
  paginationClass = "pagination_0",
  details = false,
}) => {
  const buttonName = index !== undefined ? index : btnName;

  const swiperButtonNext = `.button-next-${buttonName}`;
  const swiperButtonPrev = `.button-prev-${buttonName}`;

  const [readMore, setReadMore] = useState<number | null>(null);

  return (
    <div className="w-full bg-transparent slider relative">
      <Swiper
        speed={1000}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.3}
        spaceBetween={10}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: swiperButtonNext,
          prevEl: swiperButtonPrev,
        }}
        pagination={{
          el: "." + paginationClass,
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.9,
            spaceBetween: 15,
          },
        }}
      >
        {images?.map((item, idx) => (
          <SwiperSlide key={idx} className="w-full h-full">
            <div className="w-full h-full">
              <div className="w-full h-full relative lg:aspect-[4/2.5] aspect-[3/2.8]">
                <Image
                  src={item.src}
                  className="h-full object-cover"
                  alt={item.alt ? item.alt : "restaurant img"}
                  fill
                />
                {item.alt && (
                  <p className="text-white capitalize description1 text-center absolute bottom-2 -translate-x-1/2 left-1/2 bg-black/50 p-2">
                    {item.alt}
                  </p>
                )}
              </div>
              {details && (
                <div className=" bg-white lg:py-6 lg:px-8 p-4 lg:-mt-10 -mt-20 w-full lg:min-h-[18.5rem]  lg:max-w-[44rem] max-w-[16rem] flex  relative z-10 mx-auto">
                  <div className="w-full h-full flex flex-col items-center gap-3">
                    {item.title && (
                      <MainHeading
                        title={item.title}
                        className="text-center !heading3"
                        h3
                        h2={false}
                      />
                    )}
                    {item.description && (
                      <p
                        className={`text-gray-500 description1 text-base text-center`}
                      >
                        <span
                          className={` text-center ${
                            readMore !== idx ? "max-md:line-clamp-[8]" : ""
                          }`}
                        >
                          {item.description}
                        </span>
                        <span
                          className="font-semibold lg:hidden underline underline-offset-2 cursor-pointer ml-2 whitespace-nowrap"
                          onClick={() => setReadMore(idx)}
                        >
                          {readMore ? "Read less" : "Read more"}
                        </span>
                      </p>
                    )}
                    {/* <Link href={item.link.href} className="text-primary font-medium border-primary/60 border-b-2">{item.link.label}</Link> */}
                    {item.link && (
                      <LinkComponent
                        href={item.link.href}
                        text={item.link.label}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 justify-center w-fit mx-auto mt-5 items-center relative z-10">
        <button
          className={`button-prev-${buttonName} p-2 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-secondary hover:border-secondary active:scale-95`}
        >
          <PrevButton />
        </button>
        <div
          className={`${images.length > 5 ? " hidden" : "flex"}  items-center justify-center gap-1 ${paginationClass}`}
        />
        <button
          className={`button-next-${buttonName} p-2 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-secondary hover:border-secondary active:scale-95`}
        >
          <NextButton />
        </button>
      </div>
      {details && (
        <div className=" w-full bg-bgclr lg:h-[35rem] h-[69%] absolute top-1/3 z-0"></div>
      )}
    </div>
  );
};

export default ImageSwiper;
