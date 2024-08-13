import FilterDetailsDropdown from "./FilterDetailsDropdown/filter-details-dropdown";

export default function FilterMenu({filterOpen, setFilterOpen}) {

    return(
        <div className={`${filterOpen ? "w-full md:w-1/4" : "hidden"} min-h-screen flex flex-col items-center justify-start my-4`}>

            <div className="w-4/5 h-screen flex flex-col items-center justify-start">
                <button onClick={() => setFilterOpen(!filterOpen)} className="!self-end m-4">
                    <p className="font-bold text-2xl">X</p>
                </button>
                {/* Filter Menu header */}
                <div className="w-full flex items-center justify-start mb-8 py-4 border-b-2 border-grey-lighter">
                    <h1 className="font-medium text-3xl">FILTER</h1>
                </div>

                <FilterDetailsDropdown dropdownId={"ColorFilterDropdown"} dropdownTitle={"COLOR"}>
                    <p className="font-black">TEST</p>
                </FilterDetailsDropdown>
                <FilterDetailsDropdown dropdownId={"SizeFilterDropdown"} dropdownTitle={"SIZE"}>
                    <p className="font-black">TEST</p>
                </FilterDetailsDropdown>
                <FilterDetailsDropdown dropdownId={"PriceFilterDropdown"} dropdownTitle={"BY PRICE"}>
                    <p className="font-black">TEST</p>
                </FilterDetailsDropdown>
                <FilterDetailsDropdown dropdownId={"ApparelStyleFilterDropdown"} dropdownTitle={"APPAREL STYLE"}>
                    <p className="font-black">TEST</p>
                </FilterDetailsDropdown>
            </div>
        </div>
    );
}