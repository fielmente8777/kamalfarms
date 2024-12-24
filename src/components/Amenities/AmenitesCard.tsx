interface AmenitiesProps {
  data: {
    icon: any;
    name: string;
  };
}
const AmenitesCard: React.FC<AmenitiesProps> = ({ data }) => {
  const Icon = data.icon || null;
  return (
    <div className=" flex items-center gap-3 px-3 py-4 bg-white amenitiesShadow">
      <div>
        <span className=""><Icon/></span>
      </div>
      <div>
        <p className="text-textdark">{data.name} </p>
      </div>
    </div>
  );
};

export default AmenitesCard;
