import React from "react";
import Link from "next/link";

export default function FooterNavigation() {
    return(
        <div className="h-full flex flex-col gap-4 my-4 justify-start w-full md:w-auto">
            <p className="text-sm font-bold">NAVIGATION</p>
            <ul className="flex flex-col gap-2 md:gap-1">
                <Link href={'/MenProductList'}>
                    <li><p className="text-xs text-gray-400 font-medium hover:text-gray-600 cursor-pointer">MEN</p></li>
                </Link>
                <Link href={'/WomenProductList'}>
                    <li><p className="text-xs text-gray-400 font-medium hover:text-gray-600 cursor-pointer">WOMEN</p></li>
                </Link>
                <Link href={'/SaleProductList'}>
                    <li><p className="text-xs text-gray-400 font-medium hover:text-gray-600 cursor-pointer">SALE</p></li>
                </Link>
            </ul>
        </div>
    );
}