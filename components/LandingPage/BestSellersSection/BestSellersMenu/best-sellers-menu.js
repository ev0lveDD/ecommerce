import Link from "next/link";
import BestSellersMenuButton from "./BestSellersMenuButton/best-sellers-menu-button";

export default function BestSellersMenu({ buttonSelected, setButtonSelected }) {

    return(
        <div className="w-full lg:w-4/5 flex items-center justify-between">
            <ul className="flex items-center justify-center gap-4 md:gap-8">
                <BestSellersMenuButton buttonName="all-products" buttonText="All Products" buttonSelected={buttonSelected} setButtonSelected={setButtonSelected}/>
                <BestSellersMenuButton buttonName="t-shirts" buttonText="T-Shirts" buttonSelected={buttonSelected} setButtonSelected={setButtonSelected}/>
                <BestSellersMenuButton buttonName="hoodies" buttonText="Hoodies" buttonSelected={buttonSelected} setButtonSelected={setButtonSelected}/>
                <BestSellersMenuButton buttonName="jackets" buttonText="Jackets" buttonSelected={buttonSelected} setButtonSelected={setButtonSelected}/>
            </ul>
            <Link href={'/SaleProductList'}>
                <button className="bg-black text-white py-0.5 px-2 rounded rounded-sm text-[11px] hover:bg-gray-800 border border-black">
                    Show All
                </button>
            </Link>
        </div>
    );
}