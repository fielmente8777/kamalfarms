import React from "react";

interface HeadingProps {
    title: string;
    className?: string;
}

const MainHeading: React.FC<HeadingProps> = ({ title, className = "" }) => {
    return (
        <h1 className={` ${className} heading3 nexa capitalize text-secondary tracking-wider font-bold"`}>
            {title}
        </h1>
    );
};

export default MainHeading;
