import Button from "./Button";
import LazyLoadedMap from "./LazyLoadedMap";
import SectionWithContainer from "./SectionWithContainer";

const Map = ({ src }: { src: string }) => {
  return (
    <SectionWithContainer>
      <div className="relative aspect-[4/1.35] border-2 border-[#29422C]">
        <LazyLoadedMap src={src} />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Button label="Get Directions" href="" className="w-fit" />
      </div>
    </SectionWithContainer>
  );
};

export default Map;
