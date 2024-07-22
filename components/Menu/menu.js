'use client'

import Image from "next/image"
import { useState } from "react";

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    function handleClick(){
        setIsOpen(!isOpen);
    }

    return(
        <nav className="min-w-screen flex items-center justify-center">
            <div className="flex justify-between items-center w-4/5">
                <Image alt="Website Logo" width={50} height={50}/>
                <button className="flex flex-col justify-center items-center md:hidden" onClick={handleClick}>
                    <span className="bg-slate-200 block h-0.5 w-6 rounded-sm"></span>
                    <span className="bg-slate-200 block h-0.5 w-6 rounded-sm my-1"></span>
                    <span className="bg-slate-200 block h-0.5 w-6 rounded-sm"></span>
                </button>

                {/* Mobile menu */}
                {isOpen ? 
                    <div className="">
                            <ul className={"flex flex-col justify-center items-center gap-6 md:hidden"}>
                                <li>LINK 1</li>
                                <li>LINK 2</li>
                                <li>LINK 3</li>
                                <li>LINK 4</li>
                            </ul>
                    </div>
                : null}

                {/* Tablet and higher resolution menu */}
                <div className="hidden md:flex">
                    <ul className="flex justify-center items-center gap-6">
                        <li>LINK 1</li>
                        <li>LINK 2</li>
                        <li>LINK 3</li>
                        <li>LINK 4</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}