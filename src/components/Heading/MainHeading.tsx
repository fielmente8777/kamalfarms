import React from "react";

interface HeadingProps {
    title: string;
}

const MainHeading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <h1 className="heading4 nexa text-secondary tracking-wider font-semibold">
            {title}
        </h1>
    );
};

export default MainHeading;
