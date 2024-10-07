import FilterDetailsDropdown from "./FilterDetailsDropdown/filter-details-dropdown";
import ColorPickInput from "@/components/ProductDetails/ColorPickSection/ColorPickInput/color-pick-input";
import FilterSizeButton from "./FilterSizeButton/filter-size-button";
import FilterPriceButton from "./FilterCheckboxButton/filter-checkbox-button";
import FilterCheckboxButton from "./FilterCheckboxButton/filter-checkbox-button";

export default function FilterMenu({filterOpen, setFilterOpen, filterColorPicked, setFilterColorPicked, filterSizePicked, setFilterSizePicked}) {


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
                        <ColorPickInput colorPickInputId="color-radio-filter-2" colorName="GRAY" colorNameCSS="bg-gray-200" colorPicked={filterColorPicked} setColorPicked={setFilterColorPicked}/>
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

                <FilterDetailsDropdown dropdownId={"PriceFilterDropdown"} dropdownTitle={"BY PRICE"}>
                    <FilterCheckboxButton filterFieldName={"$19 - $30"} filterFieldId={"price-filter-19-31"}/>
                    <FilterCheckboxButton filterFieldName={"$31 - $50"} filterFieldId={"price-filter-31-50"}/>
                    <FilterCheckboxButton filterFieldName={"$51 - $100"} filterFieldId={"price-filter-51-100"}/>
                    <FilterCheckboxButton filterFieldName={"$101 +"} filterFieldId={"price-filter-101"}/>
                </FilterDetailsDropdown>

                <FilterDetailsDropdown dropdownId={"ApparelStyleFilterDropdown"} dropdownTitle={"APPAREL STYLE"}>
                    <FilterCheckboxButton filterFieldName={"Hoodies"} filterFieldId={"apparel-filter-hoodies"}/>
                    <FilterCheckboxButton filterFieldName={"Jackets"} filterFieldId={"apparel-filter-jackets"}/>
                    <FilterCheckboxButton filterFieldName={"Pants"} filterFieldId={"apparel-filter-pants"}/>
                    <FilterCheckboxButton filterFieldName={"Polos"} filterFieldId={"apparel-filter-polos"}/>
                    <FilterCheckboxButton filterFieldName={"Shorts"} filterFieldId={"apparel-filter-shorts"}/>
                    <FilterCheckboxButton filterFieldName={"Sweatshirts"} filterFieldId={"apparel-filter-sweatshirts"}/>
                    <FilterCheckboxButton filterFieldName={"Tops"} filterFieldId={"apparel-filter-tops"}/>
                    <FilterCheckboxButton filterFieldName={"Tracksuits"} filterFieldId={"apparel-filter-tracksuits"}/>
                </FilterDetailsDropdown>

                <button className="w-full my-6 flex items-center justify-center bg-black text-white py-2 px-2 rounded rounded-md text-xs hover:bg-gray-800 md:mr-4 border border-black">
                APPLY FILTERS
                </button>
            </div>
        </div>
    );
}