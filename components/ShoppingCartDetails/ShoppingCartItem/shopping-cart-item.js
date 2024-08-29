'use client';

import Image from "next/image";
import { useState } from "react";


export default function ShoppingCartItem({cartItemImage, cartItemName, cartItemPrice, cartItemVariant, cartItemSize, cartItemColor}) {

    const [itemQuantity, setItemQuantity] = useState(1);

    const raiseQuantity = () => setItemQuantity(itemQuantity+1);
    const lowerQuantity = () => {if(itemQuantity>1) {
        setItemQuantity(itemQuantity-1);
    } else {
        null;
    }};

    return(
        <div className="w-full h-48 flex items-start justify-between border-b border-grey-lighter gap-4">
            <Image className="h-40 w-52 my-4 object-cover object-fill" alt="Item image" src={cartItemImage}/>
            <div className="w-full min-h-40 flex flex-col items-start justify-between gap-4 my-4">
                <div className="flex flex-col gap-3 w-full">
                    <div className="w-full h-full flex items-start justify-between">
                        <p className="font-bold text-sm">{cartItemName}</p>
                        <p className="font-bold text-sm">${cartItemPrice},00</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Variant: </p>
                            <p className="text-gray-400 font-semibold text-xs">{cartItemVariant}</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Size: </p>
                            <p className="text-gray-400 font-semibold text-xs">{cartItemSize}</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Color:</p>
                            <p className="text-gray-400 font-semibold text-xs">{cartItemColor}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex items-start justify-between">
                    <button className="bg-black text-white py-1 px-2 rounded rounded-md text-xs hover:bg-gray-800">
                        DELETE ITEM
                    </button>
                    <div className="flex items-center justify-center gap-2">

                        {itemQuantity===1 ? 
                            <button disabled className="bg-white text-gray-300 font-black text-md py-1 px-2.5 rounded rounded-full border border-2 border-gray-300 text-xs hover:text-gray-500 hover:border-gray-500" onClick={lowerQuantity}>-</button> 
                        :
                            <button className="bg-white text-black font-black text-md py-1 px-2.5 rounded rounded-full border border-2 border-black text-xs hover:text-gray-600 hover:border-gray-600" onClick={lowerQuantity}>-</button>
                        }

                        <p className="text-black font-bold text-md">{itemQuantity}</p>
                        <button className="bg-white text-black font-black text-md py-1 px-2 rounded rounded-full border border-2 border-black text-xs hover:text-gray-600 hover:border-gray-600" onClick={raiseQuantity}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}