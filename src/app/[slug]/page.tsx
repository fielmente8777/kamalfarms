import { Banner, BookNowCard } from "@/components";
import TwoColGridCard from "@/components/TwoColGridCard";

const page = () => {
  const arrImages = [
    "/outside.jpeg",
    "/outside.jpeg",
    "/outside.jpeg",
    "/outside.jpeg",
    "/outside.jpeg",
  ];
  return (
    <main>
      <Banner />
      <TwoColGridCard
        arrImages={arrImages}
        title="Experiences / Activities"
        index={1}
      />
      <BookNowCard />
    </main>
  );
};

export default page;
