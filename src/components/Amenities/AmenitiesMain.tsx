import React from 'react'
import AmenitesCard from './AmenitesCard'
import { Call } from '@/icons/icons'
import MainHeading from '../Heading/MainHeading'
import Container from '../SectionComponents/Container'

interface Amenities {
    title: string;
    list?: {
        icon: any;
        name: string;
    }[]
}
const AmenitiesMain: React.FC<Amenities> = ({ title, list }) => {

    return (
        <div className='my-10 md:my-16'>

            <Container>

                <MainHeading title={title} />
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 mt-5">
                    {list?.map((item, index) => (
                        <AmenitesCard key={index} data={item} />
                    ))}
                </div>

            </Container>
        </div>

    )
}

export default AmenitiesMain