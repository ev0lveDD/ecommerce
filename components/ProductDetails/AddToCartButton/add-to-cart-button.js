'use client';

import {useState} from "react";

export default function AddToCartButton( {colorPicked, singleData, sizePicked} ) {

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
    
    function addToStorage() {
        var storageArray = JSON.parse(localStorage.getItem('localShoppingCart') || '[]')
        storageArray.push(itemToStorage);
        localStorage.setItem('localShoppingCart', JSON.stringify(storageArray));
    }


    return(
        <button onClick={() => addToStorage()} className="bg-black text-white py-4 px-3 rounded rounded-md text-sm hover:bg-gray-800">
            ADD TO CART
        </button>
    );
}