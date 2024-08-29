import ShoppingCartItem from "./ShoppingCartItem/shopping-cart-item";
import SummarySection from "./SummarySection/summary-section";


export default function ShoppingCartDetails() {
    return(
        <div className="bg-white min-w-screen flex items-center justify-center">
            <div className="w-11/12 flex flex-col md:flex-row items-start justify-center gap-4 my-4">
                <div className="w-full md:w-2/3 my-4 flex flex-col items-start justify-center gap-4">
                    <h1 className="text-3xl font-medium">YOUR CART</h1>
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                </div>
                <SummarySection />
            </div>
        </div>
    );
}