import StepHeader from "../StepHeader/step-header";
import InputSection from "../InputSection/input-section";

export default function DeliveryAddressSection({ deliveryName, setDeliveryName, deliverySurname, setDeliverySurname, deliveryAddressOne, setDeliveryAddressOne, deliveryAddressTwo, setDeliveryAddressTWo, deliveryPostalCode, setDeliveryPostalCode, deliveryCity, setDeliveryCity, deliveryEmail, setDeliveryEmail, deliveryPhoneNumber, setDeliveryPhoneNumber, setCheckoutStep }) {
    
    const isBrowser = () => typeof window !== 'undefined';
    
    return(
        <div className="w-full md:w-3/5 my-4 flex flex-col items-start justify-center gap-6">
            <StepHeader headerName="DELIVERY DETAILS" />
            <InputSection deliveryName={deliveryName} setDeliveryName={setDeliveryName}/>
            <button onClick={() => {setCheckoutStep(2); if (!isBrowser()) return; window.scrollTo(0,1,{ behavior: 'smooth'})}} className="bg-black w-full text-white py-4 px-3 rounded rounded-md text-sm hover:bg-gray-800">
                NEXT
            </button>
        </div>
    );
}