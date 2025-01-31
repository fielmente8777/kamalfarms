import { Telephone, MailSend, Location } from "../icons/icons";

export interface ContactBannerDataProps {
  title: string;
  src: string;
  data: {
    title: string;
    items: {
      title: string;
      icon: React.ReactNode;
      link: {
        href: string;
        label: string;
      }[];
    }[];
  };
}

export const contactBannerData: ContactBannerDataProps = {
  title: "Contact us for any enquiry",
  src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/kamal+Farms/home/contactus_banner.webp",
  data: {
    title: "Contact details",
    items: [
      {
        title: "Call Us:",
        icon: <Telephone />,
        link: [
          {
            href: "tel:+91 9987519816",
            label: "+91 9987519816",
          },
          {
            href: "tel:+91 9833167278",
            label: "+91 9833167278",
          },
        ],
      },
      {
        title: "email id:",
        icon: <MailSend />,
        link: [
          {
            href: "mailto:contact@kamalfarms.com",
            label: "contact@kamalfarms.com",
          },
        ],
      },
      {
        title: "Address:",
        icon: <Location />,
        link: [
          {
            href: "",
            label:
              "Bhadra Farms, Vanjarwadi Village, Karjat Murbad Highway, Karjat",
          },
        ],
      },
    ],
  },
};
