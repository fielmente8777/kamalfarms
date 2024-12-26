export interface AmenitiesProps {
  data: {
    icon: React.ReactNode;
    name: string;
  };
}
const AmenitesCard: React.FC<AmenitiesProps> = ({ data }) => {
  return (
    <div className=" flex items-center gap-4 px-3 py-4 bg-white amenitiesShadow">
      <div className="w-10">
        {data.icon}
      </div>
      <div>
        <p className="text-textdark">{data.name} </p>
      </div>
    </div>
  );
};

export default AmenitesCard;
