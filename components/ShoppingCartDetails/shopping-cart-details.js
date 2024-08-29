import ShoppingCartItem from "./ShoppingCartItem/shopping-cart-item";
import SummarySection from "./SummarySection/summary-section";


import image1 from "@/public/crewneck1.avif"
import image2 from "@/public/mainLabZippedHoodie2.avif";
import image3 from "@/public/perrebalmainhoodie1.avif";

export default function ShoppingCartDetails() {
    return(
        <div className="bg-white min-w-screen flex items-center justify-center">
            <div className="w-11/12 flex flex-col md:flex-row items-start justify-center gap-16 my-4">
                <div className="w-full md:w-2/3 my-4 flex flex-col items-center md:items-start justify-center gap-4">
                    <h1 className="text-3xl font-medium">YOUR CART</h1>
                    <ShoppingCartItem cartItemImage={image1} cartItemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"} cartItemPrice={595} cartItemVariant={"SWEATSHIRT"} cartItemSize={"XL"} cartItemColor={"GREEN"}/>
                    <ShoppingCartItem cartItemImage={image2} cartItemName={"BALMAIN HOODIE"} cartItemPrice={190} cartItemVariant={"HOODIE"} cartItemSize={"XL"} cartItemColor={"BLACK"}/>
                    <ShoppingCartItem cartItemImage={image3} cartItemName={"BALMAIN LOGO-PRINT HOODIE"} cartItemPrice={300} cartItemVariant={"HOODIE"} cartItemSize={"XL"} cartItemColor={"NAVY"}/>
                </div>
                <SummarySection />
            </div>
        </div>
    );
}