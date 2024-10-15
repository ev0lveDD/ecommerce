import Link from "next/link";

export default function CollectionSection() {
    return(

        <div className="bg-collection-background bg-cover bg-[-70px] md:bg-[50px] w-full h-[512px] flex items-end md:items-center justify-center">
            <div className="w-4/12 flex flex-col items-start justify-center gap-4 hidden md:block">
                <p className="hiden">X</p>
            </div>
            <div className="w-10/12 md:w-1/4 flex flex-col items-start justify-center gap-8 md:ml-14 my-8">
                <p className="text-white font-bold text-5xl">ZARA</p>
                <p className="text-white text-sm">
                    Lustrous Yet Understated. The New Evening Wear Collection Exclusively Offered At The
                    Reopened Giorgio Armani Boutique in Los Angeles.
                </p>
                <Link href={'/WomenProductList'}>
                    <button className="bg-white text-black font-medium py-3 px-3 rounded rounded-md text-sm hover:bg-gray-200 hover:text-gray-700">
                        SEE COLLECTION
                    </button>
                </Link>
            </div>
        </div>
    );
}