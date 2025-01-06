"use client";
import Link from "next/link";
import Container from "../SectionComponents/Container";
import { NavLink } from "@/data/navbar";
import { DropDown, LogoName } from "@/icons/icons";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./MobileNavbar";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-transparent relative top-0 left-0 w-full z-50 pb-2">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex flex-col ">
            <span className="relative lg:h-20 h-14 lg:aspect-[4/2] aspect-[4/1.35]">
              <Image
                src="/Logo.svg"
                alt="Kamalfarms"
                fill
                className="object-contain"
              />
            </span>
            <span className="-inset-0.5 lg:h-[2rem] h-7 lg:aspect-[4/2] aspect-[4/1.35] top-0 relative ">
              <span className="absolute top-0 left-0"><LogoName /></span>
            </span>
          </Link>
          <div className="lg:flex hidden items-center gap-4 text-base">
            <div className="flex items-center gap-4 text-base relative">
              {NavLink.slice(1, NavLink.length - 1).map((link) => (
                <span key={link.id} className="group relative text-primary">
                  {link.id === 2 || link.id === 3 ? (
                    <span
                      className={`flex items-center justify-center gap-2 px-4 cursor-pointer py-2 duration-700 transition ease-linear hover:border-primary border-b-2 border-transparent ${
                        pathname === link.subLinks?.[0]?.link
                          ? "font-medium"
                          : ""
                      }`}
                    >
                      {link.name}{" "}
                      {link.subLinks && (
                        <span className="ml-2 group-hover:rotate-180 duration-500 transition ease-in-out">
                          <DropDown />
                        </span>
                      )}
                    </span>
                  ) : (
                    <Link
                      href={link.link}
                      className={`flex items-center justify-center gap-2 px-4 py-2 duration-700 transition ease-linear hover:border-primary border-b-2 border-transparent ${
                        pathname === link.link
                          ? "!border-primary font-medium"
                          : ""
                      }`}
                    >
                      {link.name}{" "}
                      {link.subLinks && (
                        <span className="ml-2 group-hover:rotate-180 duration-500 transition ease-in-out">
                          <DropDown />
                        </span>
                      )}
                    </Link>
                  )}
                  {link.subLinks && (
                    <ul className="absolute left-0 w-max max-w-[300px] hidden group-hover:block bg-white shadow-lg p-1">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.id}>
                          <Link
                            href={subLink.link}
                            className={`block px-4 py-2 duration-300 transition ease-in-out hover:border-primary border-b-2 border-transparent  ${
                              pathname === subLink.link
                                ? "!border-primary font-medium"
                                : ""
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              ))}
            </div>
            <Link
              href="/contact-us"
              className="bg-primary text-white px-6 py-5"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-primary text-3xl ${isOpen ? "rotate-180" : ""} transition duration-300 ease-in-out`}
            >
              {isOpen ? <IoMdClose /> : <CiMenuBurger />}
            </button>

            <div
              className={`fixed top-24 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <MobileNavbar setIsOpen={setIsOpen} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
