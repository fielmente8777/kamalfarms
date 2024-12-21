import Link from "next/link";
import Container from "./Container";
import { IoIosCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
const Navbar = () => {
  return (
    <header>
      <Container>
        <nav className="flex justify-between items-center py-6">
          <div>logo</div>
          <div className="flex items-center gap-4 text-base">
            <Link href="href" className="flex items-center gap-2">
              <span className="">
                <IoIosCall size={20} />
              </span>
              <span className="lg:block hidden">+234 123 456 7890</span>
            </Link>
            <Link href="href" className="flex items-center gap-2">
              <span>
                <SiMinutemailer size={20} />
              </span>
              <span className="lg:block hidden">WmF8B@example.com</span>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
