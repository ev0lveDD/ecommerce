import React from "react";


interface SectionHeadlineProps {
    headlineData: {
        headlineText: String;
    }
}

export default function SectionHeadline({headlineData} : SectionHeadlineProps) {
    return(
        <h1 className="font-bold text-3xl text-center mb-8">
            {headlineData ? 
            headlineData.headlineText 
            : 
            null}
        </h1>
    );
}