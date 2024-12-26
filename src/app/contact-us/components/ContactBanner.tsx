import { Container, MainHeading, Section } from "@/components";
import { ContactBannerDataProps } from "@/data/contact";
import { OurDetails } from "@/icons/icons";
import Link from "next/link";

const ContactBanner: React.FC<ContactBannerDataProps> = ({ title, data }) => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-5">
        <span>
          <OurDetails />
        </span>
        <MainHeading title={title} h1 h2={false} />
      </div>
      <div className="bg-primary mt-5">
        <Container className="bg-primary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-5">
                <div className="w-full flex items-center justify-center gap-4">
                  <span>{item.icon}</span>
                  <MainHeading title={item.title} className="text-white"  />
                </div>
                <ul className="flex flex-col gap-2 w-full list-disc list-inside">
                  {item.link.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="w-full text-white text-center"
                    >
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="text-white text-center"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="absolute lg:w-1/2 w-3/4 bg-bgclr -z-10  h-1/2 top-0 left-0"></div>
    </Section>
  );
};

export default ContactBanner;
