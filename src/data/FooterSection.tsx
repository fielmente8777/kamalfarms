import Link from "next/link";
import {
  FooterProps,
  ForEnquiries,
  StayInKarjat,
  StayInPanchgani,
} from "./Footer";
import { JSX } from "react";

interface Section {
  title: string;
  items: FooterProps[];
  renderItem: (item: FooterProps) => JSX.Element;
}

export const sections: Section[] = [
  {
    title: "Stay In Karjat",
    items: StayInKarjat,
    renderItem: (item) => (
      <li key={item.id}>
        <Link href={item.link ? item.link : ""} className="text-base   ">
          {item.text}
        </Link>
      </li>
    ),
  },
  {
    title: "Stay In Panchgani",
    items: StayInPanchgani,
    renderItem: (item) => (
      <li key={item.id}>
        <Link href={item.link ? item.link : ""} className="text-base   ">
          {item.text}
        </Link>
      </li>
    ),
  },
  {
    title: "For Enquiries",
    items: ForEnquiries,
    renderItem: (item) => (
      <li key={item.id}>
        <Link
          href={item.link ? item.link : ""}
          className="flex items-center gap-2 text-base   "
        >
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </Link>
      </li>
    ),
  },
];
