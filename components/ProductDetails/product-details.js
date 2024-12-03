'use client';

import { useState, useEffect } from "react";

import 'swiper/css';
import 'swiper/css/pagination';

import DetailsDropdownSection from "./DetailsDropdown Section/details-dropdown-section";
import ShareSection from "./ShareSection/share-section";

import CompleteLookSection from "./CompleteLookSection/complete-look-section";
import ColorPickSection from "./ColorPickSection/color-pick-section";
import SizePickSection from "./SizePickSection/size-pick-section";
import HeaderAndPrice from "./HeaderAndPrice/header-and-price";
import ProductImageSection from "./ProductImageSection/product-image-section";
import ProductDescription from "./ProductDescription/product-description";
import AddToCartButton from "./AddToCartButton/add-to-cart-button";

import checkData from "@/app/checkData.json";
import AddedToCart from "./AddedToCart/added-to-cart";

export default function ProductDetails({productId}) {
    
    const [sizePicked, setSizePicked] = useState(null);
    const [colorPicked, setColorPicked] = useState(null);
    const [hookCheckData, setHookCheckData] = useState("");
    const [isAdded, setIsAdded] = useState(false);

    const dataReceived = checkData.filter((data) => data.itemId == productId);
    const singleData = dataReceived[0];

    useEffect(() => {
        const localData = localStorage.getItem('localShoppingCart');
        if (localData !== null) {
            setHookCheckData(JSON.parse(localData))
        }
    }, []);

    return(
        <>
            {isAdded ?
                <AddedToCart setIsAdded={setIsAdded}/>
            : null}
        <div className="bg-white min-w-screen flex flex-col items-center justify-center">
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Product Image Section */}
                <ProductImageSection singleData={singleData}/>

                <div className="w-full flex flex-col gap-4 my-8">
                    {/* Header and price */}
                    <HeaderAndPrice singleData={singleData}/>

                    {/* Description */}
                    <ProductDescription 
                        itemDescription={"Hinting at the brands penchant for logomania, Balmain presents this sweatshirt as part of its SS23 offering. Crafted from cotton, the long-sleeved design is adorned with a contrasting logo print at the chest."}
                    />
                    
                    {/* Color Pick section */}
                    <ColorPickSection colorPicked={colorPicked} setColorPicked={setColorPicked}/>

                    {/* Size Pick section */}
                    <SizePickSection sizePicked={sizePicked} setSizePicked={setSizePicked}/>

                    {/* Add to cart button */}
                    <AddToCartButton singleData={singleData} colorPicked={colorPicked} sizePicked={sizePicked} setIsAdded={setIsAdded}/>

                    {/* Product details dropdown */}
                    <DetailsDropdownSection />

                    {/* Share product section */}
                    <ShareSection />
                </div>
            </div>

            {/* Complete Look Section */}
            <CompleteLookSection />
        </div>
        </>
    );
}