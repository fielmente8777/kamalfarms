"use client";
import Link from "next/link";
import Container from "./Container";
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
          <div className="flex flex-col items-center ">
            <Link href="/" className="relative h-20 aspect-[4/2]">
              <Image
                src="/Logo.svg"
                alt="Kamalfarms"
                fill
                className="object-contain"
              />
            </Link>
            <span className="text-2xl capitalize tracking-wider font-bold text-primary nexa -mt-2">
              <LogoName />
            </span>
          </div>
          <div className="lg:flex hidden items-center gap-4 text-base">
            <div className="flex items-center gap-4 text-base relative">
              {NavLink.slice(1, NavLink.length - 1).map((link) => (
                <span key={link.id} className="group relative text-primary">
                  <Link
                    href={link.link}
                    className={`flex items-center justify-center gap-2 px-4 py-2 duration-700 transition ease-linear hover:border-primary border-b-2 border-transparent ${
                      pathname === link.link
                        ? "border-primary border-b-2 font-medium text-white"
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
                  {link.subLinks && (
                    <ul className="absolute left-0 w-max max-w-[300px] hidden group-hover:block bg-white shadow-lg p-1">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.id}>
                          <Link
                            href={subLink.link}
                            className={`block px-4 py-2 duration-300 transition ease-in-out hover:border-primary border-b-2 border-transparent  ${
                              pathname === link.link
                                ? "border-primary border-b-2 font-medium text-white"
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
            <button className="bg-primary text-white px-6 py-5">
              Contact Us
            </button>
          </div>
          <div className="lg:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-primary text-3xl`}
            >
              {isOpen ? <IoMdClose /> : <CiMenuBurger />}
            </button>

            <div
              className={`fixed top-20 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <MobileNavbar />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
