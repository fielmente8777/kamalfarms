import Link from "next/link";
interface ButtonProps {
    href: string;
    label: string;
    className?: string;
}
const Button: React.FC<ButtonProps> = ({href, label,className=""}) => {
    return (
        <Link href={href} className={`text-white bg-[#29422C] text-base py-3 px-4 rounded-sm font-medium hover:bg-[#1A2E1A] transition-colors duration-300 ease-in-out ${className}`}>
            {label}
        </Link>
    );
}

export default Button;