import { sections } from "@/data/FooterSection";
import Link from "next/link";
import SectionWithContainer from "./SectionWithContainer";

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-Primary pb-10 max-w-[1600px] mx-auto w-full">
      <SectionWithContainer sectionClassName="bg-primary text-white">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
          {sections.map((section, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h3 className="text-lg font-bold">{section.title}</h3>
              <ul className="flex flex-col gap-4">
                {section.items.map(section.renderItem)}
              </ul>
            </div>
          ))}
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
