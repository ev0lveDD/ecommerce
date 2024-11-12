'use client';

import { useState } from "react";

import InputRow from "../../InputSection/InputRow/input-row";

export default function CardDetailsSection({ cardHolder, setCardHolder, cardNumber, setCardNumber, cardExpDateMonth, setCardExpDateMonth, cardExpDateYear, setCardExpDateYear, cardCVC, setCardCVC }) {

    const [isCardHolderEmpty, setIsCardHolderEmpty] = useState(false);
    const [isCardNumberEmpty, setIsCardNumberEmpty] = useState(false);
    const [isCardExpDateMonthEmpty, setIsCardExpDateMonthEmpty] = useState(false);
    const [isCardExpDateYearEmpty, setIsCardExpDateYearEmpty] = useState(false);
    const [isCardCVCEmpty, setIsCardCVCEmpty] = useState(false);

    return(
        <div className="w-full flex items-center justify-center">
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <InputRow 
                        inputLabel={"Cardholder Name"} 
                        inputPlaceholder={"e.g. Jane Doe"}
                        inputId={"input-cardholder-name"}
                        inputType={"text"}
                        inputValue={cardHolder}
                        inputFunction={setCardHolder}
                        isInputEmpty={isCardHolderEmpty}
                    />

                    <InputRow 
                        inputLabel={"Card Number"} 
                        inputPlaceholder={"e.g. 1234 5678 9876 5432"}
                        inputId={"input-card-number"}
                        inputType={"text"}
                        inputValue={cardNumber}
                        inputFunction={setCardNumber}
                        isInputEmpty={isCardNumberEmpty}
                    />

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <InputRow 
                                inputLabel={"Exp. Date MM"} 
                                inputPlaceholder={"e.g. 10"}
                                inputId={"input-cardexpdate-month"}
                                inputType={"text"}
                                inputValue={cardExpDateMonth}
                                inputFunction={setCardExpDateMonth}
                                isInputEmpty={isCardExpDateMonthEmpty}
                            />

                            <InputRow 
                                inputLabel={"Exp. Date YY"} 
                                inputPlaceholder={"e.g. 26"}
                                inputId={"input-cardexpdate-year"}
                                inputType={"text"}
                                inputValue={cardExpDateYear}
                                inputFunction={setCardExpDateYear}
                                isInputEmpty={isCardExpDateYearEmpty}
                            />
                        </div>

                        <InputRow 
                            inputLabel={"CVC"} 
                            inputPlaceholder={"e.g. 123"}
                            inputId={"input-cardCVC"}
                            inputType={"text"}
                            inputValue={cardCVC}
                            inputFunction={setCardCVC}
                            isInputEmpty={isCardCVCEmpty}
                        />
                    </div>
                </div>
        </div>
    );
}