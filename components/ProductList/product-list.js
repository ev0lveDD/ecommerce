'use client';
import { useState } from "react";
import Image from "next/image";

import FilterMenu from "./FilterMenu/filter-menu";
import ProductListItem from "./ProductListItem/product-list-item";
import SortByButton from "./SortByButton/sort-by-button";
import FilterSection from "./FilterSection/filter-section";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

import pierreHoodie1 from "@/public/perrebalmainhoodie1.avif";
import pierreHoodie2 from "@/public/perrebalmainhoodie2.avif";
import pierreHoodie3 from "@/public/perrebalmainhoodie3.avif";
import pierreHoodie4 from "@/public/perrebalmainhoodie4.avif";

import zippedHoodie1 from "@/public/mainLabZippedHoodie1.avif";
import zippedHoodie2 from "@/public/mainLabZippedHoodie2.avif";
import zippedHoodie3 from "@/public/mainLabZippedHoodie3.avif";
import zippedHoodie4 from "@/public/mainLabZippedHoodie4.avif";

import BreadcrumbsSection from "./BreadcrumbsSection/breadcrumbs-section";
import ProductListHeader from "./ProductListHeader/product-list-header";

import checkData from "@/app/checkData.json";

export default function ProductList() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterColorPicked, setFilterColorPicked] = useState("");
    const [filterSizePicked, setFilterSizePicked] = useState("");

    return(
        <div className="bg-white min-w-screen flex flex-col md:flex-row items-start justify-center my-4">
            
            {/* Filter Menu section */}
            <FilterMenu filterOpen={filterOpen} setFilterOpen={setFilterOpen} filterColorPicked={filterColorPicked} setFilterColorPicked={setFilterColorPicked} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>

            <div className={`w-full ${filterOpen ? "md:w-3/4" : null} flex flex-col items-center justify-center my-4`}>
                <div className="w-11/12 flex my-4 flex-col gap-8">

                    {/* Breadcrumbs section */}
                    <BreadcrumbsSection />

                    {/* Category Name and filtered items quantity / number */}
                    <ProductListHeader categoryName={"MEN`S TOPS"} filteredItemsQuantity={8}/>

                    {/* Filter buttons & sort button section */}
                    <div className="flex justify-between gap-4">
                        
                        {/* Filter buttons */}
                        <FilterSection filterOpen={filterOpen} setFilterOpen={setFilterOpen}/>

                        {/* Sort button */}
                        <SortByButton />

                    </div>

                </div>


                {/* Product List items */}
                <div className={`w-11/12 grid grid-cols-2 ${filterOpen ? "md:grid-cols-4" : "md:grid-cols-5"} gap-x-6 gap-y-8 my-4`}>

                    {
checkData.map(function(singleData) {
    return(
        <ProductListItem
        key={singleData.itemId}
        itemImage1={singleData.itemImage1} 
        itemImage2={singleData.itemImage2}
        itemName={singleData.itemName}
        itemPrice={singleData.itemPrice}
        isOnSale={singleData.isOnSale}/>
    )
})
                    }

                </div>

            </div>

        </div>
    );
}