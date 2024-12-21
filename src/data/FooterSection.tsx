import Link from "next/link";
import { FollowUs, ForEnquiries, StayInKarjat, StayInPanchgani } from "./Footer";

interface Section {
    title: string;
    items: any[];
    renderItem: (item: any) => JSX.Element;
}

export const sections: Section[] = [
    {
        title: "Stay In Karjat",
        items: StayInKarjat,
        renderItem: (item) => (
            <li key={item.id}>
                <Link href={item.link ? item.link : ""} className="text-base text-gray-00">
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
                <Link href={item.link ? item.link : ""} className="text-base text-gray-300">
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
                <Link href={item.link ? item.link : ""}
                    className="flex items-center gap-2 text-base text-gray-300">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                </Link>
            </li>

        ),
    },
    {
        title: "Follow Us",
        items: FollowUs,
        renderItem: (item) => (
            <li key={item.id} className="flex items-center gap-2">
                <Link href={item.link ? item.link : ""} className="border border-gray-900 text-base p-5 text-gray-300">
                    {item.icon}
                </Link>
            </li>
        ),
    },
];