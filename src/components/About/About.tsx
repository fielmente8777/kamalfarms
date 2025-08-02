import Image from "next/image";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";
import LinkComponent from "../Link/LinkComponent";
import SectionWithContainer from "../SectionComponents/SectionWithContainer";

const About = () => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10 lg:gap-14 h-auto">
        <div className="lg:col-span-3 w-full relative aspect-[4/2.5]">
          <Image
            src={
              "/Kamal_Photos_for_Web_Hall_Mood.jpg"
            }
            alt="About - A Riverside Abode amidst Nature"
            className="h-full object-cover"
            fill
          />
        </div>
        <div className="lg:col-span-2 flex flex-col justify-center h-full gap-5">
          <MainHeading title={"About - A Riverside Abode amidst Nature"} />
          <Paragraph
            text={
              "Nature helps us unwind and reconnect with ourselves. The fort-like structure of the homestead sits on the banks of the Pej river. The calming melody of the river and the greenery of the farm is rejuvenating."
            }
          />
          <Paragraph
            text={
              "Kamal farms expands across 5 acres of fertile farmland. The Riverside abode lends itself to guests for small and large gatherings. We ensure attentive service, spacious and comfortable accommodation, and cuisine based on organic farm produce. Be it a family get together, a corporate retreat, or a chic destination wedding, the space lends itself for a soothing experience to adults and children alike."
            }
          />
          <LinkComponent href={"/aboutus"} text={"About Us"} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default About;
