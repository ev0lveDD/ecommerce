'use client'

import Image from "next/image"
import { useState } from "react";

import vercelLogo from "@/public/vercel.svg"

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    function handleClick(){
        setIsOpen(!isOpen);
    }

    return(
        <nav className="min-w-screen flex items-center justify-center">
            <div className="flex justify-between items-center w-4/5 my-8">
                <Image alt="Website Logo" width={50} height={50} src={vercelLogo} className="cursor-pointer"/>
                <button className="flex flex-col justify-center items-center md:hidden" onClick={handleClick}>
                    <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out  ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>

                {/* Mobile menu */}
                {isOpen ? 
                    <div className="flex content-center justify-center rounded-md border-2 border-slate-200 absolute m-auto left-0 right-0 top-0 bottom-0 w-4/5 h-96">
                            <ul className={"flex flex-col justify-center items-center gap-6 md:hidden"}>
                                <li className="text-sm cursor-pointer hover:text-gray-500">LINK 1</li>
                                <li className="text-sm cursor-pointer hover:text-gray-500">LINK 2</li>
                                <li className="text-sm cursor-pointer hover:text-gray-500">LINK 3</li>
                                <li className="text-sm cursor-pointer hover:text-gray-500">LINK 4</li>
                            </ul>
                    </div>
                : null}

                {/* Tablet and higher resolution menu */}
                <div className="hidden md:flex">
                    <ul className="flex justify-center items-center gap-6">
                        <li className="text-sm cursor-pointer hover:text-gray-500">LINK 1</li>
                        <li className="text-sm cursor-pointer hover:text-gray-500">LINK 2</li>
                        <li className="text-sm cursor-pointer hover:text-gray-500">LINK 3</li>
                        <li className="text-sm cursor-pointer hover:text-gray-500">LINK 4</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}