import Container from "./Container";
import ImageSwiper from "./ImageSwiper";
import Section from "./Section";

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
  descMaxWidth = false,
}) => {
  return (
    <Section className="bg-[#ffffff]">
      <Section>
        {title && (
          <Container>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col gap-5">
                <h2 className="lg:text-4xl text-2xl tracking-wider nexa text-center font-semibold text-secondary">
                  {title}
                </h2>

                <p
                  className={`text-center  lg:text-xl text-base text-[#29422C] ${descMaxWidth && "max-w-4xl mx-auto"} w-full`}
                >
                  {description}
                </p>
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
