interface NavLink {
    id: number;
    name: string;
    link: string;
    subLinks?: NavLink[];
}
export const NavLink = [
    {
        id: 1,
        name: "Home",
        link: "/",

    },
    {
        id: 2,
        name: "Stay in Karjat",
        link: "/Stay in Karjat",
        subLinks: [
            {
                id: 1,
                name: "5 Bedroom Riverview Villa",
                link: "/5-bedroom-riverview-villa",
            },
            {
                id: 2,
                name: "3 Bedroom Riverside Cottage",
                link: "/3-bedroom-riverside-cottage",
            },
            {
                id: 3,
                name: "3 Bedroom Riverview Nest",
                link: "/3-bedroom-riverview-nest",
            },
        ],
    },
    {
        id: 3,
        name: "Stay in Panchgani",
        link: "/stay-in-panchgani",
        subLinks: [
            {
                id: 1,
                name: "4.5 Bedroom Villa",
                link: "/4.5-bedroom-villa",
            },
        ],
    },
    {
        id: 4,
        name: "Sustainability",
        link: "/sustainability",
    },
    {
        id: 5,
        name: "Events & More",
        link: "/events-and-more",
    },
    {
        id: 6,
        name: "About Us",
        link: "/about-us",
    },
    {
        id: 7,
        name: "Contact Us",
        link: "/contact-us",
    },
]