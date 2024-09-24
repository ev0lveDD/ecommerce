
import ProductListItem from "@/components/ProductList/ProductListItem/product-list-item";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

import pierreHoodie1 from "@/public/perrebalmainhoodie1.avif";
import pierreHoodie2 from "@/public/perrebalmainhoodie2.avif";

import zippedHoodie1 from "@/public/mainLabZippedHoodie1.avif";
import zippedHoodie2 from "@/public/mainLabZippedHoodie2.avif";
import SectionHeadline from "@/components/LandingPage/SectionHeadline/section-headline";

export default function CompleteLookSection () {
    return(
        <div className="w-11/12 md:w-9/12 flex flex-col items-center justify-center gap-8 my-16">
            <SectionHeadline text={"COMPLETE THE LOOK"}/>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ProductListItem 
                    itemImage1={crewNeck1} 
                    itemImage2={crewNeck2}
                    itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                    itemPrice={390}
                    isOnSale={false}/>

                    <ProductListItem 
                    itemImage1={pierreHoodie1} 
                    itemImage2={pierreHoodie2}
                    itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                    itemPrice={595}
                    isOnSale={false}/>

                    <ProductListItem 
                    itemImage1={zippedHoodie1} 
                    itemImage2={zippedHoodie2}
                    itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                    itemPrice={210}
                    isOnSale={true}/>

                    <ProductListItem 
                    itemImage1={crewNeck3} 
                    itemImage2={crewNeck4}
                    itemName={"BALMAIN LOGO-PRINT CREW-NECK SWEATSHIRT"}
                    itemPrice={199}
                    isOnSale={true}/>
            </div>
        </div>
    );
}