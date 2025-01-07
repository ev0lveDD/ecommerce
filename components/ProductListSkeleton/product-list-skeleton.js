export default function ProductListSkeleton() {
    return(
        <div className="bg-white min-w-screen flex flex-col md:flex-row items-start justify-center my-4">

            <div className={`w-full md:w-3/4 flex flex-col items-center justify-center my-4`}>
                <div className="w-11/12 flex my-4 flex-col gap-8">


                <div className="h-32 w-24 animate-pulse">
                </div>

                {/* Product List items */}
                <div className={`w-11/12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 my-4`}>
                    {
                        map(function(singleData) {
                            return(
                                <ProductListItem
                                key={singleData.itemId}
                                itemImage1={singleData.itemImage1} 
                                itemImage2={singleData.itemImage2}
                                itemName={singleData.itemName}
                                itemPrice={singleData.itemPrice}
                                isOnSale={singleData.isOnSale}
                                categoryPath={categoryGiven === "MEN" ? "MenProductList" : categoryGiven === "WOMEN" ? "WomenProductList" : categoryGiven === "SALE" ? "SaleProductList" : null}
                                path={singleData.itemId}
                                singleData={singleData}/>
                            )
                        })
                    }


                </div>
            </div>

        </div>
    )
}