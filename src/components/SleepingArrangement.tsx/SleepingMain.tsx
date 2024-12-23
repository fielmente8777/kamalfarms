import Container from "../Container"
import MainHeading from "../Heading/MainHeading"
import SleepingCard from "./SleepingCard"

const SleepingMain = () => {

    const sleepingData = [
        {
            name: "Bedroom 1",
            type1: "1 King Bedroom",
            type2: "1 Queen Bedroom",
        },
        {
            name: "Bedroom 2",
            type1: "1 King Bedroom",
            type2: "1 Queen Bedroom",
        },
        {
            name: "Bedroom 3",
            type1: "1 King Bedroom",
            type2: "1 Queen Bedroom",
        },
        {
            name: "Bedroom 4",
            type1: "1 King Bedroom",
            type2: "1 Queen Bedroom",
        },
        {
            name: "Bedroom 5",
            type1: "1 King Bedroom",
            type2: "1 Queen Bedroom",
        },
        {
            name: "Loft",
            type1: "10 Floor",
            type2: "Mattresses",
        },
    ]
    return (
        <div>
            <Container>
                <MainHeading title="Sleeping Arrangement" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 mt-5">
                    {sleepingData.map((data, index) => (
                        <SleepingCard key={index} data={data} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default SleepingMain