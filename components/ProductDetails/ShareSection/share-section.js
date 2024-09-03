import Image from "next/image";

import facebookIcon from "@/public/facebook.svg";
import instagramIcon from "@/public/instagram.svg";
import twitterIcon from "@/public/twitter.svg";
import messengerIcon from "@/public/messenger-icon.svg";

export default function ShareSection() {
    return(
        <div className="w-full flex flex-col gap-2">
            <p className="font-medium">SHARE</p>
            <div className="flex flex-row justify-start items-center gap-2">
                <div className="flex items-center justify-center rounded-full cursor-pointer z-50">
                    <Image alt="Facebook icon" width={36} height={36} src={facebookIcon} className=""/>
                </div>
                <div className="flex items-center justify-center rounded-full cursor-pointer z-50">
                    <Image alt="Instagram icon" width={36} height={36} src={instagramIcon} className=""/>
                </div>
                <div className="flex items-center justify-center rounded-full cursor-pointer z-50">
                    <Image alt="Twitter icon" width={32}height={32} src={twitterIcon} className=""/>
                </div> 
                <div className="flex items-center justify-center rounded-full cursor-pointer z-50">
                    <Image alt="Messenger icon" width={36}height={36} src={messengerIcon} className=""/>
                </div> 
            </div>
        </div>
    );
}