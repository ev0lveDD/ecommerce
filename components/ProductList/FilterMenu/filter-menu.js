import FilterDetailsDropdown from "./FilterDetailsDropdown/filter-details-dropdown";
import ColorPickInput from "@/components/ProductDetails/ColorPickInput/color-pick-input";
import FilterSizeButton from "./FilterSizeButton/filter-size-button";

export default function FilterMenu({filterOpen, setFilterOpen, filterColorPicked, setFilterColorPicked, filterSizePicked, setFilterSizePicked}) {

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
                    <div className="flex gap-4 my-4">
                        <ColorPickInput colorPickInputId="color-radio-filter-1" colorName="white" colorNameCSS="bg-white-200" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
                        <ColorPickInput colorPickInputId="color-radio-filter-2" colorName="gray" colorNameCSS="bg-gray-200" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
                        <ColorPickInput colorPickInputId="color-radio-filter-3" colorName="black" colorNameCSS="bg-black" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
                        <ColorPickInput colorPickInputId="color-radio-filter-4" colorName="green" colorNameCSS="bg-green-800" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
                    </div>
                </FilterDetailsDropdown>

                <FilterDetailsDropdown dropdownId={"SizeFilterDropdown"} dropdownTitle={"SIZE"}>
                    <div className="grid grid-cols-5 gap-y-4 my-4">
                        <FilterSizeButton sizeName={"XS"} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>
                        <FilterSizeButton sizeName={"S"} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>
                        <FilterSizeButton sizeName={"M"} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>
                        <FilterSizeButton sizeName={"L"} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>
                        <FilterSizeButton sizeName={"XL"} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>
                        <FilterSizeButton sizeName={"XXL"} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>
                        <FilterSizeButton sizeName={"3XL"} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>
                        <FilterSizeButton sizeName={"4XL"} filterSizePicked={filterSizePicked} setFilterSizePicked={setFilterSizePicked}/>
                    </div>
                </FilterDetailsDropdown>

                <FilterDetailsDropdown dropdownId={"PriceFilterDropdown"} dropdownTitle={"BY PRICE"}>
                    <div className="flex items-center my-4">
                        <input id="price-filter-checkbox" type="checkbox" value="" className="hidden peer"></input>
                        <label className="cursor-pointer flex-items-center justify center rounded-md border border-gray-200 p-2 font-bold text-gray-700 peer-checked:bg-black peer-checked:text-white peer-checked:border-black">
                        </label>
                        <span className="ms-2 text-sm font-medium text-gray-900">$19 - $30</span>
                    </div>
                </FilterDetailsDropdown>

                <FilterDetailsDropdown dropdownId={"ApparelStyleFilterDropdown"} dropdownTitle={"APPAREL STYLE"}>
                    <p className="font-black">TEST</p>
                </FilterDetailsDropdown>
            </div>
        </div>
    );
}