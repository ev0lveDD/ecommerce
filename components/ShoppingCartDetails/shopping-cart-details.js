'use client';

import ShoppingCartItem from "./ShoppingCartItem/shopping-cart-item";
import SummarySection from "./SummarySection/summary-section";
import { useState, useEffect } from "react";
import data from "@/app/data.json";
import YourCartSection from "./YourCartSection/your-cart-section";
import DeliveryAddressSection from "./DeliveryAddressSection/delivery-address-section";

export default function ShoppingCartDetails() {

    const [subtotalValue, setSubtotalValue] = useState(0);
    const [taxValue, setTaxValue] = useState(21);
    const [isCheckout, setIsCheckout] = useState(false);
    
    
    useEffect(() => {
        if (subtotalValue === null || subtotalValue === 0) {
            setTaxValue(0);
        } else (
            setTaxValue(21)
        )
    },[subtotalValue]);

    useEffect(() => {
        if (shoppingList != null) {
            checkFinalValue();
        }
    },);

    function checkFinalValue() {
        var sum = 0;
        for (var i = 0; i < shoppingList.length; i++) {
            sum = sum + shoppingList[i].itemPrice*shoppingList[i].cartItemQuantity;
        }
        setSubtotalValue(sum);
    }


    const [shoppingList, setShoppingList] = useState(() => {
        if(typeof window !== 'undefined') {
            const localData = localStorage.getItem('localShoppingCart');
            if (localData !== null) {
                return(JSON.parse(localData));
            }
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

    const [deliveryName, setDeliveryName] = useState("");
    const [deliverySurname, setDeliverySurname] = useState("");
    const [deliveryAddressOne, setDeliveryAddressOne] = useState("");
    const [deliveryAddressTwo, setDeliveryAddressTWo] = useState("");
    const [deliveryPostalCode, setDeliveryPostalCode] = useState("");
    const [deliveryCity, setDeliveryCity] = useState("");
    const [deliveryEmail, setDeliveryEmail] = useState("");
    const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState("");

    return(
        <div className="bg-white min-w-screen flex items-center justify-center">
            <div className="w-11/12 flex flex-col md:flex-row items-start justify-center gap-16 my-4">
                {isCheckout ? 
                    <DeliveryAddressSection 
                    deliveryName={deliveryName} setDeliveryName={setDeliveryName}
                    deliverySurname={deliverySurname} setDeliverySurname={setDeliverySurname}
                    deliveryAddressOne={deliveryAddressOne} setDeliveryAddressOne={setDeliveryAddressOne}
                    deliveryAddressTwo={deliveryAddressTwo} setDeliveryAddressTWo={setDeliveryAddressTWo}
                    deliveryPostalCode={deliveryPostalCode} setDeliveryPostalCode={setDeliveryPostalCode}
                    deliveryCity={deliveryCity} setDeliveryCity={setDeliveryCity}
                    deliveryEmail={deliveryEmail} setDeliveryEmail={setDeliveryEmail}
                    deliveryPhoneNumber={deliveryPhoneNumber} setDeliveryPhoneNumber={setDeliveryPhoneNumber}
                    />
                : 
                    <YourCartSection 
                        shoppingList={shoppingList} 
                        checkFinalValue={checkFinalValue} 
                        deleteItem={deleteItem}
                    />
                }

                <SummarySection 
                    shoppingList={shoppingList} 
                    subtotalValue={subtotalValue} 
                    taxValue={taxValue} 
                    isCheckout={isCheckout} 
                    setIsCheckout={setIsCheckout}
                />
            </div>
        </div>
    );
}