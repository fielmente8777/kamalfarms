"use client";
import { NavLink } from "@/data/navbar";
import Container from "./Container";
import Link from "next/link";
import { DropDown } from "@/icons/icons";
import { usePathname } from "next/navigation";

export const MobileNavbar = () => {
    const pathname = usePathname();
    return (
      <header>
        <Container>
          <nav className="flex flex-col gap-4 w-full h-full">
            {NavLink.slice(1, NavLink.length - 1).map((link) => (
              <div key={link.id} className="group relative text-primary">
                <Link
                  href={link.link}
                  className={`flex items-center gap-2 px-2 py-2 ${
                    pathname === link.link
                      ? "border-primary border-l-2 text-white"
                      : ""
                  }`}
                >
                  {link.name}{" "}
                  {link.subLinks && (
                    <span className="ml-2">
                      <DropDown />
                    </span>
                  )}
                </Link>
                {link.subLinks && (
                  <ul className="absolute left-0 w-max hidden group-hover:block bg-white shadow-lg">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.id}>
                        <Link href={subLink.link} className="block px-4 py-2">
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <button className="bg-primary text-white px-6 py-3 w-fit">
              Contact Us
            </button>
          </nav>
        </Container>
      </header>
    );
  };
  