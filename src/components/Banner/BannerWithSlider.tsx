"use client";

import { Button, Container } from "@/components";
import Image from "next/image";
import SliderSwip from "../SliderSwip";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";
import LinkComponent from "../Link/LinkComponent";

interface BannerItem {
  title: string;
  description: string;
  image: string;
  pageLink: {
    href: string;
    label: string;
  };
  btnLink: {
    href: string;
    label: string;
  };
}

interface BannerProps {
  data: BannerItem[];
}

const BannerWithSlider: React.FC<BannerProps> = ({ data }) => {
  return (
    <section className="max-w-[1600px] mx-auto pt-2 pb-10">
      <Container className="banner relative">
        <SliderSwip
          data={data}
          slidesPerView={1}
          spaceBetween={10}
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed="1000"
          effect={"fade"}
          // navigation={true}
          pagination={{
            el: ".banner-pagination",
            clickable: true,
          }}
        >
          {(item: BannerItem) => (
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div className="relative w-full aspect-[4/3] col-span-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center lg:ps-16 lg:pe-2 col-span-1 bg-white">
                <MainHeading title={item.title} />
                <Paragraph className="mt-4" text={item.description} />
                <div className="mt-12 flex gap-4 justify-center items-center w-full lg:justify-between">
                  <LinkComponent
                    href={item.pageLink.href || "/"}
                    text={item.pageLink.label}
                  />
                  <Button
                    href={item.btnLink.href || "/"}
                    label={item.btnLink.label}
                    className="capitalize"
                  />
                </div>
              </div>
            </div>
          )}
        </SliderSwip>
        <div className="absolute bottom-28 right-[23%] transform translate-y-1/2  z-10">
          <div className="banner-pagination flex gap-2 items-center justify-center"></div>
        </div>
      </Container>
      <div className="absolute w-1/2 bg-bgclr -z-10 h-full top-0 left-0"></div>
    </section>
  );
};

export default BannerWithSlider;
