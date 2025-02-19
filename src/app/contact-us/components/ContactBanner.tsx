import { Container, MainHeading, Section } from "@/components";
import { OurDetails } from "@/icons/icons";
import Image from "next/image";

interface ContactBannerDataProps {
  title: string;
  src: string;
}
const ContactBanner: React.FC<ContactBannerDataProps> = ({ title, src }) => {
  return (
    <Section className="!pt-1">
      <Container>
        <div className="relative w-full lg:aspect-[4/1.2] aspect-[4/2.5]">
          <Image src={src} alt={title} fill className="object-cover object-bottom" />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50">
            <div className="flex flex-col items-center justify-center gap-5 w-full h-full">
              <span>
                <OurDetails />
              </span>
              <MainHeading className="text-white max-md:text-xl" title={title} h1 h2={false} />
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute lg:w-1/2 w-3/4 bg-bgclr -z-10  lg:h-[540px] h-[298px] top-0 left-0"></div>
    </Section>
  );
};

export default ContactBanner;
