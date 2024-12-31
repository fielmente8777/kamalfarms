"use client";
import Image from "next/image";
import { ImageSwiperProps } from "./ImageSwiper";
import Container from "./SectionComponents/Container";
import SliderSwip from "./SliderSwip";
import MainHeading from "./Heading/MainHeading";
import Paragraph from "./Paragraph/Paragraph";
import { Autoplay, Pagination } from "swiper/modules";

const ImageSwiper2: React.FC<ImageSwiperProps> = ({
  images,
  //   index = 0,
  paginationClass = "pagination_0",
  details = false,
}) => {
  return (
    <div className="slider relative mt-10">
      <Container className="">
        <SliderSwip
          data={images}
          speed={1000}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={true}
          modules={[Autoplay, Pagination]}
          pagination={{
            el: "." + paginationClass,
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
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
          {(item) => (
            <div className="w-full h-full">
              <div className="relative w-full lg:aspect-[4/3.2] aspect-[4/2.5]">
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  fill
                  className="object-cover"
                />
              </div>
              {details && (
                <div className="lg:p-5 p-4 flex flex-col items-center justify-center lg:min-h-[15.5rem] min-h-[10.5rem] gap-5 bg-white">
                  {item.title && (
                    <MainHeading
                      h3
                      h2={false}
                      className="text-center"
                      title={item.title}
                    />
                  )}
                  {item.description && (
                    <Paragraph
                      className="text-center text-textlight description1"
                      text={item.description}
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </SliderSwip>
      </Container>
      <div className="flex gap-2 justify-center w-fit mx-auto py-8 items-center relative z-10">
        <div
          className={`lg:flex flex items-center justify-center gap-1 cursor-pointer ${paginationClass}`}
        />
      </div>
      {details && (
        <div className=" w-full bg-bgclr lg:h-[25.5rem] h-[69%] absolute top-1/3 z-0"></div>
      )}
    </div>
  );
};

export default ImageSwiper2;
