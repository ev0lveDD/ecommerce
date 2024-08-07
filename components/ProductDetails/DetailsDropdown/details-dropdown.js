import Image from "next/image";
import { useState } from "react";


import downArrow from "@/public/down-arrow.svg"

export default function DetailsDropdown ({dropdownTitle, dropdownId, children}) {

    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <details id={dropdownId} className="py-4 border-b border-grey-lighter cursor-pointer">
            <summary className="flex items-center" onClick={()=>setIsExpanded(!isExpanded)}>
                <p className="font-medium">{dropdownTitle}</p>
                <span className={`ml-auto transition ease-in-out ${isExpanded ? "rotate-180" : null}`}>
                    <Image src={downArrow} height={10} width={10} alt="Down arrow"/>
                </span>
            </summary>
            {children}
      </details>
    );
}