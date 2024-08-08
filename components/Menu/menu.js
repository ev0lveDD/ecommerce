'use client'

import Image from "next/image"
import { useState } from "react";

import balmainLogo from "@/public/Balmain_logo.svg"
import ShoppingCart from "./ShoppingCart/shopping-cart";

export default function Menu() {

    const [cartCounter, setCartCounter] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    function handleClick(){
        setIsOpen(!isOpen);
    }

    return(
        <nav className="min-w-screen flex items-center justify-center bg-white border-b border-grey-lighter">
            <div className="flex justify-between items-center w-11/12 my-6 md:my-4">
                <Image alt="Website Logo" width={65} height={50} src={balmainLogo} className="cursor-pointer z-50"/>
                <button className="flex flex-col justify-center items-center md:hidden order-first z-50" onClick={handleClick}>
                    <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out  ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>

                {/* Mobile menu */}
                {isOpen ? 
                    <div className="flex content-center justify-center absolute m-auto left-0 right-0 top-20 w-full h-96 bg-white z-50">
                            <ul className="flex flex-col justify-center items-start gap-6 md:hidden w-4/5">
                                <li className="text-md cursor-pointer group transition duration-300">MEN
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                </li>
                                <li className="text-md cursor-pointer group transition duration-300">WOMEN
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                </li>
                                <li className="text-md cursor-pointer group transition duration-300">KIDS
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                </li>
                                <li className="text-md cursor-pointer group transition duration-300">SALE
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                </li>
                            </ul>
                    </div>
                : null}

                {/* Tablet and higher resolution menu */}
                <div className="hidden md:flex">
                    <ul className="flex justify-center items-center gap-6">
                        <li className="text-sm cursor-pointer group transition duration-300">MEN
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </li>
                        <li className="text-sm cursor-pointer group transition duration-300">WOMEN
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </li>
                        <li className="text-sm cursor-pointer group transition duration-300">KIDS
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </li>
                        <li className="text-sm cursor-pointer group transition duration-300">SALE
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </li>
                    </ul>
                </div>
                <ShoppingCart cartCounter={cartCounter}/>
            </div>
        </nav>
    )
}