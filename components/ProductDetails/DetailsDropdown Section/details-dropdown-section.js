import DetailsDropdown from "../DetailsDropdown/details-dropdown";
import CharacteristicsRow from "./CharacteristicsRow/characteristics-row";

export default function DetailsDropdownSection() {
    return(
        <>
            <DetailsDropdown dropdownTitle="CHARACTERISTICS" dropdownId="itemddCharacteristics">
                <div className="my-4 flex flex-col gap-1">
                    <CharacteristicsRow rowName={"Brand"} rowData={"Balmain"}/>
                    <CharacteristicsRow rowName={"Collection"} rowData={"2023"}/>
                    <CharacteristicsRow rowName={"Item no."} rowData={"21324862"}/>
                    <CharacteristicsRow rowName={"Material"} rowData={"Polyester 100%"}/>
                    <CharacteristicsRow rowName={"Care recommendations"} rowData={"Machine wash"}/>
                </div>
            </DetailsDropdown>

            <DetailsDropdown dropdownTitle="PAYMENT & DELIVERY" dropdownId="itemddPayment">
                <p className="py-4 text-sm">
                    Hinting at the brands penchant for logomania, Balmain presents this sweatshirt as part of its SS23 offering. Crafted from cotton, the long-sleeved design is adorned with a contrasting logo print at the chest.
                </p>
            </DetailsDropdown>

            <DetailsDropdown dropdownTitle="RETURNS" dropdownId="itemddReturns">
                <p className="py-4 text-sm">
                    Hinting at the brands penchant for logomania, Balmain presents this sweatshirt as part of its SS23 offering. Crafted from cotton, the long-sleeved design is adorned with a contrasting logo print at the chest.
                </p>
            </DetailsDropdown>

            <DetailsDropdown dropdownTitle="SIZE TABLE" dropdownId="itemddSize">
                <p className="py-4 text-sm">
                    Hinting at the brands penchant for logomania, Balmain presents this sweatshirt as part of its SS23 offering. Crafted from cotton, the long-sleeved design is adorned with a contrasting logo print at the chest.
                </p>
            </DetailsDropdown>        
        </>
    );
}