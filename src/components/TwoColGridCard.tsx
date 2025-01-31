"use client";
import Image, { StaticImageData } from "next/image";
import Section from "./SectionComponents/Section";
import MainHeading from "./Heading/MainHeading";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button";
import { useState } from "react";

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

  const [viewMore, setViewMore] = useState(false);

  return (
    <Section>
      <div
        className={`lg:grid grid-cols-5 gap-4 lg:max-width  mx-auto ${index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"}`}
      >
        <div
          className={`col-span-3 mb-5 w-full h-full ${index % 2 === 0 ? "order-1 max-md:mt-4" : "order-2 max-md:mb-4"}`}
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
              className={`grid grid-cols-6 lg:auto-rows-[19rem] auto-rows-[10rem] gap-1 w-full h-full rounded-sm ${index % 2 === 0 ? "order-1" : "order-2"}`}
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
          <div className="lg:block hidden">
            {list && (
              <ul className="text-gray-600 list-disc pl-4 flex flex-col gap-3">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="description1 text-textdark"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:hidden">
            {list && (
              <ul className="text-gray-600 list-disc pl-4 flex flex-col gap-3">
                {list
                  .slice(0, viewMore ? list.length : 3)
                  .map((item, index) => (
                    <li
                      key={index}
                      className="description1 text-textdark"
                      dangerouslySetInnerHTML={{ __html: item }}
                    ></li>
                  ))}
              </ul>
            )}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 justify-between gap-4 w-full items-center">
            <button
              className="text-primary lg:hidden underline underline-offset-2 w-fit"
              onClick={() => setViewMore(!viewMore)}
            >
              {viewMore ? "View less" : "View more"}
            </button>
            <div className="w-full h-10 flex justify-center max-md:justify-end">
              <Button href="/contact-us" label="Contact Us" className="w-fit" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TwoColGridCard;
