'use client';

import Image from "next/image";
import { useState } from "react";

import DetailsDropdownSection from "./DetailsDropdown Section/details-dropdown-section";
import ColorPickInput from "./ColorPickInput/color-pick-input";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

export default function ProductDetails() {

    const buttonNotActive = "flex item-center justify-center w-12 border border-black border-opacity-10 py-0.5 px-3 rounded rounded-md text-sm hover:border-gray-800 font-medium";
    const buttonActive = "flex item-center justify-center w-12 border border-black bg-black text-white py-0.5 px-3 rounded rounded-md text-sm hover:bg-gray-800 hover:border-gray-800 font-medium";
    
    const [selectedButton, setSelectedButton] = useState("");
    const [colorPicked, setColorPicked] = useState("");

    return(
        <div className="bg-white min-w-screen flex items-center justify-center">
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-11/12 flex flex-col gap-4 items-center justify-start">
                    <Image className="w-full h-1/3 animate-slidein" alt="big item image" src={crewNeck1}/>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <Image className="w-full" alt="small item image 1" src={crewNeck3}/>
                        <Image className="w-full" alt="small item image 1" src={crewNeck2}/>
                    </div>
                    <Image className="w-full h-1/3" alt="big item image" src={crewNeck4}/>
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
                    <div className="flex flex-col gap-4">
                        <p className="text-lg font-medium">Color</p>
                        <div className="flex gap-4">
                            <ColorPickInput colorPickInputId="color-radio-1" colorName="white" colorNameCSS="bg-white-200" colorPicked={colorPicked} setColorPicked={setColorPicked}/>
                            <ColorPickInput colorPickInputId="color-radio-2" colorName="gray" colorNameCSS="bg-gray-200" colorPicked={colorPicked} setColorPicked={setColorPicked}/>
                            <ColorPickInput colorPickInputId="color-radio-3" colorName="black" colorNameCSS="bg-black" colorPicked={colorPicked} setColorPicked={setColorPicked}/>
                            <ColorPickInput colorPickInputId="color-radio-4" colorName="green" colorNameCSS="bg-green-800" colorPicked={colorPicked} setColorPicked={setColorPicked}/>
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

                    <DetailsDropdownSection />

                </div>
            </div>
        </div>
    );
}