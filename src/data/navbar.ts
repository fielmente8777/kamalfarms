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
        subLinks: [
            {
                id: 1,
                name: "Home",
                link: "/",
            },
            {
                id: 2,
                name: "Home",
                link: "/",
            },
        ],
    },
]