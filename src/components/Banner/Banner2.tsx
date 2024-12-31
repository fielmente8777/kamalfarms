import Image from "next/image";
import MainHeading from "../Heading/MainHeading";
import Paragraph from "../Paragraph/Paragraph";

interface BannerProps {
  title: string;
  images: string[];
  desc: string[];
}

const Banner2: React.FC<BannerProps> = ({ title, images, desc }) => {
  return (
    <section className="max-w-[1600px] mx-auto pt-2 pb-10">
      <div className="lg:max-width max-md:ps-4">
        <div className="grid lg:grid-cols-6 grid-cols-4 w-full items-center justify-center">
          <div className="col-span-4 grid grid-cols-4 items-center justify-center">
            <div className="col-span-1">
              <div className="relative lg:h-[380px] h-[5.6rem] lg:aspect-square lg:left-24 lg:-top-10  aspect-[4/1.95]">
                <Image
                  src={images[0]}
                  alt={title}
                  fill
                  className="object-cover z-20"
                />
              </div>
            </div>
            <div className="col-span-3 w-full ">
              <div className="relative w-full aspect-[4/3.9]">
                <Image
                  src={images[1]}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-4 relative w-full h-full max-md:-ms-2">
            <div className="lg:absolute shadow-2xl bg-white lg:w-[42rem] w-[20.5rem] max-md:mx-auto lg:top-1/4 lg:right-0 -mt-5 z-10 lg:p-12 p-5 flex items-center justify-center gap-5 flex-col">
              <MainHeading title={title} className="w-full" h1 h2={false} />

              {desc.map((item, index) => (
                <Paragraph key={index} className="text-textdark description1" text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:w-1/2 w-[80%] bg-bgclr -z-10 lg:h-full h-1/2 top-0 left-0"></div>
    </section>
  );
};

export default Banner2;
