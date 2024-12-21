import Link from "next/link";
import { FollowUs, ForEnquiries, StayInKarjat, StayInPanchgani } from "./Footer";

export const sections = [
    {
        title: "Stay In Karjat",
        items: StayInKarjat,
        renderItem: (item: any) => (
            <li key={item.id}>
                <Link href={item.link ? item.link : ""} className="text-base text-gray-300">
                    {item.text}
                </Link>
            </li>
        ),
    },
    {
        title: "Stay In Panchgani",
        items: StayInPanchgani,
        renderItem: (item: any) => (
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

        renderItem: (item: any) => (
            <Link href={item.link ? item.link : ""}
                key={item.id}
                className="flex items-center gap-2 text-base text-gray-300"
            >
                <span>{item.icon}</span>
                <span>{item.text}</span>
            </Link>
        ),
    },
    {
        title: "Follow Us",
        items: FollowUs,
        renderItem: (item: any) => (
            <li key={item.id}>
                <Link href={item.link ? item.link : ""} className="text-base text-gray-300">
                    {item.text}
                </Link>
            </li>
        ),
    },
];