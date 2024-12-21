import Image, { StaticImageData } from "next/image";

interface TwoColGridCardProps {
  title: string;
  subTitle: string;
  description: string;
  subDescription: string[];
  src: string | StaticImageData;
  index?: number;
}
const TwoColGridCard: React.FC<TwoColGridCardProps> = ({
  title,
  subTitle,
  description,
  subDescription,
  src,
  index = 0,
}) => {
  return (
    <div
      className={`grid lg:grid-cols-2 grid-cols-1 gap-2  ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div
        className={`relative w-full aspect-[4/3] rounded-sm overflow-hidden ${index % 2 === 0 ? "order-1" : "order-2"}`}
      >
        <Image
          src={src}
          alt="Image 1"
          className="w-full h-48 object-cover "
          fill
        />
      </div>
      <div
        className={`p-4 flex flex-col justify-center items-center bg-white rounded-lg shadow-md ${index % 2 === 0 ? "order-2" : "order-1"}`}
      >
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        {subTitle && <h2 className="text-lg font-semibold">{subTitle}</h2>}
        {description && <p className="text-gray-600">{description}</p>}
        {subDescription && (
          <ul className="text-gray-600 list-disc pl-4">
            {subDescription.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TwoColGridCard;
