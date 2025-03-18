import React from "react";
import Image from "next/image";

import facebookIcon from "@/public/facebook.svg"; 
import instagramIcon from "@/public/instagram.svg";
import twitterIcon from "@/public/twitter.svg";

export default function SocialMediaSection() {
    return(
        <div className="flex flex-row justify-center md:justify-start items-center gap-4">
            <div className="flex items-center justify-center rounded-full cursor-pointer">
                <Image alt="Facebook icon" width={30} height={30} src={facebookIcon} className=""/>
            </div>
            <div className="flex items-center justify-center rounded-full cursor-pointer">
                <Image alt="Instagram icon" width={30} height={30} src={instagramIcon} className=""/>
            </div>
            <div className="flex items-center justify-center rounded-full cursor-pointer">
                <Image alt="Twitter icon" width={26}height={26} src={twitterIcon} className=""/>
            </div> 
        </div>
    )
}