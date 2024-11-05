import StepHeader from "../StepHeader/step-header";
import InputSection from "../InputSection/input-section";

export default function DeliveryAddressSection({ deliveryName, setDeliveryName, deliverySurname, setDeliverySurname, deliveryAddressOne, setDeliveryAddressOne, deliveryAddressTwo, setDeliveryAddressTWo, deliveryPostalCode, setDeliveryPostalCode, deliveryCity, setDeliveryCity, deliveryEmail, setDeliveryEmail, deliveryPhoneNumber, setDeliveryPhoneNumber }) {
    return(
        <div className="w-full md:w-3/5 my-4 flex flex-col items-start justify-center gap-4">
            <StepHeader headerName="DELIVERY DETAILS" />
            <InputSection deliveryName={deliveryName} setDeliveryName={setDeliveryName}/>
        </div>
    );
}