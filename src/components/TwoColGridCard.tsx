import Image, { StaticImageData } from "next/image";
import Section from "./SectionComponents/Section";
import MainHeading from "./Heading/MainHeading";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button";

interface TwoColGridCardProps {
  title: string;
  subTitle?: string;
  description?: string;
  list?: string[];
  src?: string | StaticImageData;
  index?: number;
  arrImages?: string[];
}
const TwoColGridCard: React.FC<TwoColGridCardProps> = ({
  title,
  subTitle,
  description,
  list,
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
    <Section>
      <div
        className={`lg:grid grid-cols-5 gap-4 lg:max-width  mx-auto ${index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"}`}
      >
        <div
          className={`col-span-3 w-full h-full ${index % 2 === 0 ? "order-1 max-md:mt-4" : "order-2 max-md:mb-4"}`}
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
              className={`grid grid-cols-6 lg:auto-rows-[19rem] auto-rows-[8rem] gap-1 w-full h-full rounded-sm ${index % 2 === 0 ? "order-1" : "order-2"}`}
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
                    className="w-full h-48 object-cover"
                    fill
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={` flex flex-col gap-4 col-span-2 max-width  ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          {title && <MainHeading title={title} />}
          {subTitle && <MainHeading title={subTitle} />}
          {description && <Paragraph text={description} />}
          {list && (
            <ul className="text-gray-600 list-disc pl-4 flex flex-col gap-3">
              {list.map((item, index) => (
                <li key={index} className="description1">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <Button
            href="/contact-us"
            label="Contact Us"
            className="mt-2 w-fit"
          />
        </div>
      </div>
    </Section>
  );
};

export default TwoColGridCard;
