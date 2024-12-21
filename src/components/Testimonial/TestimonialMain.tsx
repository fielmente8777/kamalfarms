import { Testimonial } from "@/data/Testimonial"
import TestimonialCard from "./TestimonialCard"
import Container from "../Container"

const TestimonialMain = () => {

    return (
        <div >
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                    {Testimonial.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

            </Container>

        </div>
    )
}

export default TestimonialMain