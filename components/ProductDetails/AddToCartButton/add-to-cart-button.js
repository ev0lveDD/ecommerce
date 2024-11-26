'use client';

import {useState, useEffect} from "react";

export default function AddToCartButton( {colorPicked, singleData, sizePicked, setIsAdded} ) {

    const itemToStorage = {
        cartItemQuantity: 1,
        itemId: singleData.itemId,
        itemImage1: singleData.itemImage1,
        itemImage2: singleData.itemImage2,
        itemImage3: singleData.itemImage3,
        itemImage4: singleData.itemImage4,
        itemName: singleData.itemName,
        itemPrice: singleData.itemPrice,
        itemApparelStyle: singleData.itemApparelStyle,
        itemSize: sizePicked,
        itemColor: colorPicked,
        itemDesignedFor: singleData.itemDesignedFor,
        isOnSale: singleData.isOnSale
    }
    
    const [isEmpty, setIsEmpty] = useState(false);

    useState(() => {
        if((colorPicked !== null || colorPicked !== "") && (sizePicked !== null || sizePicked !== "")) {
            setIsEmpty(false)
        } else (
            null
        )
    },[colorPicked, sizePicked])


    function addToStorage() {
        var storageArray = JSON.parse(localStorage.getItem('localShoppingCart') || '[]');
        if ((sizePicked === "" || sizePicked === null) && (colorPicked === "" || colorPicked === null)) {
            setIsEmpty(true);
        } else if ((sizePicked === "" || sizePicked === null) && (colorPicked !== "" && colorPicked !== null)) {
            setIsEmpty(true);
        } else if ((sizePicked !== "" && sizePicked !== null) && (colorPicked === "" || colorPicked === null)) {
            setIsEmpty(true);
        } else if ((colorPicked !== null && colorPicked !== "") && (sizePicked !== null && sizePicked !== "")) {
            setIsEmpty(false),
            storageArray.push(itemToStorage),
            localStorage.setItem('localShoppingCart', JSON.stringify(storageArray)),
            setIsAdded(true);
        } else (
            null
        )
    }


    return(
        <>
        {isEmpty ? 
        <p className="text-red-600 font-medium text-xs">
            {((sizePicked !== "" && sizePicked !== null) && (colorPicked !== "" && colorPicked !== null)) ? null : "Please pick the "} 
            {((sizePicked !== "" && sizePicked !== null) ? null : " size")}
            {((sizePicked !== "" && sizePicked !== null) || (colorPicked !== "" && colorPicked !== null)) ? null : ", and"} 
            {(colorPicked !== "" && colorPicked !== null) ? null : " color"}
        </p> : null}

        <button onClick={() => addToStorage()} className="bg-black text-white py-4 px-3 rounded rounded-md text-sm hover:bg-gray-800">
            ADD TO CART
        </button>
        </>
    );
}