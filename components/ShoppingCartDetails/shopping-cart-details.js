'use client';

import ShoppingCartItem from "./ShoppingCartItem/shopping-cart-item";
import SummarySection from "./SummarySection/summary-section";
import { useState, useEffect } from "react";
import data from "@/app/data.json"

import image1 from "@/public/crewneck1.avif"
import image2 from "@/public/mainLabZippedHoodie2.avif";
import image3 from "@/public/perrebalmainhoodie1.avif";

export default function ShoppingCartDetails() {

    const [subtotalValue, setSubtotalValue] = useState(0);
    const taxValue = 21;

    useEffect(() => {
        checkFinalValue();
    },);

    function checkFinalValue() {
        var sum = 0;
        for (var i = 0; i < shoppingList.length; i++) {
            sum = sum + shoppingList[i].cartItemPrice*shoppingList[i].cartItemQuantity;
        }
        setSubtotalValue(sum);
    }


    const [shoppingList, setShoppingList] = useState([
        {
            numericCode: 9001,
            cartItemImage: image1,
            cartItemName: "BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT",
            cartItemPrice: 595,
            cartItemQuantity: 1,
            cartItemVariant: "SWEATSHIRT",
            cartItemSize: "XL",
            cartItemColor: "GREEN"
        },
        {
            numericCode: 9002,
            cartItemImage: image2,
            cartItemName: "BALMAIN HOODIE",
            cartItemPrice: 190,
            cartItemQuantity: 2,
            cartItemVariant: "HOODIE",
            cartItemSize: "XL",
            cartItemColor: "BLACK"
        },
        {
            numericCode: 9003,
            cartItemImage: image3,
            cartItemName: "BALMAIN LOGO-PRINT HOODIE",
            cartItemPrice: 300,
            cartItemQuantity: 1,
            cartItemVariant: "HOODIE",
            cartItemSize: "XL",
            cartItemColor: "NAVY"
        }
    ]);

    function deleteItem(value) {
        var newList = shoppingList.filter(item => item.numericCode !== value);
        setShoppingList(newList);
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
                                    key={singleData.numericCode}
                                    cartItemImage={singleData.cartItemImage} 
                                    cartItemName={singleData.cartItemName}
                                    cartItemQuantity={singleData.cartItemQuantity}
                                    cartItemPrice={singleData.cartItemPrice}
                                    cartItemVariant={singleData.cartItemVariant}
                                    cartItemSize={singleData.cartItemSize}
                                    cartItemColor={singleData.cartItemColor}
                                    dataOfItem={singleData}
                                    checkFinalValue={checkFinalValue}
                                    deleteItem={deleteItem}
                                />
                            )
                        })
                    }
                </div>
                <SummarySection subtotalValue={subtotalValue} taxValue={taxValue}/>
            </div>
        </div>
    );
}