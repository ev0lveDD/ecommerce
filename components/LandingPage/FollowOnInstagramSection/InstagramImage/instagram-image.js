'use client';

import Image from "next/image";
import { useState } from "react";

import instagramIcon from "@/public/instagram-icon-white.svg";

export default function InstagramImage({imageSrc, imageAlt}) {
    const [isIconHover, setIsIconHover] = useState(false);

    const onMouseEnter = () => setIsIconHover(true);
    const onMouseLeave = () => setIsIconHover(false);

    return(
        <div className="w-[125px] h-[125px] relative cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Image src={imageSrc} alt={imageAlt} height={125} width={125}/>
            {isIconHover ?
                <div className="w-[125px] h-[125px] absolute top-0 left-0 bg-black/50 flex items-center justify-center animate-appear">
                    <Image src={instagramIcon} alt="Instagram Icon" height={32} width={32}/>
                </div>
            : null}
        </div>
    );
}