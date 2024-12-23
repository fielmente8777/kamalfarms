import Image from "next/image";
import Container from "../Container";

const Banner = () => {
  return (
    <section className="max-w-[1600px] mx-auto pt-2 pb-10 relative">
      <Container>
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center">
          <div className="col-span-1 relative w-full aspect-[4/3] z-[9999]">
            <Image
              src="/outside.jpeg"
              alt="alt"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-2 w-full ">
            <div className="relative w-full aspect-[4/2.6] z-[9999]">
              <Image
                src="/outside.jpeg"
                alt="alt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-1/2 bg-bgclr -z-10 h-full top-0 right-0"></div>
      </Container>
      <div className="relative w-1/2 bg-white -z-10 h-full top-0 ">
        <div className="flex flex-col justify-center items-center h-full w-full p-8 z-30 bg-white">
          <h1 className="heading3 nexa text-secondary tracking-wider font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          </h1>
          <p className="description1 text-textdark mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, quod officiis quia aspernatur?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
