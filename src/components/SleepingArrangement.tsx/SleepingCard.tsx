
interface SleepingCardProps {
    item: {
        name: string;
        type1: string;
        type2: string;
    }
}
const SleepingCard: React.FC<SleepingCardProps> = ({ item }) => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center border border-textdark py-3">
            <span className="text-center text-textdark font-semibold">{item.name}</span>
            <p className="text-textdark text-center text-sm">{item.type1}</p>
            <p className="text-textdark text-center text-sm">{item.type2}</p>
        </div>
    )
}

export default SleepingCard