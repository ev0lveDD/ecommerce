'use client';

import ShoppingCartItem from "./ShoppingCartItem/shopping-cart-item";
import SummarySection from "./SummarySection/summary-section";
import { useState, useEffect } from "react";
import data from "@/app/data.json"

export default function ShoppingCartDetails() {

    const [subtotalValue, setSubtotalValue] = useState(0);
    const taxValue = 21;

    useEffect(() => {
        checkFinalValue();
    },);

    function checkFinalValue() {
        var sum = 0;
        for (var i = 0; i < shoppingList.length; i++) {
            sum = sum + shoppingList[i].itemPrice*shoppingList[i].cartItemQuantity;
        }
        setSubtotalValue(sum);
    }


    const [shoppingList, setShoppingList] = useState(() => {
        const localData = localStorage.getItem('localShoppingCart');
        if (localData !== null) {
            return(JSON.parse(localData));
        }
    });

    useEffect(() => {
        const localData = localStorage.getItem('localShoppingCart');
        if (localData !== null) {
            setShoppingList(JSON.parse(localData));
        }
    }, []);


    function deleteItem(value) {
        var newList = shoppingList.filter(item => item.itemId !== value);
        setShoppingList(newList);
    }

    function updateLocalStorage() {
        localStorage.clear();
        localStorage.removeItem('localShoppingCart');
        var storageArray = JSON.parse(localStorage.getItem('localShoppingCart') || '[]')
        storageArray.push(shoppingList);
        localStorage.setItem('localShoppingCart', JSON.stringify(storageArray));
    }


    return(
        <div className="bg-white min-w-screen flex items-center justify-center">
            <div className="w-11/12 flex flex-col md:flex-row items-start justify-center gap-16 my-4">
                <div className="w-full md:w-3/5 my-4 flex flex-col items-start justify-center gap-4">
                    <h1 className="text-3xl font-medium">YOUR CART</h1>
                    {
                        shoppingList.map(function(singleData) {
                            return(
                                <ShoppingCartItem 
                                    key={singleData.itemId}
                                    itemImage1={singleData.itemImage1} 
                                    itemName={singleData.itemName}
                                    cartItemQuantity={singleData.cartItemQuantity}
                                    itemPrice={singleData.itemPrice}
                                    itemApparelStyle={singleData.itemApparelStyle}
                                    itemSize={singleData.itemSize}
                                    itemColor={singleData.itemColor}
                                    dataOfItem={singleData}
                                    checkFinalValue={checkFinalValue}
                                    deleteItem={deleteItem}
                                />
                            )
                        })
                    }
                </div>
                <SummarySection subtotalValue={subtotalValue} taxValue={taxValue} updateLocalStorage={updateLocalStorage}/>
            </div>
        </div>
    );
}