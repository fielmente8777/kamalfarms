import Container from "./SectionComponents/Container";
import MainHeading from "./Heading/MainHeading";
import ImageSwiper from "./ImageSwiper";
import Paragraph from "./Paragraph/Paragraph";
import Section from "./SectionComponents/Section";
import ImageSwiper2 from "./ImageSwiper2";

interface SliderComponentImageProps {
  title: string;
  description?: string;
  images: {
    src: string;
    title?: string;
    alt?: string;
    description?: string;
    link?: {
      href: string;
      label: string;
    };
  }[];
  index?: number;
  btnName?: string;
  paginationClass?: string;
  descMaxWidth?: boolean;
  details?: boolean;
  imageSwiper?: boolean;
  imageSwiper2?: boolean;
}

const SliderComponentImage: React.FC<SliderComponentImageProps> = ({
  title,
  description,
  images,
  index,
  btnName,
  details,
  paginationClass,
  imageSwiper = true,
  imageSwiper2 = false,
}) => {
  return (
    <Section>
      {title && (
        <Container>
          <div className="flex flex-col items-center justify-center gap-5 mb-2">
            <div className="flex flex-col gap-5">
              <MainHeading className={"text-center "} title={title} />
              {description && (
                <Paragraph
                  className={"text-center max-w-2xl "}
                  text={description}
                />
              )}
            </div>
          </div>
        </Container>
      )}

      <div className={`lg:mt-12 mt-4 block`}>
        {imageSwiper && (
          <ImageSwiper
            images={images}
            index={index}
            btnName={btnName}
            paginationClass={paginationClass}
            details={details}
          />
        )}
        {imageSwiper2 && (
          <ImageSwiper2
            images={images}
            details={details}
          />
        )}
      </div>
    </Section>
  );
};

export default SliderComponentImage;
