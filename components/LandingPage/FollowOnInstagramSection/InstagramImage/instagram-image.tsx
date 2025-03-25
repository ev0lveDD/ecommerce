'use client';

import React from "react";
import Image from "next/image";
import { useState } from "react";

import instagramIcon from "@/public/instagram-icon-white.svg";

interface InstagramImageProps {
    instagramImageData: {
        imageSrc: string,
        imageAlt: string
    }
}

export default function InstagramImage({instagramImageData}: InstagramImageProps) {
    const [isIconHover, setIsIconHover] = useState<boolean>(false);

    function onMouseEnter(): void {
        setIsIconHover(true);
    }
    function onMouseLeave(): void {
        setIsIconHover(false);
    }

    return(
        <a href={'https:\\www.instagram.com'} target={'_blank'}> 
            <div className="w-46 h-46 relative cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Image src={instagramImageData.imageSrc} alt={instagramImageData.imageAlt}/>
                {isIconHover ?
                    <div className="w-full h-full absolute top-0 left-0 bg-black/50 flex items-center justify-center animate-appear">
                        <Image src={instagramIcon} alt="Instagram Icon" height={32} width={32}/>
                    </div>
                : null}
            </div>
        </a>
    );
}