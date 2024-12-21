import { TestimonialOne } from "@/icons/icons"

const TestimonialCard = ({ testimonial }: any) => {
    return (
        <div className=" flex flex-col gap-5 justify-center items-center py-5 px-4 bg-bgclr">
            <span>{testimonial.icon}</span>
            <p className="text-center text-textdark">{testimonial.text}</p>
            <span className="text-base font-semibold">{testimonial.name}</span>
        </div>
    )
}

export default TestimonialCard