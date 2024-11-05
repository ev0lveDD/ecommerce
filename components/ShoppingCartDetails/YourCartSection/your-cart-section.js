import ShoppingCartItem from "../ShoppingCartItem/shopping-cart-item";

export default function YourCartSection({ shoppingList, checkFinalValue, deleteItem }) {
    return(
        <div className="w-full md:w-3/5 my-4 flex flex-col items-start justify-center gap-4">
        <h1 className="text-3xl font-medium">YOUR CART</h1>
        { (shoppingList !== null && (shoppingList ? (shoppingList.length !== null && shoppingList.length !== 0) : null)) ?
            shoppingList.map(function(singleData, index) {
                return(
                    <ShoppingCartItem 
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
                        checkFinalValue={checkFinalValue}
                        deleteItem={deleteItem}
                    />
                )
            })
        : <p className="text-xl font-medium">YOUR SHOPPING CART IS EMPTY</p>
        }
    </div>
    );
}