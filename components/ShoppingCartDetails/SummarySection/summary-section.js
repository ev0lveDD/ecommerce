export default function SummarySection({ subtotalValue, taxValue }) {
    return(
        <div className="w-full md:w-1/3 flex flex-col items-start justify-center gap-4 my-8">
            <h1 className="text-3xl font-medium">SUMMARY</h1>
            <div className="w-full flex flex-col items-start justify-center gap-4 my-4">
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm font-medium">SUBTOTAL</p>
                    <p className="text-sm font-medium">${subtotalValue},00</p>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm font-medium">ESTIMATED DELIVERY & HANDLING</p>
                    <p className="text-sm font-medium">FREE</p>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm font-medium">ESTIMATED TAXES</p>
                    <p className="text-sm font-medium">$21,00</p>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center border-t border-grey-lighter mt-16">
                <div className="w-full flex items-center justify-between my-4">
                    <p className="text-md font-bold">TOTAL</p>
                    <p className="text-md font-bold">${subtotalValue+taxValue},00</p>
                </div>
                <button className="bg-black w-full text-white py-3 px-3 rounded rounded-md text-sm hover:bg-gray-800">
                    CHECKOUT NOW
                </button>
            </div>
        </div>
    );
}