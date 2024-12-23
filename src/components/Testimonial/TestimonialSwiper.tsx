"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Navigation,
    EffectCoverflow,
    Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "@/data/Testimonial";

const TestimonialSwiper = () => {

    return (
        <div>
            <Swiper
                speed={1000}
                // effect={"coverflow"}
                // grabCursor={true}
                // centeredSlides={true}
                autoplay={true}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
                // navigation={{
                //     nextEl: swiperButtonNext,
                //     prevEl: swiperButtonPrev,
                // }}
                // pagination={{
                //     el: "." + paginationClass,
                //     clickable: true,
                // }}
                // coverflowEffect={{
                //     rotate: 0,
                //     depth: 0,
                //     modifier: 3,
                //     slideShadows: false,
                // }}
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
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }

                }}
            >
                {Testimonial?.map((testimonial, index) => (
                    <SwiperSlide key={index} className="w-full h-full ">
                        <TestimonialCard key={index} testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="flex gap-2 justify-center w-fit mx-auto mt-5 items-center">
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
                </div> */}
        </div>
    )
}

export default TestimonialSwiper