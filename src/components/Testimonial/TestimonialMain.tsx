import SectionWithContainer from "../SectionComponents/SectionWithContainer";
import TestimonialSwiper from "./TestimonialSwiper";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";

const TestimonialMain = ({ testimonialData }: any) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center justify-center gap-5">
        <MainHeading title={testimonialData.title} />
        <Paragraph className="text-center max-w-2xl" text={"Our guests’ experiences are at the core of what we do. See what they have to say about their time with us and why they keep coming back."} />
      </div>
      <div className="mt-5 md:mt-10">
        <TestimonialSwiper data={testimonialData.data} />
      </div>

    </SectionWithContainer>
  );
};

export default TestimonialMain;
