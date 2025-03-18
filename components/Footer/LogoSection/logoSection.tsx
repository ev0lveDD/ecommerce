import React from "react"; 
import Image from "next/image";
import SocialMediaSection from "../SocialMediaSection/socialMediaSection";
import balmainLogo from "@/public/Balmain_logo.svg";

export default function LogoSection() {
    return(
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/3 my-4">
        <div className="w-[65px] h-[50px] cursor-pointer relative">
            <Image alt="Website Logo" fill src={balmainLogo} />
        </div>
        <p className="text-xs text-gray-600 text-center md:text-left">
            Online brand clothing store founded in 2013 in Rome.
            Balmain focuses on selling only quality and branded items, limited edition
            collections by fashion designers.
        </p>

        {/* Social Media */}
        <SocialMediaSection />
    </div>
    );
}