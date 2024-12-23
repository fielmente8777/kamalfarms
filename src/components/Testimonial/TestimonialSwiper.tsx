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

interface TestimonialCard {
    data: {
        icon: string;
        name: string;
        text: string;
    }

}
const TestimonialSwiper: React.FC<TestimonialCard> = ({ data }) => {

    return (
        <div>
            <Swiper
                speed={1000}
                autoplay={true}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
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
                {data?.map((testimonial, index) => (
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