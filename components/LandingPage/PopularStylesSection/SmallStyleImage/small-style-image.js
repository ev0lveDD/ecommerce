'use client';

import Image from "next/image";
import { useState } from "react";

export default function SmallStyleImage({imgSource, altDescription, gridPosition, productType, productQuantity, isOnSale}) {

    const [styleIsHovering, setStyleIsHovering] = useState(false);

    const onMouseEnter = () => setStyleIsHovering(true);
    const onMouseLeave = () => setStyleIsHovering(false);

    return(
        <div className={`${gridPosition} w-full h-full cursor-pointer relative`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Image src={imgSource} alt={altDescription} className="m-0 p-0 object-contain" fill/>

            {styleIsHovering ? 
                <div className="bg-gray-800 h-8 w-full absolute left-0 bottom-0 flex items-center justify-between p-2">
                    <p className="text-white text-[11px]">{productType}</p>
                    <p className="text-white text-[11px]">{productQuantity} Product</p>
                </div>
            : null}
            
            {isOnSale ?
                <div className="bg-gray-800 h-4 w-8 absolute left-0 top-4 flex items-center justify-center">
                    <p className="text-white text-[8px]">SALE</p>
                </div>
            : null}
            
        </div>
    );
}