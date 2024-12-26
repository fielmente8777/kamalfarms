import Image from "next/image";
import SectionWithContainer from "../SectionComponents/SectionWithContainer";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";
import { LocationOrange } from "@/icons/icons";
import Button from "../Button";

const BreathtakingBanner = () => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full items-center justify-center lg:relative">
        <div className="col-span-2 w-full ">
          <div className="relative w-full lg:aspect-[4/2.6] aspect-square">
            <Image
              src="https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/home/asset+5.webp"
              alt="alt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="col-span-1 max-md:relative">
          <div className="lg:absolute bg-bgclr lg:w-[48rem] w-[16.5rem] max-md:mx-auto lg:right-0 lg:bottom-[12%] -mt-5 z-10 lg:p-8 p-4 flex items-center justify-center gap-5 flex-col">
            <div>
              <LocationOrange />
            </div>
            <MainHeading
              title="Breathtaking Villas & Cottages for a Perfect Getaway"
              className="w-full text-center"
            />
            <Paragraph
              className="text-center text-textdark"
              text="Kamal Farms is located approximately 70 kilometers away from Mumbai and 100 kilometers from Pune in the small town of Karjat. Situated on the banks of Pej river, blessed trees and an expansive farm spread across 10,000 sq.ft of land. It is a perfect location to host visitors with absolute care."
            />
            <Button href="/contact-us" label="Contact Us" />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default BreathtakingBanner;
