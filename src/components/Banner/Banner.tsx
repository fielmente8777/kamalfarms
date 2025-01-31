import Image from "next/image";
import Container from "../SectionComponents/Container";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";

interface BannerProps {
  title: string;
  images: string[];
  desc: string[];
}
const Banner: React.FC<BannerProps> = ({ title, images, desc }) => {
  return (
    <section className="max-w-[1600px] mx-auto pt-2 pb-10">
      <Container>
        <div className="grid grid-cols-3 w-full items-center justify-center">
          <div className="col-span-1">
            <div className="relative lg:h-[280px] h-[5.6rem] lg:aspect-auto  lg:w-[37.5rem] lg:left-24 lg:-top-10  aspect-[4/1.95]">
              <Image
                src={images[0]}
                alt="alt"
                fill
                className="object-cover z-20"
              />
            </div>
          </div>
          <div className="col-span-2 w-full ">
            <div className="relative w-full aspect-[4/2.6]">
              <Image
                src={images[1]}
                alt="alt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-4xl bg-white z-20 h-full lg:-top-24  shadow-xl">
          <div className="flex flex-col gap-4 h-full w-full lg:p-14 p-8 z-30 bg-white">
            <MainHeading title={title} h1 h2={false}/>
            {desc.map((item, index) => (
              <Paragraph
                className="text-textdark !text-start description1 tracking-wide"
                text={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </Container>
      <div className="absolute lg:w-1/2 w-[80%] bg-bgclr -z-10 lg:h-[730px] h-[330px] top-0 left-0"></div>
    </section>
  );
};

export default Banner;
