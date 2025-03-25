'use client';
import React from "react";
import Image from "next/image";
import { useState } from "react";

interface BiStyleImageProps {
    bigImageData: {
        imgSource: string,
        isOnSale: boolean
    }
}

export default function BigStyleImage({bigImageData}: BiStyleImageProps) {

    const [styleIsHovering, setStyleIsHovering] = useState<boolean>(false);

    function onMouseEnter(): void {
        setStyleIsHovering(true);
    }
    
    function onMouseLeave(): void {
        setStyleIsHovering(false);
    }

    return(
        <div className="col-span-2 row-span-2 w-full h-full cursor-pointer relative overflow-hidden" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Image src={bigImageData.imgSource} alt="First Popular Style" className="m-0 p-0 object-contain object-top"/>

            {styleIsHovering ? 
                <div className="bg-gray-800 h-8 w-full absolute left-0 bottom-0 flex items-center justify-between p-2">
                    <p className="text-white text-[11px]">Shoes</p>
                    <p className="text-white text-[11px]">86 Product</p>
                </div>
            : null}

            {bigImageData.isOnSale ?
                <div className="bg-gray-800 h-4 w-8 absolute left-0 top-4 flex items-center justify-center">
                    <p className="text-white text-[8px]">SALE</p>
                </div>
            : null}

        </div>
    );
}