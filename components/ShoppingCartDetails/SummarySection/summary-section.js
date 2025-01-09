import ShoppingCartSmallList from "../ShoppingCartSmallList/shopping-cart-small-list";

export default function SummarySection({ shoppingList, subtotalValue, taxValue, isCheckout, setIsCheckout, checkFinalValue, deleteItem }) {

    return(
        <div className="w-full md:w-2/5 flex flex-col items-start justify-center gap-4 my-8">
            <h1 className="text-3xl font-medium">SUMMARY</h1>
            <div className="w-full flex flex-col items-start justify-center gap-4 my-4">
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm font-medium">SUBTOTAL</p>
                    <p className="text-sm font-medium">${subtotalValue},00</p>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm font-medium">ESTIMATED DELIVERY & HANDLING</p>
                    <p className="text-sm font-medium">FREE</p>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm font-medium">ESTIMATED TAXES</p>
                    <p className="text-sm font-medium">${taxValue},00</p>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center border-t border-grey-lighter mt-16">
                <div className="w-full flex items-center justify-between my-4">
                    <p className="text-md font-bold">TOTAL</p>
                    <p className="text-md font-bold">${subtotalValue+taxValue},00</p>
                </div>

                {isCheckout ? 
                    <div className="w-full flex items-center justify-between my-4 border-t border-grey-lighter pt-8">
                        <p className="text-md font-bold">Arrives Wed, Oct 25 - Mon 30</p>
                        <p className="text-md font-bold"></p>
                    </div>
                : 
                    null}

                {!isCheckout ? 
                    <button onClick={() => {setIsCheckout(true); window.scrollTo({top: 0, behavior: 'smooth'})}} className="bg-black w-full text-white py-3 px-3 rounded rounded-md text-sm hover:bg-gray-800">
                        CHECKOUT NOW
                    </button>
                :
                (shoppingList !== null && (shoppingList ? (shoppingList.length !== null && shoppingList.length !== 0) : null)) ?
                    shoppingList.map(function(singleData, index) {
                        return(
                                <ShoppingCartSmallList 
                                    index={index}
                                    key={singleData.itemId}
                                    itemImage1={singleData.itemImage1} 
                                    itemName={singleData.itemName}
                                    cartItemQuantity={singleData.cartItemQuantity}
                                    itemPrice={singleData.itemPrice}
                                    itemApparelStyle={singleData.itemApparelStyle}
                                    itemSize={singleData.itemSize}
                                    itemColor={singleData.itemColor}
                                    dataOfItem={singleData}
                                />
                        )
                    })
                : <p className="text-xl font-medium">YOUR SHOPPING CART IS EMPTY</p>
                }
            </div>
        </div>
    );
}