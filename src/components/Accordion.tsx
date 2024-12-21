"use client";
import { useEffect, useState } from "react";

interface AccordionProps {
  title: string;
  index: number;
  description: string;
}
const Accordion: React.FC<AccordionProps> = ({ title, index, description }) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  useEffect(() => {
    setIsOpen(0);
  }, [index]);

  return (
    <div className="w-full py-3 accordion">
      <h3
        className="heading3 font-medium"
        key={index}
        onClick={() => setIsOpen(isOpen === index ? null : index)}
      >
        {title}
      </h3>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen === index ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div
          className="paragraph mt-2"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
