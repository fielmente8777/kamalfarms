"use client";
import Link from "next/link";
import Container from "./Container";
import { NavLink } from "@/data/navbar";
import { DropDown } from "@/icons/icons";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="relative h-20 aspect-[4/2]">
              <Image
                src="/Logo.svg"
                alt="Kamalfarms"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <div className="lg:flex hidden items-center gap-4 text-base">
            <ul className="flex items-center gap-4 text-base relative">
              {NavLink.slice(1, NavLink.length - 1).map((link) => (
                <li key={link.id} className="group relative text-primary">
                  <Link
                    href={link.link}
                    className="flex items-center justify-center gap-2 px-4 py-2"
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
                </li>
              ))}
            </ul>
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
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

export const MobileNavbar = () => {
  return (
    <header>
      <Container>
        <nav className="flex flex-col justify-between items-center">
          {NavLink.slice(1, NavLink.length - 1).map((link) => (
            <li key={link.id} className="group relative text-primary">
              <Link
                href={link.link}
                className="flex items-center justify-center gap-2 px-4 py-2"
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
            </li>
          ))}
          <button className="bg-primary text-white px-6 py-5">
            Contact Us
          </button>
        </nav>
      </Container>
    </header>
  );
};
