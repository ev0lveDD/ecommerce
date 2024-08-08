'use client'

import { useState } from "react";
import Image from "next/image";

export default function ProductListItem({image1, image2, itemName, itemPrice}) {

    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    return(
        <div className="flex flex-col gap-2 justify-center items-start cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {isHovering ? 
            <Image className="w-full" alt="product image" src={image2}/> : 
            <Image className="w-full" alt="product image" src={image1}/>
            }
            <div className="flex flex-col justify-center items-start">
                <p className="font-medium text-sm">{itemName}</p>
                <p className="font-medium text-gray-400 text-sm">${itemPrice}.00</p>
            </div>
        </div>
    );
}