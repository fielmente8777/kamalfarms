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
    <div className=" flex flex-col gap-5 justify-center items-center py-5 px-4 bg-bgclr">
      <span>{icon}</span>
      <Paragraph className={"text-center"} text={text} />
      <span className="text-base font-semibold">{name}</span>
    </div>
  );
};

export default TestimonialCard;
