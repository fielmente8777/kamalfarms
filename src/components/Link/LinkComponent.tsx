import Link from "next/link";

interface LinkProps {
  href: string;
  text: string;
  newTab?: boolean;
}
const LinkComponent: React.FC<LinkProps> = ({ href, text, newTab = false }) => {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : "_self"}
      className="text-primary font-medium border-primary/60 border-b-2 w-fit description1"
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
