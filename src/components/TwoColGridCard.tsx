import Image, { StaticImageData } from "next/image";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import MainHeading from "./Heading/MainHeading";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button";

interface TwoColGridCardProps {
  title: string;
  subTitle?: string;
  description?: string;
  subDescription?: string[];
  src?: string | StaticImageData;
  index?: number;
  arrImages?: string[];
}
const TwoColGridCard: React.FC<TwoColGridCardProps> = ({
  title,
  subTitle,
  description,
  subDescription,
  src,
  arrImages,
  index = 0,
}) => {
  const gridPattern = [
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
    "col-span-3 row-span-1",
    "col-span-3 row-span-1",
  ];
  return (
    <SectionWithContainer>
      <div
        className={`grid lg:grid-cols-5 grid-cols-1 gap-2  ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      >
        <div
          className={`col-span-3 w-full h-full ${index % 2 === 0 ? "order-1" : "order-2"}`}
        >
          {src && (
            <div
              className={` relative w-full aspect-[4/3] rounded-sm overflow-hidden `}
            >
              <Image
                src={src}
                alt="Image 1"
                className="w-full h-48 object-cover "
                fill
              />
            </div>
          )}
          {arrImages && (
            <div
              className={`grid grid-cols-6 auto-rows-[17rem] gap-1 w-full h-full rounded-sm ${index % 2 === 0 ? "order-1" : "order-2"}`}
            >
              {arrImages.map((image, index) => (
                <div
                  className={`${
                    gridPattern[index % gridPattern.length]
                  } relative w-full aspect-auto rounded-sm overflow-hidden`}
                  key={index}
                >
                  <Image
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover "
                    fill
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={`p-4 flex flex-col justify-center col-span-2 ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          {title && <MainHeading title={title} />}
          {subTitle && <MainHeading title={subTitle} />}
          {description && <Paragraph text={description} />}
          {subDescription && (
            <ul className="text-gray-600 list-disc pl-4">
              {subDescription.map((item, index) => (
                <li key={index} className="text-base">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <Button href="/contact" label="Contact Us" className="mt-4 w-fit" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TwoColGridCard;
