import Button from "./Button";
import MainHeading from "./Heading/MainHeading";
import Paragraph from "./Paragraph/Paragraph";
import Section from "./SectionComponents/Section";


interface BookNowDataProps {
  title: string;
  subTitle: string;
}
const BookNowCard: React.FC<BookNowDataProps> = ({ title, subTitle }) => {
  return (
    <Section>
      <div className="max-width mx-auto bg-secondary ">
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-4 py-6 lg:px-8">
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <Paragraph
                text={subTitle}
                className="text-white"
              />
              <MainHeading
                title={title}
                className="text-white"
              />
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center w-full h-full">
            <Button
              href="/book-now"
              label="Book Now"
              className="!bg-white !text-secondary !py-4 !px-8 !rounded-sm !font-semibold hover:!bg-white/80 transition-colors duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BookNowCard;
