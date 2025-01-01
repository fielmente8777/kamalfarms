import Button from "./Button";
import MainHeading from "./Heading/MainHeading";
import Paragraph from "./Paragraph/Paragraph";
// import Section from "./SectionComponents/Section";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";

interface BookNowDataProps {
  title: string;
  subTitle?: string;
}
const BookNowCard: React.FC<BookNowDataProps> = ({ title, subTitle }) => {
  return (
    <SectionWithContainer containerClassName="bg-secondary">
      {/* <div className="max-width mx-auto bg-secondary "> */}
      <div className="grid lg:grid-cols-5 grid-cols-1 w-full items-center justify-center gap-4 py-6 lg:px-8">
        <div className="col-span-4 w-full h-full flex items-center justify-center">
          <div className="flex flex-col gap-4">
            {subTitle && <Paragraph text={subTitle} className="text-white" />}
            <MainHeading title={title} className="text-white" />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 flex items-center justify-center w-full h-full">
          <Button
            href="/book-now"
            label="Book Now"
            className="!bg-white !text-secondary !py-4 !px-8 !rounded-sm !font-semibold hover:!bg-white/80 transition-colors duration-300 ease-in-out"
          />
        </div>
      </div>
      {/* </div> */}
    </SectionWithContainer>
  );
};

export default BookNowCard;
