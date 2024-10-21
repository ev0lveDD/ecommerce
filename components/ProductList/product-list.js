'use client';
import { useState, useEffect } from "react";

import FilterMenu from "./FilterMenu/filter-menu";
import ProductListItem from "./ProductListItem/product-list-item";
import SortByButton from "./SortByButton/sort-by-button";
import FilterSection from "./FilterSection/filter-section";

import BreadcrumbsSection from "./BreadcrumbsSection/breadcrumbs-section";
import ProductListHeader from "./ProductListHeader/product-list-header";

import checkData from "@/app/checkData.json";

export default function ProductList({categoryGiven}) {
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterColorPicked, setFilterColorPicked] = useState("");
    const [filterSizePicked, setFilterSizePicked] = useState("");
    const [filterPricePicked, setFilterPricePicked] = useState("");
    const [filterApparelStylePicked, setFilterApparelStylePicked] = useState("");
    
    const [sortedBy, setSortedBy] = useState("");

    var filterList = {
        itemColor: filterColorPicked,
        itemSize: filterSizePicked,
        itemPrice: filterPricePicked,
        itemApparelStyle: filterApparelStylePicked
    };

    var categoryDB = categoryGiven != "SALE" ? checkData.filter((data) => data.itemDesignedFor === categoryGiven) : checkData.filter((data) => data.isOnSale === true);
    const [mappedItemsCount, setMappedItemsCount] = useState(categoryDB.length);

    const filterListText = (categoryDB.filter((data) => 
        (filterList.itemColor === "" || data.itemColor === filterList.itemColor) && 
        (filterList.itemSize === "" || (data.itemSize.indexOf(filterList.itemSize) >= 0 ? data.itemSize  : null)) &&
        (filterList.itemPrice === "" || (data.itemPrice >= filterList.itemPrice[0] && data.itemPrice <= filterList.itemPrice[1])) && 
        (filterList.itemApparelStyle === "" || data.itemApparelStyle === filterList.itemApparelStyle)
    ));

    const filteredDB = filterList.itemColor !== "" ? filterListText : filterList.itemSize !== "" ? filterListText : filterList.itemPrice !== "" ? filterListText : filterList.itemApparelStyle !== "" ? filterListText : categoryDB;

    return(
        <div className="bg-white min-w-screen flex flex-col md:flex-row items-start justify-center my-4">
            
            {/* Filter Menu section */}
            <FilterMenu 
            filterOpen={filterOpen} 
            setFilterOpen={setFilterOpen} 
            filterColorPicked={filterColorPicked} 
            setFilterColorPicked={setFilterColorPicked} 
            filterSizePicked={filterSizePicked} 
            setFilterSizePicked={setFilterSizePicked} 
            filterPricePicked={filterPricePicked} 
            setFilterPricePicked={setFilterPricePicked} 
            filterApparelStylePicked={filterApparelStylePicked} 
            setFilterApparelStylePicked={setFilterApparelStylePicked}
            />

            <div className={`w-full ${filterOpen ? "md:w-3/4" : null} flex flex-col items-center justify-center my-4`}>
                <div className="w-11/12 flex my-4 flex-col gap-8">

                    {/* Breadcrumbs section */}
                    <BreadcrumbsSection />

                    {/* Category Name and filtered items quantity / number */}
                    <ProductListHeader categoryName={categoryGiven === "MEN" ? "MEN`S CLOTHES" : categoryGiven === "WOMEN" ? "WOMEN`S CLOTHES" : categoryGiven === "SALE" ? "CLOTHES ON SALE" : null} filteredItemsQuantity={mappedItemsCount}/>

                    {/* Filter buttons & sort button section */}
                    <div className="flex justify-between gap-4">
                        
                        {/* Filter buttons */}
                        <FilterSection filterOpen={filterOpen} setFilterOpen={setFilterOpen}/>

                        {/* Sort button */}
                        <SortByButton sortedBy={sortedBy} setSortedBy={setSortedBy}/>

                    </div>

                </div>


                {/* Product List items */}
                <div className={`w-11/12 grid grid-cols-2 ${filterOpen ? "md:grid-cols-4" : "md:grid-cols-5"} gap-x-6 gap-y-8 my-4`}>

                    {
                        (sortedBy === "" || sortedBy === null ? filteredDB 
                        : sortedBy === "sort-price-lowest" ? (filteredDB.sort((a, b) => a.itemPrice - b.itemPrice)) 
                        : sortedBy === "sort-price-highest" ? (filteredDB.sort((a, b) => b.itemPrice - a.itemPrice))  
                        : sortedBy === "sort-latest" ? (filteredDB.sort((a, b) => b.itemId - a.itemId)) 
                        : sortedBy === "sort-popular" ? (filteredDB.sort((a, b) => b.isOnSale - a.isOnSale)) 
                        : categoryDB)
                        .map(function(singleData) {
                            return(
                                <ProductListItem
                                key={singleData.itemId}
                                itemImage1={singleData.itemImage1} 
                                itemImage2={singleData.itemImage2}
                                itemName={singleData.itemName}
                                itemPrice={singleData.itemPrice}
                                isOnSale={singleData.isOnSale}
                                categoryPath={categoryGiven === "MEN" ? "MenProductList" : categoryGiven === "WOMEN" ? "WomenProductList" : categoryGiven === "SALE" ? "SaleProductList" : null}
                                path={singleData.itemId}
                                singleData={singleData}/>
                            )
                        })
                    }

                </div>
                <button onClick={() => console.log(filteredDB)}>CHECK BD</button>
                <button onClick={() => console.log(Object.keys(filterList))}>CHECK OBJECT</button>
                <button onClick={() => console.log(Object.values(filterList))}>CHECK OBJECT VALUES</button>
                <button onClick={() => console.log(filterList.itemPrice.length)}>CHECK ARRAY</button>
                <button onClick={() => console.log(sortedBy)}>CHECK SORT HOOK</button>
            </div>

        </div>
    );
}