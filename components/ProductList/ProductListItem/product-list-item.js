'use client'

import { useState } from "react";
import Image from "next/image";

export default function ProductListItem({image1, image2, itemName, itemPrice, isOnSale}) {

    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    return(
        <div className="flex flex-col gap-2 justify-center items-start cursor-pointer relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {isHovering ? 
            <Image className="w-full" alt="product image" src={image2}/> : 
            <Image className="w-full" alt="product image" src={image1}/>
            }
            <div className="flex flex-col justify-center items-start gap-2">
                <p className="font-bold text-[10px]">{itemName}</p>
                <p className="font-bold text-gray-600 text-[10px]">${itemPrice}.00</p>
            </div>

            {isOnSale ?
                <div className="bg-gray-800 h-4 w-8 absolute left-0 top-4 flex items-center justify-center">
                    <p className="text-white text-[8px]">SALE</p>
                </div>
            : null}

        </div>
    );
}