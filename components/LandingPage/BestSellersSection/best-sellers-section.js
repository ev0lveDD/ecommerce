
import ProductListItem from "@/components/ProductList/ProductListItem/product-list-item";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

import pierreHoodie1 from "@/public/perrebalmainhoodie1.avif";
import pierreHoodie2 from "@/public/perrebalmainhoodie2.avif";

import zippedHoodie1 from "@/public/mainLabZippedHoodie1.avif";
import zippedHoodie2 from "@/public/mainLabZippedHoodie2.avif";

export default function BestSellersSection() {
    return(
        <div className="w-11/12 md:w-9/12 flex flex-col items-center justify-center gap-8 my-8">
            <h1 className="font-bold text-3xl text-center">Best Sellers</h1>
            <div className="w-full flex items-center justify-between">
                <ul className="flex items-center justify-center gap-4 md:gap-8">
                    <li><p className="text-[11px] text-black font-bold cursor-pointer">All Products</p></li>
                    <li><p className="text-[11px] text-gray-400 hover:text-gray-600 cursor-pointer font-bold">T-Shirt</p></li>
                    <li><p className="text-[11px] text-gray-400 hover:text-gray-600 cursor-pointer font-bold">Hoodies</p></li>
                    <li><p className="text-[11px] text-gray-400 hover:text-gray-600 cursor-pointer font-bold">Jacket</p></li>
                </ul>
                <button className="bg-black text-white py-0.5 px-2 rounded rounded-sm text-[11px] hover:bg-gray-800 border border-black">
                    Show All
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ProductListItem 
                    image1={crewNeck1} 
                    image2={crewNeck2}
                    itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                    itemPrice={390}
                    isOnSale={false}/>

                    <ProductListItem 
                    image1={pierreHoodie1} 
                    image2={pierreHoodie2}
                    itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                    itemPrice={595}
                    isOnSale={false}/>

                    <ProductListItem 
                    image1={zippedHoodie1} 
                    image2={zippedHoodie2}
                    itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                    itemPrice={210}
                    isOnSale={true}/>

                    <ProductListItem 
                    image1={crewNeck3} 
                    image2={crewNeck4}
                    itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                    itemPrice={199}
                    isOnSale={true}/>
            </div>

        </div>
    );
}