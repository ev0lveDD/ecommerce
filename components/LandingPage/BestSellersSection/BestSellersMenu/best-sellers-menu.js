export default function BestSellersMenu() {
    return(
        <div className="w-full lg:w-4/5 flex items-center justify-between">
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
    );
}