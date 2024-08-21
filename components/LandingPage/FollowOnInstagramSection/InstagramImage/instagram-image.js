'use client';

import Image from "next/image";
import { useState } from "react";

import instaImage1 from "@/public/instagram/01.png";

export default function InstagramImage() {
    return(
        <div className="w-[125px] h-[125px] relative">
            <Image src={instaImage1} alt="Follow Instagram Picture 1" height={125} width={125}/>
            <div className="w-[125px] h-[125px] absolute top-0 left-0 bg-black/50">
                
            </div>
        </div>
    );
}