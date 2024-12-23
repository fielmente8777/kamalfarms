import Container from "./SectionComponents/Container";
import MainHeading from "./Heading/MainHeading";
import ImageSwiper from "./ImageSwiper";
import Paragraph from "./Paragraph/Paragraph";
import Section from "./SectionComponents/Section";

interface SliderComponentImageProps {
  title: string;
  description: string;
  images: {
    src: string;
    title: string;
    description: string;
    link: {
      href: string;
      label: string;
    };
  }[];
  index?: number;
  btnName?: string;
  paginationClass?: string;
  descMaxWidth?: boolean;
}

const SliderComponentImage: React.FC<SliderComponentImageProps> = ({
  title,
  description,
  images,
  index,
  btnName,
  paginationClass,
}) => {
  return (
    <Section className="bg-[#ffffff]">
      <Section>
        {title && (
          <Container>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col gap-5">
                <MainHeading className={"text-center "} title={title} />
                <Paragraph className={"text-center max-w-2xl"} text={description} />
              </div>
            </div>
          </Container>
        )}

        <div className={`${title && "lg:mt-12 "} block`}>
          <ImageSwiper
            images={images}
            index={index}
            btnName={btnName}
            paginationClass={paginationClass}
          />
        </div>
      </Section>
    </Section>
  );
};

export default SliderComponentImage;
