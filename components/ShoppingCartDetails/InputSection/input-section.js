'use client';

import InputRow from "./InputRow/input-row";
import { useState } from "react";

export default function InputSection({ deliveryName, setDeliveryName }) {

    const [isNameEmpty, setIsNameEmpty] = useState(false);

    return(
        <div className="flex flex-col gap-4">
            <InputRow 
                inputLabel={"First Name"} 
                inputPlaceholder={"e.g. Stephen King"}
                inputId={"input-full-name"}
                inputType={"text"}
                inputValue={deliveryName}
                inputFunction={setDeliveryName}
                isInputEmpty={isNameEmpty}
            />
        </div>
    );
}