import { Testimonial } from "@/data/Testimonial";
import TestimonialCard from "./TestimonialCard";
import SectionWithContainer from "../SectionWithContainer";

const TestimonialMain = () => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl font-semibold text-secondary nexa text-center">Testimonials</h2>
        <p className="text-center text-textdark max-w-2xl">
          Our guests’ experiences are at the core of what we do. See what they
          have to say about their time with us and why they keep coming back.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Testimonial.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TestimonialMain;
