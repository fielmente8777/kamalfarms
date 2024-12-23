// import { Banner } from "./components";

// import TestimonialMain from "@/components/Testimonial/TestimonialMain";

import { Map, SlideComponentImage, TestimonialMain } from "@/components";
import { slider1 } from "@/data/homepage";

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      banner
      <SlideComponentImage {...slider1} />
      <TestimonialMain />
      <Map src={""} />
    </main>
  );
}
