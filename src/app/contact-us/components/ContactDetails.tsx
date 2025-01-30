import { MainHeading, SectionWithContainer } from "@/components";
import ContactForm from "./ContactForm";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import Link from "next/link";

interface ContactDetailsProps {
  title: string;
  items: {
    title: string;
    icon: React.ReactNode;
    link: {
      href: string;
      label: string;
    }[];
  }[];
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ title, items }) => {
  return (
    <SectionWithContainer>
      <div className="lg:grid grid-cols-2 gap-8 flex flex-col-reverse">
        <div className="w-full h-full flex flex-col gap-2">
          <MainHeading title={title} />
          {items.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <h3 className="text-textdark capitalize font-medium ">{item.title}</h3>
              {item.link.map((item, index) => (
                <Link href={item.href} key={index} className="text-textdark max-md:text-[0.8rem]">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="lg:aspect-[4/3] aspect-square mt-4">
            <LazyLoadedMap
              src={
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1776.2743961609372!2d73.40126478780162!3d18.976873397073337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9e618a24665%3A0x1e379db0ec186143!2sKamal%20Farms%20Karjat!5e1!3m2!1sen!2sus!4v1734930961269!5m2!1sen!2sus"
              }
            />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactDetails;
