import { Banner, BookNowCard, SlideComponentImage, TestimonialMain } from "@/components";
import AmenitiesMain from "@/components/Amenities/AmenitiesMain";
import SleepingMain from "@/components/SleepingArrangement.tsx/SleepingMain";
import TwoColGridCard from "@/components/TwoColGridCard";
import { slider1 } from "@/data/homepage";
import { SlugData } from "@/data/SlugData";


export async function generateStaticParams() {
  // const data = SlugData;

  return SlugData.map((data) => ({
    slug: data.slug,
  }));
}

interface Params {
  params: { slug: string };
}
const page = ({ params }: Params) => {


  const data = SlugData.find((item) => item.slug === params.slug)
  console.log(data)

  if (!data) {
    return <div>Page not found</div>
  }


  return (
    <main>

      <Banner {...data.bannerData} />
      <TwoColGridCard
        {...data.experience}
        index={1}
      />
      <SleepingMain {...data.sleepingArrangement} />
      <AmenitiesMain {...data.amenities} />
      <SlideComponentImage {...data.gallery} />
      <TestimonialMain testimonialData={data.testimonial} />


      <BookNowCard {...data.bookNow} />
    </main>
  );
};

export default page;
