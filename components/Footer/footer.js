import Image from "next/image";

import balmainLogo from "@/public/Balmain_logo.svg"

export default function Footer(){
    return(
        <nav className="min-w-screen flex items-center justify-center bg-white">
            <div className="flex justify-between items-center w-11/12 my-8">
                <Image alt="Website Logo" width={65} height={50} src={balmainLogo} className="cursor-pointer z-50"/>
                <div className="hidden md:flex">
                    <ul className="flex justify-center items-center gap-6">
                        <li className="text-sm cursor-pointer group transition duration-300">Link 1
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </li>
                        <li className="text-sm cursor-pointer group transition duration-300">Link 2
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </li>
                        <li className="text-sm cursor-pointer group transition duration-300">Link 3
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </li>
                        <li className="text-sm cursor-pointer group transition duration-300">Link 4
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                </div>
            </div>
        </nav>
    );
}