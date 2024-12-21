import Link from "next/link";
import Container from "./Container";
import { NavLink } from "@/data/navbar";
import { DropDown } from "@/icons/icons";
const Navbar = () => {
  return (
    <header>
      <Container>
        <nav className="flex justify-between items-center">
          <div>logo</div>
          <div className="flex items-center gap-4 text-base">
            <ul className="flex items-center gap-4 text-base relative">
              {NavLink.slice(1, NavLink.length - 1).map((link) => (
                <li key={link.id} className="group relative text-primary">
                  <Link href={link.link} className="flex items-center justify-center gap-2 px-4 py-2">
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
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
