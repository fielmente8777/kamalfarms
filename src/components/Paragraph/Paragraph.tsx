
interface Paragraph {
    text: string;
    className?: string;
}
const Paragraph: React.FC<Paragraph> = ({ text, className = "" }) => {
    return (
        <p className={`${className}  text-textdark`}>{text}</p>
    )
}

export default Paragraph