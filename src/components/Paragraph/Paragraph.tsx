
interface Paragraph {
    text: string;
    className?: string;
}
const Paragraph: React.FC<Paragraph> = ({ text, className = "" }) => {
    return (
        <p className={`${className}  text-textdark`} dangerouslySetInnerHTML={{ __html: text}}></p>
    )
}

export default Paragraph