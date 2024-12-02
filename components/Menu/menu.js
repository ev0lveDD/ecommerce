'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import balmainLogo from "@/public/Balmain_logo.svg"
import ShoppingCart from "./ShoppingCart/shopping-cart";

export default function Menu() {

    const [cartCounter, setCartCounter] = useState(() => {
        if(typeof window !== 'undefined') {
            const localData = localStorage.getItem('localShoppingCart');
            if (localData !== null) {
                return((JSON.parse(localData)).length);
            }
        }
    });

    const [itemsInShoppingCart, setItemsInShoppingCart] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    function handleClick(){
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const localData = localStorage.getItem('localShoppingCart');
        if (localData !== null) {
            setItemsInShoppingCart(JSON.parse(localData));
            setCartCounter((JSON.parse(localData)).length)
        }
    }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);



    return(
        <nav className="min-w-screen flex h-20 items-center justify-center bg-white border-b border-grey-lighter z-50">
            <div className="flex justify-center w-full h-20 fixed items-center w-11/12 my-6 md:my-4 z-50 bg-white">
                <div className="flex justify-between h-20 fixed items-center w-11/12 my-6 md:my-4 z-50 bg-white">
                    <Link href={'/'}>
                        <div className="w-[65px] h-[50px] cursor-pointer z-50 relative">
                            <Image alt="Website Logo" fill src={balmainLogo} />
                        </div>
                    </Link>
                    <button className="flex flex-col justify-center items-center md:hidden order-first z-50" onClick={handleClick}>
                        <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                        <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out  ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-slate-200 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                    </button>

                    {/* Mobile menu */}
                    {isOpen ? 
                        <div className="flex items-center justify-center fixed m-auto left-0 right-0 top-0 w-full h-full bg-white z-40 overflow-hidden">
                                <ul className="flex flex-col justify-start items-start gap-6 md:hidden w-4/5 h-96">
                                    <Link href={'/MenProductList'} onClick={handleClick}>
                                        <li className="text-md font-medium cursor-pointer group transition duration-300 border-l-2 border-black pl-2">MEN
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                        </li>
                                    </Link>

                                    <Link href={'/WomenProductList'} onClick={handleClick}>
                                        <li className="text-md font-medium cursor-pointer group transition duration-300 border-l-2 border-black pl-2">WOMEN
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                        </li>
                                    </Link>

                                    <Link href={'/SaleProductList'} onClick={handleClick}>
                                        <li className="text-md font-medium cursor-pointer group transition duration-300 border-l-2 border-black pl-2">SALE
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                        </li>
                                    </Link>
                                </ul>
                        </div>
                    : null}

                    {/* Tablet and higher resolution menu */}
                    <div className="hidden md:flex">
                        <ul className="flex justify-center items-center gap-6">
                            <Link href={'/MenProductList'}>
                                <li className="text-sm font-regular cursor-pointer group transition duration-300">MEN
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                </li>
                            </Link>

                            <Link href={'/WomenProductList'}>
                                <li className="text-sm font-regular cursor-pointer group transition duration-300">WOMEN
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                </li>
                            </Link>

                            <Link href={'/SaleProductList'}>
                                <li className="text-sm font-regular cursor-pointer group transition duration-300">SALE
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    {isMounted ? 
                        <Link href={'/UserShoppingCart'}>
                            <ShoppingCart cartCounter={cartCounter}/>
                        </Link> 
                    : 
                    <div className="relative flex items-center justify-center rounded-full border border-2 border-transparent z-50">
                    </div>}
                    
                </div>
            </div>
        </nav>
    )
}