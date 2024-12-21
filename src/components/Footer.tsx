import { sections } from "@/data/FooterSection";
import SectionWithContainer from "./SectionWithContainer";
import { CopyRight, Facebook, Insta } from "@/icons/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-Primary max-w-[1600px] mx-auto w-full ">
      <SectionWithContainer sectionClassName="bg-primary text-white !pt-10 !pb-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
          {sections.map((section, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h3 className="text-lg font-semibold tracking-wide underline">
                {section.title}
              </h3>
              <ul className={`flex flex-col gap-4`}>
                {section.items.map(section.renderItem)}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold tracking-wide underline">
              Follow Us
            </h3>
            <ul className={`flex gap-4`}>
              <Facebook />
              <Insta />
            </ul>
            <span className=" flex gap-3">
              <CopyRight /> Kamal Farms, Karjat | {currentYear}
            </span>
          </div>
        </div>
        <hr className="flex w-full mt-5" />
        <div className="flex justify-center text-base  pt-5">
          Design and developed by Eazotel
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
