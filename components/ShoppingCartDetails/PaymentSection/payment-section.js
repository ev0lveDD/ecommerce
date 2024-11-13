import StepHeader from "../StepHeader/step-header";
import CardDetailsSection from "./CardDetailsSection/card-details-section";
import CardView from "./CardView/card-view";

export default function PaymentSection({ cardHolder, setCardHolder, cardNumber, setCardNumber, cardExpDateMonth, setCardExpDateMonth, cardExpDateYear, setCardExpDateYear, cardCVC, setCardCVC }) {
    return(
        <div className="w-full md:w-3/5 my-4 flex flex-col items-start justify-center gap-6">
            <StepHeader headerName="PAYMENT DETAILS" />
            <CardView cardHolder={cardHolder} cardNumber={cardNumber} cardExpDateMonth={cardExpDateMonth} cardExpDateYear={cardExpDateYear} cardCVC={cardCVC}/>
            <CardDetailsSection 
            cardHolder={cardHolder} setCardHolder={setCardHolder} 
            cardNumber={cardNumber} setCardNumber={setCardNumber}
            cardExpDateMonth={cardExpDateMonth} setCardExpDateMonth={setCardExpDateMonth}
            cardExpDateYear={cardExpDateYear} setCardExpDateYear={setCardExpDateYear}
            cardCVC={cardCVC} setCardCVC={setCardCVC}/>
            <button onClick={() => setCheckoutStep(2)} className="bg-black w-full text-white py-4 px-3 rounded rounded-md text-sm hover:bg-gray-800">
                BUY NOW
            </button>
        </div>
    );
}