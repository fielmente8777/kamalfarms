"use client";

import { Button, Container } from "@/components";
import Image from "next/image";
import Link from "next/link";
import SliderSwip from "../SliderSwip";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

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
          modules={[Navigation, Pagination,EffectFade]}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed="900"
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
                <h1 className="heading3 nexa text-secondary tracking-wider font-bold">
                  {item.title}
                </h1>
                <p className="description1 text-textdark mt-4">
                  {item.description}
                </p>
                <div className="mt-12 flex gap-4 justify-center items-center w-full lg:justify-between">
                  <Link
                    href={item.pageLink.href || "/"}
                    className="text-primary font-medium border-primary/60 border-b-2"
                  >
                    {item.pageLink.label}
                  </Link>
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
        <div className="banner-pagination position absolute bottom-20 -right-1/3 z-10 flex gap-2 items-center justify-center"></div>
      </Container>
      <div className="absolute w-1/2 bg-bgclr -z-10 h-full top-0 left-0"></div>
    </section>
  );
};

export default BannerWithSlider;
