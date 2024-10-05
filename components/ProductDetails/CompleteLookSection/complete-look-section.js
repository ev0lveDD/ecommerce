
import ProductListItem from "@/components/ProductList/ProductListItem/product-list-item";

import SectionHeadline from "@/components/LandingPage/SectionHeadline/section-headline";

import checkData from "@/app/checkData.json";

export default function CompleteLookSection () {
    return(
        <div className="w-11/12 md:w-9/12 flex flex-col items-center justify-center gap-8 my-16">
            <SectionHeadline text={"COMPLETE THE LOOK"}/>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 w-full lg:w-4/5">
                    <ProductListItem 
                    itemImage1={checkData[0].itemImage1} 
                    itemImage2={checkData[0].itemImage2} 
                    itemName={checkData[0].itemName}
                    itemPrice={checkData[0].itemPrice}
                    isOnSale={checkData[0].isOnSale}
                    path={checkData[0].itemId}
                    singleData={checkData[0]}
                    />

                    <ProductListItem 
                    itemImage1={checkData[1].itemImage1} 
                    itemImage2={checkData[1].itemImage2} 
                    itemName={checkData[1].itemName}
                    itemPrice={checkData[1].itemPrice}
                    isOnSale={checkData[1].isOnSale}
                    path={checkData[1].itemId}
                    singleData={checkData[1]}/>

                    <ProductListItem 
                    itemImage1={checkData[2].itemImage1} 
                    itemImage2={checkData[2].itemImage2} 
                    itemName={checkData[2].itemName}
                    itemPrice={checkData[2].itemPrice}
                    isOnSale={checkData[2].isOnSale}
                    path={checkData[2].itemId}
                    singleData={checkData[2]}/>

                    <ProductListItem 
                    itemImage1={checkData[3].itemImage1} 
                    itemImage2={checkData[3].itemImage2} 
                    itemName={checkData[3].itemName}
                    itemPrice={checkData[3].itemPrice}
                    isOnSale={checkData[3].isOnSale}
                    path={checkData[3].itemId}
                    singleData={checkData[3]}/>
            </div>
        </div>
    );
}