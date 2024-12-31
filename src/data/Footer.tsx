import { Call, Facebook, Insta, Mail } from "@/icons/icons";

export interface FooterProps {
  id: number;
  text?: string;
  link?: string;
  icon?: React.ReactNode;
}
export const StayInKarjat: FooterProps[] = [
  {
    id: 1,
    text: "5 Bedroom Riverview Villa",
    link: "/5-bedroom-riverview-villa",
  },
  {
    id: 2,
    text: "3 Bedroom Riverside Cottage",
    link: "/3-bedroom-riverside-cottage",
  },
  {
    id: 3,
    text: "3 Bedroom Riverview Nest",
    link: "/3-bedroom-riverview-nest",
  },
];

export const StayInPanchgani: FooterProps[] = [
  {
    id: 1,
    text: "4.5 Bedroom Villa",
    link: "/4_5-bedroom-villa",
  },
];

export const ForEnquiries: FooterProps[] = [
  {
    id: 1,
    icon: <Call />,
    text: "+91 9987519816",
    link: "tel:+91 9987519816",
  },
  {
    id: 2,
    icon: <Call />,
    text: "+91 9833167278",
    link: "tel:+91 9833167278",
  },
  {
    id: 3,
    icon: <Mail />,
    text: "contact@kamalfarms.com",
    link: "mailto:contact@kamalfarms.com",
  },
];
export const FollowUs: FooterProps[] = [
  {
    id: 1,
    icon: <Facebook />,
    link: "https://www.facebook.com/kamalfarmskarjat/",
  },
  {
    id: 2,
    icon: <Insta />,
    link: "https://www.instagram.com/kamalfarms/",
  },
];
