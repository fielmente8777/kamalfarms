import React from 'react'
import AmenitesCard from './AmenitesCard'
import Container from '../Container'
import { Call } from '@/icons/icons'
import MainHeading from '../Heading/MainHeading'

const AmenitiesMain = () => {

    const amenititesData = [
        {
            icon: Call,
            name: "Air Condintioning"
        },
        {
            icon: Call,
            name: "Free WiFi"
        },
        {
            icon: Call,
            name: "Pet Friendly"
        },
        {
            icon: Call,
            name: "Vegetarian Meals (extra charges applicable)"
        },

        {
            icon: Call,
            name: "Genset Available (extra charges applicable)"
        },
        {
            icon: Call,
            name: "Free parking on premises"
        },
        {
            icon: Call,
            name: "Long-term stays allowed"
        },
        {
            icon: Call,
            name: "Towels and Toiletries"
        },
    ]
    return (
        <div className='my-10 md:my-16'>

            <Container>

                <MainHeading title={"Amenities"} />
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 mt-5">
                    {amenititesData.map((item, index) => (
                        <AmenitesCard key={index} data={item} />
                    ))}
                </div>

            </Container>
        </div>

    )
}

export default AmenitiesMain