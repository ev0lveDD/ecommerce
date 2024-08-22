import Image from "next/image";

import collectionBackground from "@/public/cbackground.png"

export default function CollectionSection() {
    return(

        <div className="bg-collection-background bg-cover bg-[50px] w-full h-[512px] flex items-center justify-center">
            <div className="w-4/12 flex flex-col items-start justify-center gap-4 hidden md:block">
                <p className="hiden">X</p>
            </div>
            <div className="w-10/12 md:w-1/4 flex flex-col items-start justify-center gap-8 md:ml-14">
                <p className="text-white font-bold text-5xl">ZARA</p>
                <p className="text-white text-sm">
                    Lustrous Yet Understated. The New Evening Wear Collection Exclusively Offered At The
                    Reopened Giorgio Armani Boutique in Los Angeles.
                </p>
                <button className="bg-white text-black py-3 px-3 rounded rounded-md text-sm hover:bg-gray-200 hober:text-gray-700">
                    SEE COLLECTION
                </button>
            </div>
        </div>
    );
}