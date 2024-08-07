import Image from "next/image";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

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
                    <h1 className="text-6xl font-medium">MEN`S TOPS</h1>
                    <p className="text-md font-medium">
                        8
                    </p>
                </div>

                {/* Filter buttons & sort button section */}
                <div className="flex-col md:flex-row justify-between gap-4">
                    
                    {/* Filter buttons */}
                    <div className="flex-col md:flex-row gap-4">
                        <div className="border-r border-gray-600">
                            <button className="flex items-center justify-center gap-3 bg-black text-white py-2 px-4 rounded rounded-md text-xs hover:bg-gray-800 mr-4">
                                FILTERS
                            <div className="rounded rounded-full bg-white h-4 w-4">
                                <p className="text-black font-medium text-[10px]">2</p>
                            </div>
                            </button>
                        </div>

                        <div className="flex-col md:flex-row gap-4">
                            <button className="flex items-center justify-between gap-3  text-xs border border-black py-2 px-6 rounded rounded-md hover:border-gray-400 font-medium">
                                SIZE L
                                <span>
                                    X
                                </span>
                            </button>

                            <button className="flex items-between justify-center gap-3  text-xs border border-black py-2 px-6 rounded rounded-md hover:border-gray-400 font-medium">
                                $300-$600
                                <span>
                                    X
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Sort button */}
                    <div>
                    <button className="flex items-center justify-between gap-3 text-xs border border-black py-2 px-6 rounded rounded-md hover:border-gray-400 font-medium">
                        SORT BY
                        <span>
                            +
                        </span>
                    </button>
                    </div>

                </div>

            </div>


            {/* Product List items */}
            <div className="w-11/12 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 my-4">

                <div className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                    <Image className="w-full" alt="product image" src={crewNeck2}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-medium text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-medium text-gray-400 text-sm">$595.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                    <Image className="w-full" alt="product image" src={crewNeck1}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-medium text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-medium text-gray-400 text-sm">$595.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                    <Image className="w-full" alt="product image" src={crewNeck3}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-medium text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-medium text-gray-400 text-sm">$595.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                    <Image className="w-full" alt="product image" src={crewNeck4}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-medium text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-medium text-gray-400 text-sm">$595.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                    <Image className="w-full" alt="product image" src={crewNeck1}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-medium text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-medium text-gray-400 text-sm">$595.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                    <Image className="w-full" alt="product image" src={crewNeck2}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-medium text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-medium text-gray-400 text-sm">$595.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                    <Image className="w-full" alt="product image" src={crewNeck3}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-medium text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-medium text-gray-400 text-sm">$595.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-start cursor-pointer">
                    <Image className="w-full" alt="product image" src={crewNeck4}/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-medium text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-medium text-gray-400 text-sm">$595.00</p>
                    </div>
                </div>

            </div>
        </div>
    );
}