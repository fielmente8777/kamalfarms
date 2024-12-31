import Image from "next/image";
import SectionWithContainer from "../SectionComponents/SectionWithContainer";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";
import { LocationOrange } from "@/icons/icons";
import Button from "../Button";

interface Props {
  title: string;
  image: string;
  desc: string[];
  btnName: {
    href: string;
    label: string;
  };
  index?: number;
  icon?: boolean;
  contentClassName?: string;
  textStart?: boolean;
  center?: boolean;
}
const BreathtakingBanner: React.FC<Props> = ({
  title,
  image,
  desc,
  btnName,
  index = 0,
  icon = false,
  contentClassName = "",
  textStart = false,
  center = false,
}) => {
  return (
    <SectionWithContainer>
      <div
        className={`lg:grid grid-cols-3 flex  ${index % 2 !== 0 ? "flex-col-reverse" : "flex-col"} w-full items-center justify-center lg:relative`}
      >
        <div
          className={`col-span-2 w-full ${index % 2 === 0 ? "order-1" : "order-2"}`}
        >
          <div className="relative w-full lg:aspect-[4/2.6] aspect-square">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
        <div
          className={`col-span-1 max-md:relative ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          <div
            className={`lg:absolute ${contentClassName ? contentClassName : "bg-bgclr"} shadow-2xl lg:w-[46rem] w-[19rem] max-md:mx-auto ${index % 2 === 0 ? "lg:right-0" : "lg:left-0"} lg:bottom-[12%] relative max-md:-top-5 z-10 lg:p-12 py-7 px-4 flex ${!center ? "items-start justify-start" : "items-center justify-center"} gap-7 flex-col`}
          >
            {icon && (
              <div>
                <LocationOrange />
              </div>
            )}
            <MainHeading
              title={title}
              className={`w-full  ${textStart ? "text-start" : "text-center"}`}
            />
            {desc.map((item, index) => (
              <Paragraph
                className={` text-textdark  ${textStart ? "text-start" : "text-center"}`}
                text={item}
                key={index}
              />
            ))}
            <div>
              <Button href={btnName.href} label={btnName.label} />
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default BreathtakingBanner;
