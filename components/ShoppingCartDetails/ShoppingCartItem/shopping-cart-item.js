'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

import deleteIcon from "@/public/delete-icon.svg";


import { useDispatch } from "react-redux";
import { counterActions } from "@/app/store/counterSlice";

export default function ShoppingCartItem({index, dataOfItem, itemImage1, itemName, cartItemQuantity, itemPrice, itemApparelStyle, itemSize, itemColor, checkFinalValue, deleteItem}) {

    const [itemQuantity, setItemQuantity] = useState(cartItemQuantity);
    const [itemTotalValue, setItemTotalValue] = useState(0);

    const dispatch = useDispatch();
    function handleDecrement() {
        dispatch(counterActions.decrement());
    }
    
    function addQuantity() {
        setItemQuantity(dataOfItem.cartItemQuantity+=1);
        checkFinalValue();
    }


    function subtractQuantity () {
    if(dataOfItem.cartItemQuantity>1) {
        setItemQuantity(dataOfItem.cartItemQuantity-=1);
        checkFinalValue();
    } else {
        null;
    };
    }

    function deleteItemAndCount () {
        setItemQuantity(dataOfItem.cartItemQuantity-=1);
        checkFinalValue();
        deleteItem(dataOfItem.itemId);
        handleDecrement();
        deleteItemFromLocalStorage();
    }


    function deleteItemFromLocalStorage () {
        var storageArray = JSON.parse(localStorage.getItem('localShoppingCart'));
        storageArray.splice(index, 1);
        localStorage.setItem('localShoppingCart', JSON.stringify(storageArray));
    }

    return(
        <div className="w-full h-48 flex items-start justify-between border-b border-grey-lighter gap-4">
            <div className="w-64 h-52 relative">
                    <Image className="w-full h-full" alt="product image" src={itemImage1} fill={true}/>
                </div> 
            <div className="w-full min-h-40 flex flex-col items-start justify-between gap-4 my-4">
                <div className="flex flex-col gap-3 w-full">
                    <div className="w-full h-full flex items-start justify-between">
                        <p className="font-bold text-sm">{itemName}</p>
                        <p className="font-bold text-sm">${itemPrice},00</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Variant: </p>
                            <p className="text-gray-400 font-semibold text-xs">{itemApparelStyle}</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Size: </p>
                            <p className="text-gray-400 font-semibold text-xs">{itemSize}</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Color:</p>
                            <p className="text-gray-400 font-semibold text-xs">{itemColor}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex items-start justify-between">
                    <button className="bg-transparent text-white rounded rounded-full p-0 m-0 text-xs flex items-center justify-center">
                        <Image src={deleteIcon} alt="Delete icon" className="w-5 h-5" onClick={deleteItemAndCount}/>
                    </button>
                    <div className="flex items-center justify-center gap-2">

                        {itemQuantity===1 ? 
                            <button disabled className="cursor-pointer bg-white text-gray-300 font-black p-0.5 text-md rounded rounded-full border border-2 border-gray-300 text-xs hover:text-gray-500 hover:border-gray-500 flex items-center justify-center" onClick={subtractQuantity}><p className="w-4 h-4">-</p></button> 
                        :
                            <button className="cursor-pointer bg-white text-black font-black text-md p-0.5 rounded rounded-full border border-2 border-black text-xs hover:text-gray-600 hover:border-gray-600 flex items-center justify-center" onClick={subtractQuantity}><p className="w-4 h-4">-</p></button>
                        }

                        <p className="text-black font-bold text-md">{itemQuantity}</p>
                        <button className="bg-white text-black font-black p-0.5 text-md rounded rounded-full border border-2 border-black text-xs hover:text-gray-600 hover:border-gray-600 flex items-center justify-center" onClick={addQuantity}><p className="w-4 h-4">+</p></button>
                        <button onClick={() => console.log(dataOfItem.cartItemQuantity)}>CHECK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}