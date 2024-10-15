import Link from "next/link";

export default function HeaderSlide ({bgNumber, slideTitle, slideText, buttonText}) {
    const bgImage1 = "bg-header-background-1 bg-cover bg-top bg-no-repeat w-full h-[540px] md:h-[560px] lg:h-[820px] flex items-center justify-center";
    const bgImage2 = "bg-header-background-2 bg-cover bg-top bg-no-repeat w-full h-[540px] md:h-[560px] lg:h-[820px] flex items-center justify-center";
    const bgImage3 = "bg-header-background-3 bg-cover bg-top lg:bg-center bg-no-repeat w-full h-[540px] md:h-[560px] lg:h-[820px] flex items-center justify-center";

    return(
    <div className={bgNumber === 1 ? bgImage1 : bgNumber === 2 ? bgImage2 : bgNumber === 3 ? bgImage3 : null}>
        <div className="bg-black/30 w-full h-full flex items-center justify-center md:justify-start">
            <div className="w-11/12 md:w-1/3 ml-0 md:ml-24 h-full flex flex-col items-start md:items-start justify-end md:justify-end gap-6">
                <h1 className="text-white font-bold text-3xl md:text-4xl ">{slideTitle}</h1>
                <p className="text-white font-medium text-sm md:text-xl">{slideText}</p>
                <Link href={'\WomenProductList'}>
                    <button className="bg-white text-black font-medium py-3 px-3 rounded rounded-md text-xs md:text-sm hover:bg-gray-200 hover:text-gray-700 mb-12">
                        {buttonText}
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
}