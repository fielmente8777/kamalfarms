// import { TestimonialOne } from "@/icons/icons"

import Paragraph from "../Paragraph/Paragraph";

interface TestimonialCardProps {
  icon: React.ReactNode;
  text: string;
  name: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  icon,
}) => {
  return (
    <div className=" flex flex-col gap-5  items-center py-4 px-6 bg-bgclr w-full min-h-[26rem] lg:min-h-[22.9rem] h-full">
      <span>{icon}</span>
      <Paragraph className={"text-center text-[0.95rem] text-textlight"} text={text} />
      <span className="text-base font-semibold">{name}</span>
    </div>
  );
};

export default TestimonialCard;
