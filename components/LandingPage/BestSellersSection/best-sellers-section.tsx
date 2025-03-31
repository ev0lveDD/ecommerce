'use client';
import { useState } from "react";

import React from "react";
import ProductListItem from "@/components/ProductList/ProductListItem/product-list-item";
import checkData from "@/app/checkData.json";
import BestSellersMenu from "./BestSellersMenu/best-sellers-menu";
import SectionHeadline from "../SectionHeadline/section-headline";


export default function BestSellersSection() {

    const [buttonSelected, setButtonSelected] = useState<string>("all-products");

    return(
        <div className="w-11/12 md:w-9/12 flex flex-col items-center justify-center gap-8 my-8">
            <SectionHeadline headlineData={{headlineText: "Best Sellers"}} />
            <BestSellersMenu buttonSelected={buttonSelected} setButtonSelected={setButtonSelected}/>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 w-full lg:w-4/5">

                {(buttonSelected === "all-products" ? checkData 
                : buttonSelected === "t-shirts" ? checkData.filter((data) => data.itemApparelStyle === "SHIRT") 
                : buttonSelected === "hoodies" ? checkData.filter((data) => data.itemApparelStyle === "HOODIE")  
                : buttonSelected === "jackets" ? checkData.filter((data) => data.itemApparelStyle === "JACKET")  
                : null)
                .slice(0, 4).map((singleData) => {
                    return(
                        <ProductListItem 
                        key={singleData.itemId}
                        itemImage1={singleData.itemImage1} 
                        itemImage2={singleData.itemImage2} 
                        itemName={singleData.itemName}
                        itemPrice={singleData.itemPrice}
                        isOnSale={singleData.isOnSale}
                        categoryPath={singleData.itemDesignedFor === "MEN" ? "MenProductList" : singleData.itemDesignedFor === "WOMEN" ? "WomenProductList" : singleData.itemDesignedFor === "SALE" ? "SaleProductList" : null}
                        path={singleData.itemId}
                        singleData={singleData}/>
                    );
                })}

            </div>

        </div>
    );
}