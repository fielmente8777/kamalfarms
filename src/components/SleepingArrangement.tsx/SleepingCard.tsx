interface SleepingCardProps {
  item: {
    name: string;
    type1?: string;
    type2?: string;
  };
}
const SleepingCard: React.FC<SleepingCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-2  border border-textdark py-3 px-4" style={{ boxShadow: " 1px 1px  rgba(0, 0, 0, 0.5)" }}>
      <span className="text-textdark font-semibold">
        {item.name}
      </span>
      {item.type1 && (
        <p className="text-textlight text-sm w-full">{item.type1}</p>
      )}
      {item.type2 && (
        <p className="text-textlight text-sm w-full">{item.type2}</p>
      )}
    </div>
  );
};

export default SleepingCard;
