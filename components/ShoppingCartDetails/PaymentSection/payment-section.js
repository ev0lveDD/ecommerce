import StepHeader from "../StepHeader/step-header";

export default function PaymentSection() {
    return(
        <div className="w-full md:w-3/5 my-4 flex flex-col items-start justify-center gap-6">
            <StepHeader headerName="PAYMENT DETAILS" />
        </div>
    );
}