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
import MainHeading from "./Heading/MainHeading";
import LinkComponent from "./Link/LinkComponent";

interface ImageSwiperProps {
  images: {
    src: string;
    title?: string;
    description?: string;
    alt?: string;
    link: {
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
  details = false
}) => {
  const buttonName = index !== undefined ? index : btnName;

  const swiperButtonNext = `.button-next-${buttonName}`;
  const swiperButtonPrev = `.button-prev-${buttonName}`;

  return (
    <div className="w-full bg-transparent slider relative">
      <Swiper
        speed={1000}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
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
          modifier: 10,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {images?.map((item, idx) => (
          <SwiperSlide key={idx} className="w-full h-full">
            <div className="w-full h-full">
              <div className="w-full h-full relative lg:aspect-[4/2.5] aspect-[3/2.5]">
                <Image
                  src={item.src}
                  className="h-full object-cover"
                  alt={"room"}
                  fill
                />
              </div>
              {details && <div className=" bg-white p-7 -mt-10 w-full max-w-[44rem] flex items-center justify-center relative z-10 mx-auto">
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <MainHeading title={item.title} />
                  {/* <Paragraph className="text-center" text={item.description} /> */}
                  {/* <h3 className="heading4 tracking-wider font-semibold text-secondary nexa">
                    {item.title}
                  </h3> */}
                  <p className="text-textlight text-base text-center">{item.description}</p>
                  {/* <Link href={item.link.href} className="text-primary font-medium border-primary/60 border-b-2">{item.link.label}</Link> */}
                  <LinkComponent href={item.link.href} text={item.link.label} />

                </div>
              </div>}
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
          className={`flex items-center justify-center gap-1 ${paginationClass}`}
        />
        <button
          className={`button-next-${buttonName} p-2 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-secondary hover:border-secondary active:scale-95`}
        >
          <NextButton />
        </button>
      </div>
      {details && <div className=" w-full bg-bgclr h-[35rem] absolute top-1/3 z-0"></div>}
    </div>
  );
};

export default ImageSwiper;
