// import { Banner } from "./components";

// import TestimonialMain from "@/components/Testimonial/TestimonialMain";

import { SlideComponentImage } from "@/components";
import TestimonialMain from "@/components/Testimonial/TestimonialMain";
import { slider1 } from "@/data/homepage";

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      banner
      <SlideComponentImage {...slider1} />
      <TestimonialMain />
    </main>
  );
}
