"use client";
import { NavLink } from "@/data/navbar";
import Container from "../SectionComponents/Container";
import Link from "next/link";
import { DropDown } from "@/icons/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { IoMdClose } from "react-icons/io";

export const MobileNavbar = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const [isOpenDropdown, setIsOpenDropdown] = useState<number | null>(null);
  return (
    <header>
      <Container>
        <nav className="flex flex-col gap-4 w-full h-full pt-4">
          {/* <button onClick={() => setIsOpen(false)} className="self-end text-primary text-3xl mt-2">
            <IoMdClose />
          </button> */}
          {NavLink.slice(0, 6).map((link) => (
            <div key={link.id} className="group relative text-primary">
              {link.id === 2 || link.id === 3 ? (
                <span
                  className={`flex items-center gap-2 px-2 py-2 ${
                    pathname === link.subLinks?.[0]?.link ? "font-semibold" : ""
                  }`}
                  onClick={() => setIsOpenDropdown(link.id)}
                >
                  {link.name}{" "}
                  {link.subLinks && (
                    <span
                      className={`ml-2 transition duration-300 ease-linear ${isOpenDropdown === link.id ? "rotate-180" : ""}`}
                    >
                      <DropDown />
                    </span>
                  )}
                </span>
              ) : (
                <Link
                  href={link.link}
                  className={`flex items-center gap-2 px-2 py-2 ${
                    pathname === link.link
                      ? "font-semibold"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}{" "}
                  {link.subLinks && (
                    <span className="ml-2">
                      <DropDown />
                    </span>
                  )}
                </Link>
              )}
              {link.subLinks && isOpenDropdown === link.id && (
                <ul className=" bg-white">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.id} onClick={() => setIsOpen(false)}>
                      <Link
                        href={subLink.link}
                        className={`block px-4 py-2 ${pathname === subLink.link ? "font-semibold" : ""}`}
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-6 py-3 w-fit"
          >
            Contact Us
          </Link>
        </nav>
      </Container>
    </header>
  );
};
