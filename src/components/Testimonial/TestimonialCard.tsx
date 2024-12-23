// import { TestimonialOne } from "@/icons/icons"

import Paragraph from "../Paragraph/Paragraph";

interface TestimonialCardProps {
  testimonial: {
    icon: React.ReactNode;
    text: string;
    name: string;
  };
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className=" flex flex-col gap-5 justify-center items-center py-5 px-4 bg-bgclr">
      <span>{testimonial.icon}</span>
      <Paragraph className={"text-center"} text={testimonial.text} />
      <span className="text-base font-semibold">{testimonial.name}</span>
    </div>
  );
};

export default TestimonialCard;
