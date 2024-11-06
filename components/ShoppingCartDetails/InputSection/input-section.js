'use client';

import InputRow from "./InputRow/input-row";
import { useState } from "react";

export default function InputSection({ deliveryName, setDeliveryName, deliverySurname, setDeliverySurname, deliveryAddressOne, setDeliveryAddressOne, deliveryAddressTwo, setDeliveryAddressTwo, deliveryPostalCode, setDeliveryPostalCode, deliveryCity, setDeliveryCity, deliveryEmail, setDeliveryEmail, deliveryPhoneNumber, setDeliveryPhoneNumber }) {

    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isSurnameEmpty, setIsSurnameEmpty] = useState(false);
    const [isAddressOneEmpty, setIsAddressOneEmpty] = useState(false);
    const [isAddressTwoEmpty, setIsAddressTwoEmpty] = useState(false);
    const [isPostalCodeEmpty, setIsPostalCodeEmpty] = useState(false);
    const [isCityEmpty, setIsCityEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false);

    return(
        <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col md:flex-row gap-4">
                <InputRow 
                    inputLabel={"First Name"} 
                    inputPlaceholder={"e.g. Stephen"}
                    inputId={"input-full-name"}
                    inputType={"text"}
                    inputValue={deliveryName}
                    inputFunction={setDeliveryName}
                    isInputEmpty={isNameEmpty}
                />
                <InputRow 
                    inputLabel={"Last Name"} 
                    inputPlaceholder={"e.g. King"}
                    inputId={"input-full-surname"}
                    inputType={"text"}
                    inputValue={deliverySurname}
                    inputFunction={setDeliverySurname}
                    isInputEmpty={isSurnameEmpty}
                />
            </div>

            <InputRow 
                inputLabel={"Addres 1"} 
                inputPlaceholder={"e.g. Kingsbury Plaza"}
                inputId={"input-full-address1"}
                inputType={"text"}
                inputValue={deliveryAddressOne}
                inputFunction={setDeliveryAddressOne}
                isInputEmpty={isAddressOneEmpty}
            />

            <InputRow 
                inputLabel={"Addres 2"} 
                inputPlaceholder={"e.g. Parcel 46A"}
                inputId={"input-full-address2"}
                inputType={"text"}
                inputValue={deliveryAddressTwo}
                inputFunction={setDeliveryAddressTwo}
                isInputEmpty={isAddressTwoEmpty}
            />

            <div className="flex flex-col md:flex-row gap-4">
                <InputRow 
                    inputLabel={"Postal Code"} 
                    inputPlaceholder={"e.g. 98-200"}
                    inputId={"input-full-postal-code"}
                    inputType={"text"}
                    inputValue={deliveryPostalCode}
                    inputFunction={setDeliveryPostalCode}
                    isInputEmpty={isPostalCodeEmpty}
                />
                <InputRow 
                    inputLabel={"City"} 
                    inputPlaceholder={"e.g. London"}
                    inputId={"input-full-delivery-city"}
                    inputType={"text"}
                    inputValue={deliveryCity}
                    inputFunction={setDeliveryCity}
                    isInputEmpty={isCityEmpty}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <InputRow 
                    inputLabel={"Email address"} 
                    inputPlaceholder={"e.g. Stephen.King@email.com"}
                    inputId={"input-full-email"}
                    inputType={"text"}
                    inputValue={deliveryEmail}
                    inputFunction={setDeliveryEmail}
                    isInputEmpty={isEmailEmpty}
                />
                <InputRow 
                    inputLabel={"Phone Number"} 
                    inputPlaceholder={"e.g. +48 123 456 789"}
                    inputId={"input-full-phone-number"}
                    inputType={"text"}
                    inputValue={deliveryPhoneNumber}
                    inputFunction={setDeliveryPhoneNumber}
                    isInputEmpty={isPhoneNumberEmpty}
                />
            </div>
        </div>
    );
}