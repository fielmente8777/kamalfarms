import { Telephone, MailSend, Location } from "../icons/icons";

export interface ContactBannerDataProps {
  title: string;
  data: {
    title: string;
    icon: React.ReactNode;
    link: {
      href: string;
      label: string;
    }[];
  }[];
}

export const contactBannerData: ContactBannerDataProps = {
  title: "our contact details",
  data: [
    {
      title: "Call Us at",
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
      title: "Our Address",
      icon: <Location />,
      link: [
        {
          href: "",
          label:
            "Bhadra Farms, Vanjarwadi Village, Karjat Murbad Highway, Karjat",
        },
      ],
    },
    {
      title: "Mail Us at",
      icon: <MailSend />,
      link: [
        {
          href: "mailto:contact@kamalfarms.com",
          label: "contact@kamalfarms.com",
        },
      ],
    },
  ],
};

