
import Link from "next/link"

interface LinkProps {
    href: string;
    text: string;
}
const LinkComponent: React.FC<LinkProps> = ({ href, text }) => {
    return (
        <Link href={href} className="text-primary font-medium border-primary/60 border-b-2 w-fit">{text}</Link>
    )
}

export default LinkComponent