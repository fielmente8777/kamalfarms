import MainHeading from "../Heading/MainHeading"
import Container from "../SectionComponents/Container"
import SleepingCard from "./SleepingCard"



interface SleepingArrangement {
    title: string;
    data?: {
        name: string;
        type1: string;
        type2: string;

    }[]
}
const SleepingMain: React.FC<SleepingArrangement> = ({ title, data }) => {
    return (
        <div>
            <Container>
                <MainHeading title={title} />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 mt-5">
                    {data?.map((item, index) => (
                        <SleepingCard key={index} item={item} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default SleepingMain