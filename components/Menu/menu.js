'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import balmainLogo from "@/public/Balmain_logo.svg"
import ShoppingCart from "./ShoppingCart/shopping-cart";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterActions } from "@/app/store/counterSlice";

export default function Menu() {

    const isActive = "block max-w-full transition-all duration-300 h-0.5 bg-black";
    const isNotActive ="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-900";
    const isDesktopActive = "text-sm font-medium cursor-pointer group transition duration-300 text-black";
    const isDesktopNotActive = "text-sm font-regular cursor-pointer group transition duration-300 text-gray-600 hover:text-gray-800 hover:font-medium";

    const isMobileActive = "text-md font-medium cursor-pointer group transition duration-300 border-l-2 border-black pl-2";
    const isMobileNotActive = "text-md font-regular cursor-pointer group transition duration-300 border-l-2 text-gray-600 border-gray-600 pl-2 hover:text-gray-800 hover:font-medium hover:border-gray-800";
    const pathName = usePathname();

    const cartCounter = useSelector(state => state.counter.counter)


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
            handleCartCounterUpdate(JSON.parse(localData).length);
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
                        <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                        <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out  ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                    </button>

                    {/* Mobile menu */}
                    {isOpen ? 
                        <div className="flex items-center justify-center fixed m-auto left-0 right-0 top-0 w-full h-full bg-white z-40 overflow-hidden">
                                <ul className="flex flex-col justify-start items-start gap-6 md:hidden w-4/5 h-96">
                                    <Link href={'/MenProductList'} onClick={handleClick}>
                                        <li className={pathName === "/MenProductList" ? isMobileActive : isMobileNotActive}>MEN
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                        </li>
                                    </Link>

                                    <Link href={'/WomenProductList'} onClick={handleClick}>
                                        <li className={pathName === "/WomenProductList" ? isMobileActive : isMobileNotActive}>WOMEN
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                                        </li>
                                    </Link>

                                    <Link href={'/SaleProductList'} onClick={handleClick}>
                                        <li className={pathName === "/SaleProductList" ? isMobileActive : isMobileNotActive}>SALE
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
                                <li className={pathName === "/MenProductList" ? isDesktopActive : isDesktopNotActive}>MEN
                                    <span className={pathName === "/MenProductList" ? isActive : isNotActive}></span>
                                </li>
                            </Link>

                            <Link href={'/WomenProductList'}>
                                <li className={pathName === "/WomenProductList" ? isDesktopActive : isDesktopNotActive}>WOMEN
                                    <span className={pathName === "/WomenProductList" ? isActive : isNotActive}></span>
                                </li>
                            </Link>

                            <Link href={'/SaleProductList'}>
                                <li className={pathName === "/SaleProductList" ? isDesktopActive : isDesktopNotActive}>SALE
                                    <span className={pathName === "/SaleProductList" ? isActive : isNotActive}></span>
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