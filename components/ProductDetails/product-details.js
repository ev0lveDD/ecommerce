'use client';

import Image from "next/image";
import { useState } from "react";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";

import downArrow from "@/public/down-arrow.svg"

export default function ProductDetails() {

    const buttonNotActive = "border border-2 border-black py-0.5 px-3 rounded rounded-lg text-sm hover:border-gray-800";
    const buttonActive = "border border-2 border-black bg-black text-white py-0.3 px-3 rounded rounded-xl text-sm hover:bg-gray-800 hover:border-gray-800";
    
    const [selectedButton, setSelectedButton] = useState("");

    return(
        <div className="bg-white min-w-screen flex items-center justify-center">
            <div className="w-11/12 grid grid-cols-2 gap-4">
                <div className="w-full flex flex-col gap-4 items-center justify-start">
                    <Image className="w-full h-1/3" alt="big item image" src={crewNeck1}/>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <Image className="w-full" alt="small item image 1" src={crewNeck3}/>
                        <Image className="w-full" alt="small item image 1" src={crewNeck2}/>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 my-8">
                    {/* Header and price */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-medium">
                            BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT
                        </h1>
                        <p className="text-lg font-medium text-red-500">
                            $595.00
                        </p>
                    </div>
                    {/* Description */}
                    <p className="text-slate-600">
                        Hinting at the brands penchant for logomania, Balmain presents this sweatshirt as part of its SS23 offering. Crafted from cotton, the long-sleeved design is adorned with a contrasting logo print at the chest.
                    </p>
                    {/* Color Pick section */}
                    <div>
                        <p className="text-lg font-medium">Color</p>
                        <div className="flex gap-2">
                            <div >
                                <input id="color-radio-1" type="radio" value="" name="color-radio" className="bg-green-600 text-green-600 border-2 border-green-600 focus:ring-green-600 focus:ring-2 "></input>
                                <label></label>
                            </div>
                            <div>
                                <input id="color-radio-2" type="radio" value="" name="color-radio"></input>
                                <label></label>
                            </div>
                        </div>
                    </div>
                    {/* Size Pick section */}
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-medium">Size</p>
                        <div className="flex gap-4">
                            <button className={selectedButton === "XS" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("XS")}>XS</button>
                            <button className={selectedButton === "S" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("S")}>S</button>
                            <button className={selectedButton === "M" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("M")}>M</button>
                            <button className={selectedButton === "L" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("L")}>L</button>
                            <button className={selectedButton === "XL" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("XL")}>XL</button>
                        </div>
                    </div>

                    <button className="bg-black text-white py-4 px-3 rounded rounded-md text-sm hover:bg-gray-800">
                        ADD TO CART
                    </button>

                    <details className="py-4 border-b border-grey-lighter cursor-pointer">
                        <summary className="flex items-center">CHARACTERISTICS
                            <button className="ml-auto transition ease-in-out focus:rotate-180">
                                <Image src={downArrow} height={10} width={10} alt="Down arrow"/>
                            </button>
                        </summary>
                        <p className="py-4 text-sm">
                            Hinting at the brands penchant for logomania, Balmain presents this sweatshirt as part of its SS23 offering. Crafted from cotton, the long-sleeved design is adorned with a contrasting logo print at the chest.
                        </p>
                    </details>

                    <details className="py-4 border-b border-grey-lighter cursor-pointer">
                        <summary className="flex items-center">PAYMENT & DELIVERY
                            <button className="ml-auto transition ease-in-out focus:rotate-180">
                                <Image src={downArrow} height={10} width={10} alt="Down arrow"/>
                            </button>
                        </summary>
                        <p className="py-4 text-sm">
                            Hinting at the brands penchant for logomania, Balmain presents this sweatshirt as part of its SS23 offering. Crafted from cotton, the long-sleeved design is adorned with a contrasting logo print at the chest.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
}