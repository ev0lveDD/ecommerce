import FilterDetailsDropdown from "./FilterDetailsDropdown/filter-details-dropdown";
import ColorPickInput from "@/components/ProductDetails/ColorPickSection/ColorPickInput/color-pick-input";
import FilterSizeButton from "./FilterSizeButton/filter-size-button";
import FilterPriceButton from "./FilterCheckboxButton/filter-checkbox-button";
import FilterCheckboxButton from "./FilterCheckboxButton/filter-checkbox-button";

export default function FilterMenu({filterOpen, setFilterOpen, filterColorPicked, setFilterColorPicked, filterSizePicked, setFilterSizePicked, filterPricePicked, setFilterPricePicked, filterApparelStylePicked, setFilterApparelStylePicked}) {


    return(
        <div className={`${filterOpen ? "w-full md:w-1/4" : "hidden"} flex flex-col items-center justify-start my-4`}>

            <div className="w-11/12 h-auto flex flex-col items-center justify-start">
                <button onClick={() => setFilterOpen(!filterOpen)} className="!self-end m-4">
                    <p className="font-bold text-2xl">X</p>
                </button>
                {/* Filter Menu header */}
                <div className="w-full flex items-center justify-start mb-8 py-4 border-b-2 border-grey-lighter">
                    <h1 className="font-medium text-3xl">FILTER</h1>
                </div>

                <FilterDetailsDropdown dropdownId={"ColorFilterDropdown"} dropdownTitle={"COLOR"}>
                    <div className="flex gap-4 my-4">
                        <ColorPickInput colorPickInputId="color-radio-filter-1" colorName="WHITE" colorNameCSS="bg-white-200" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
                        <ColorPickInput colorPickInputId="color-radio-filter-2" colorName="NAVY" colorNameCSS="bg-blue-950" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
                        <ColorPickInput colorPickInputId="color-radio-filter-3" colorName="BLACK" colorNameCSS="bg-black" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
                        <ColorPickInput colorPickInputId="color-radio-filter-4" colorName="GREEN" colorNameCSS="bg-green-800" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
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

                <FilterDetailsDropdown dropdownId={"PriceFilterDropdown"} dropdownTitle={"BY PRICE"} filterValue={filterPricePicked} filterChangeValue={setFilterPricePicked}>
                    <FilterCheckboxButton filterFieldName={[19,30]} filterFieldId={"price-filter-19-31"} filterValue={filterPricePicked} filterChangeValue={setFilterPricePicked}/>
                    <FilterCheckboxButton filterFieldName={[31, 50]} filterFieldId={"price-filter-31-50"} filterValue={filterPricePicked} filterChangeValue={setFilterPricePicked}/>
                    <FilterCheckboxButton filterFieldName={[51, 100]} filterFieldId={"price-filter-51-100"} filterValue={filterPricePicked} filterChangeValue={setFilterPricePicked}/>
                    <FilterCheckboxButton filterFieldName={[101, 300]} filterFieldId={"price-filter-101"} filterValue={filterPricePicked} filterChangeValue={setFilterPricePicked}/>
                </FilterDetailsDropdown>

                <FilterDetailsDropdown dropdownId={"ApparelStyleFilterDropdown"} dropdownTitle={"APPAREL STYLE"}>
                    <FilterCheckboxButton filterFieldName={"HOODIE"} filterFieldId={"apparel-filter-hoodie"} filterValue={filterApparelStylePicked} filterChangeValue={setFilterApparelStylePicked}/>
                    <FilterCheckboxButton filterFieldName={"JACKET"} filterFieldId={"apparel-filter-jacket"} filterValue={filterApparelStylePicked} filterChangeValue={setFilterApparelStylePicked}/>
                    <FilterCheckboxButton filterFieldName={"POLOS"} filterFieldId={"apparel-filter-polos"} filterValue={filterApparelStylePicked} filterChangeValue={setFilterApparelStylePicked}/>
                    <FilterCheckboxButton filterFieldName={"SHIRT"} filterFieldId={"apparel-filter-shirt"} filterValue={filterApparelStylePicked} filterChangeValue={setFilterApparelStylePicked}/>
                    <FilterCheckboxButton filterFieldName={"SWEATSHIRT"} filterFieldId={"apparel-filter-sweatshirt"} filterValue={filterApparelStylePicked} filterChangeValue={setFilterApparelStylePicked}/>
                    <FilterCheckboxButton filterFieldName={"TROUSERS"} filterFieldId={"apparel-filter-trousers"} filterValue={filterApparelStylePicked} filterChangeValue={setFilterApparelStylePicked}/>
                </FilterDetailsDropdown>

                <button className="w-full my-6 flex items-center justify-center bg-black text-white py-2 px-2 rounded rounded-md text-xs hover:bg-gray-800 md:mr-4 border border-black">
                APPLY FILTERS
                </button>
            </div>
        </div>
    );
}