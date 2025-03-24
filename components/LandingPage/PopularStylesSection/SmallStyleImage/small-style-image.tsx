'use client';

import React from "react";
import Image from "next/image";
import { useState } from "react";

interface SmallImageProps {
    smallImageData: {
        imgSource: string,
        altDescription: string,
        gridPosition: string,
        productType: string,
        productQuantity: number,
        isOnSale: boolean
    }
}

export default function SmallStyleImage({smallImageData}: SmallImageProps) {

    const [styleIsHovering, setStyleIsHovering] = useState(false);

    const onMouseEnter = () => setStyleIsHovering(true);
    const onMouseLeave = () => setStyleIsHovering(false);

    return(
        <div className={`${smallImageData.gridPosition} w-full h-full cursor-pointer relative`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Image src={smallImageData.imgSource} alt={smallImageData.altDescription} className="m-0 p-0 w-full h-full"/>

            {styleIsHovering ? 
                <div className="bg-gray-800 h-8 w-full absolute left-0 bottom-0 flex items-center justify-between p-2">
                    <p className="text-white text-[11px]">{smallImageData.productType}</p>
                    <p className="text-white text-[11px]">{smallImageData.productQuantity} Product</p>
                </div>
            : null}
            
            {smallImageData.isOnSale ?
                <div className="bg-gray-800 h-4 w-8 absolute left-0 top-4 flex items-center justify-center">
                    <p className="text-white text-[8px]">SALE</p>
                </div>
            : null}
            
        </div>
    );
}