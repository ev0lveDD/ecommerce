import Image from "next/image";

import balmainLogo from "@/public/Balmain_logo.svg";
import facebookIcon from "@/public/facebook.svg";
import instagramIcon from "@/public/instagram.svg";
import twitterIcon from "@/public/twitter.svg";

export default function Footer(){
    return(
        <nav className="min-w-screen flex items-center justify-center bg-white border-t border-grey-lighter">
            <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center w-11/12 my-4">

                <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/3 my-4">
                    <Image alt="Website Logo" width={65} height={50} src={balmainLogo} className="cursor-pointer z-50"/>
                    <p className="text-xs text-gray-600 text-center md:text-left">
                        Online brand clothing store founded in 2013 in Rome.
                        Balmain focuses on selling only quality and branded items, limited edition
                        collections by fashion designers.
                    </p>

                    {/* Social Media */}
                    <div className="flex flex-row justify-center md:justify-start items-center gap-4">
                        <div className="flex items-center justify-center rounded-full cursor-pointer z-50">
                            <Image alt="Facebook icon" width={30} height={30} src={facebookIcon} className=""/>
                        </div>
                        <div className="flex items-center justify-center rounded-full cursor-pointer z-50">
                            <Image alt="Instagram icon" width={30} height={30} src={instagramIcon} className=""/>
                        </div>
                        <div className="flex items-center justify-center rounded-full cursor-pointer z-50">
                            <Image alt="Twitter icon" width={26}height={26} src={twitterIcon} className=""/>
                        </div> 
                    </div>
                </div>

                <div className="h-full flex flex-col gap-4 my-4 justify-start w-full md:w-auto">
                    <p className="text-sm font-bold">NAVIGATION</p>
                    <ul className="flex flex-col gap-2 md:gap-1">
                        <li><p className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer">MEN</p></li>
                        <li><p className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer">WOMEN</p></li>
                        <li><p className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer">KIDS</p></li>
                        <li><p className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer">SALE</p></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}