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
        renderItem: (item: any) => (
            <li key={item.id} className="border-2 border-red-900">
                <Link href={item.link ? item.link : ""} className="border text-base text-gray-300">
                    {item.icon}
                </Link>
            </li>
        ),
    },
];