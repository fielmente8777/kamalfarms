
import Link from "next/link"

interface LinkProps {
    href: string;
    text: string;
}
const LinkComponent: React.FC<LinkProps> = ({ href, text }) => {
    return (
        <Link href={href} className="underline capitalize text-primary">{text}</Link>
    )
}

export default LinkComponent