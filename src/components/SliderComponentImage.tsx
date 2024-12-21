import Container from "./Container";
import ImageSwiper from "./ImageSwiper";
import Section from "./Section";

interface SliderComponentImageProps {
  title: string;
  description: string;
  images: string[];
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
                <h2 className="lg:text-4xl text-2xl tracking-wider nexa text-center text-[#29422C]">
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
        {/* <Container>
          <div className="flex flex-col items-center justify-center gap-5 lg:mt-12 mt-4">
            {title2 && <BorderLine />}
            {title2 && (
              <h2 className="lg:text-4xl text-2xl tracking-wider text-center text-[#29422C]">
                {title2}
              </h2>
            )}
            <p className="text-center italic font-normal lg:text-xl text-base text-[#29422C]">
              {subDescription}
            </p>
            {subDescription2 && (
              <p className="text-center italic font-normal lg:text-xl text-base text-[#29422C]">
                {subDescription2}
              </p>
            )}
            <div className="flex items-center justify-center mt-5">
              <Link
                href={link}
                target={newTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="px-10 py-3 max-w-full font-medium text-base  text-white bg-[#29422C] rounded-sm border border-[#F69F2B] hover:bg-transparent  hover:text-[#29422C] duration-300 active:scale-75 hover:scale-105 "
              >
                {urlText}
              </Link>
            </div>
          </div>
        </Container> */}
      </Section>
    </Section>
  );
};

export default SliderComponentImage;
