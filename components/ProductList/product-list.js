import Image from "next/image";

import ProductListItem from "./ProductListItem/product-list-item";
import SortByButton from "./SortByButton/sort-by-button";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

import pierreHoodie1 from "@/public/perrebalmainhoodie1.avif";
import pierreHoodie2 from "@/public/perrebalmainhoodie2.avif";
import pierreHoodie3 from "@/public/perrebalmainhoodie3.avif";
import pierreHoodie4 from "@/public/perrebalmainhoodie4.avif";

import zippedHoodie1 from "@/public/mainLabZippedHoodie1.avif";
import zippedHoodie2 from "@/public/mainLabZippedHoodie2.avif";
import zippedHoodie3 from "@/public/mainLabZippedHoodie3.avif";
import zippedHoodie4 from "@/public/mainLabZippedHoodie4.avif";

export default function ProductList() {
    return(
        <div className="bg-white min-w-screen flex flex-col items-center justify-center my-4">
            <div className="w-11/12 flex my-4 flex-col gap-8">

                {/* Breadcrumbs section */}
                <div className="flex gap-2">
                    <p className="text-xs font-medium text-gray-400">MEN</p>
                    <p className="text-xs font-medium text-gray-400">/</p>
                    <p className="text-xs font-medium text-gray-400">CLOTHES</p>
                    <p className="text-xs font-medium text-gray-400">/</p>
                    <p className="text-xs font-medium">TOPS</p>
                </div>

                {/* Category Name and filtered items quantity / number */}
                <div className="flex justify-start gap-4">
                    <h1 className="text-5xl md:text-6xl font-medium animate-slidein">MEN`S TOPS</h1>
                    <p className="text-sm md:text-md font-medium">
                        8
                    </p>
                </div>

                {/* Filter buttons & sort button section */}
                <div className="flex justify-between gap-4">
                    
                    {/* Filter buttons */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:border-r border-gray-600">
                            <button className="flex items-center justify-center gap-3 bg-black text-white py-2 px-2 rounded rounded-md text-xs hover:bg-gray-800 md:mr-4 border border-black">
                                FILTERS
                                <div className="rounded rounded-full bg-white h-4 w-4 flex items-center justify-center">
                                    <p className="text-black font-bold text-[10px]">2</p>
                                </div>
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <button className="w-fit flex items-center justify-center gap-3 text-xs border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                                SIZE L
                                <span>
                                    X
                                </span>
                            </button>

                            <button className="w-fit flex items-center justify-center gap-3 text-xs border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                                $300-$600
                                <span>
                                    X
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Sort button */}
                    <SortByButton />

                </div>

            </div>


            {/* Product List items */}
            <div className="w-11/12 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 my-4">

                <ProductListItem 
                image1={crewNeck1} 
                image2={crewNeck2}
                itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                itemPrice={595}/>

                <ProductListItem 
                image1={pierreHoodie1} 
                image2={pierreHoodie2}
                itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                itemPrice={595}/>
                
                <ProductListItem 
                image1={zippedHoodie1} 
                image2={zippedHoodie2}
                itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                itemPrice={595}/>

                <ProductListItem 
                image1={crewNeck3} 
                image2={crewNeck4}
                itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                itemPrice={595}/>

                <ProductListItem 
                image1={pierreHoodie3} 
                image2={pierreHoodie4}
                itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                itemPrice={595}/>

                <ProductListItem 
                image1={zippedHoodie3} 
                image2={zippedHoodie4}
                itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                itemPrice={595}/>

                <ProductListItem 
                image1={crewNeck4} 
                image2={crewNeck1}
                itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                itemPrice={595}/>

                <ProductListItem 
                image1={pierreHoodie2} 
                image2={pierreHoodie4}
                itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                itemPrice={595}/>

            </div>
        </div>
    );
}