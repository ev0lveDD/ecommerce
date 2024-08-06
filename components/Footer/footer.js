import Image from "next/image";

import balmainLogo from "@/public/Balmain_logo.svg";
import facebookIcon from "@/public/facebook-icon.svg";
import instagramIcon from "@/public/instagram-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";

export default function Footer(){
    return(
        <nav className="min-w-screen flex items-center justify-center bg-white">
            <div className="flex flex-col gap-4 md:flex-row justify-between items-center w-11/12 my-8">
                <p className="text-xs">Copyright © 2024 Balmain Inc. All rights reserved.</p>
                <Image alt="Website Logo" width={65} height={50} src={balmainLogo} className="cursor-pointer z-50"/>

                {/* Social Media */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-sm font-medium">Follow Us</p>
                    <div className="flex items-center justify-center rounded-full border border-2 border-transparent hover:border-black cursor-pointer z-50">
                        <Image alt="Facebook icon" width={20} height={20} src={facebookIcon} className="m-1.5"/>
                    </div>
                    <div className="flex items-center justify-center rounded-full border border-2 border-transparent hover:border-black cursor-pointer z-50">
                        <Image alt="Instagram icon" width={20} height={20} src={instagramIcon} className="m-1.5"/>
                    </div>
                    <div className="flex items-center justify-center rounded-full border border-2 border-transparent hover:border-black cursor-pointer z-50">
                        <Image alt="Youtube icon" width={20} height={20} src={youtubeIcon} className="m-1.5"/>
                    </div> 
                </div>
            </div>
        </nav>
    );
}