export default function FilterSizeButton({sizeName, filterSizePicked, setFilterSizePicked}) {

    const sizeButtonActive = "w-8 h-8 flex cursor-pointer items-center justify-center text-white bg-black rounded rounded-full border border-black hover:border-gray-400 font-medium";
    const sizeButtonNotActive = "w-8 h-8 flex cursor-pointer items-center justify-center rounded rounded-full border border-black hover:border-gray-400 font-medium";

    return(
            <button className={filterSizePicked===sizeName ? sizeButtonActive : sizeButtonNotActive} onClick={() => setFilterSizePicked(sizeName)}>
                <p className="text-xs">{sizeName}</p>
            </button>
    );
}