import Image from "next/image";

import image1 from "@/public/crewneck1.avif"
import image2 from "@/public/mainLabZippedHoodie2.avif";
import image3 from "@/public/perrebalmainhoodie1.avif";

export default function ShoppingCartItem() {
    return(
        <div className="w-full h-46 flex items-start justify-between border-b border-grey-lighter gap-4">
            <Image className="h-38 w-36 my-4" alt="Item image" src={image2}/>
            <div className="w-full min-h-48 flex flex-col items-start justify-between gap-4 my-4">
                <div className="flex flex-col gap-3 w-full">
                    <div className="w-full h-full flex items-start justify-between">
                        <p className="font-bold text-sm">BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT</p>
                        <p className="font-bold text-sm">$595,00</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-bold text-xs">Variant: </p>
                            <p className="text-gray-400 font-bold text-xs">XYZ</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-bold text-xs">Size: </p>
                            <p className="text-gray-400 font-bold text-xs">XL</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-bold text-xs">Color:</p>
                            <p className="text-gray-400 font-bold text-xs">White</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex items-start justify-between">
                    <button className="bg-black text-white py-1 px-2 rounded rounded-md text-xs hover:bg-gray-800">
                        DELETE ITEM
                    </button>
                    <div className="flex items-center justify-center gap-2">
                        <button className="bg-white text-black font-bold text-sm py-1 px-2.5 rounded rounded-full border border-1 border-black text-xs hover:text-gray-600 hover:border-gray-600">-</button>
                        <p className="text-black font-bold text-md">1</p>
                        <button className="bg-white text-black font-bold text-sm py-1 px-2 rounded rounded-full border border-1 border-black text-xs hover:text-gray-600 hover:border-gray-600">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}