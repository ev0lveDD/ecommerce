import Image from "next/image";

export default function ShoppingCartSmallList({index, dataOfItem, itemImage1, itemName, cartItemQuantity, itemPrice, itemApparelStyle, itemSize, itemColor}) {


    return(
        <div className="w-full h-48 flex items-start justify-between border-b border-grey-lighter gap-4">
            <div className="w-64 h-52 relative">
                    <Image className="w-full h-full" alt="product image" src={itemImage1} fill={true}/>
                </div> 
            <div className="w-full min-h-40 flex flex-col items-start justify-between gap-4 my-4">
                <div className="flex flex-col gap-3 w-full">
                    <div className="w-full h-full flex items-start justify-between">
                        <p className="font-bold text-sm">{itemName}</p>
                        <p className="font-bold text-sm">${itemPrice},00</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Variant: </p>
                            <p className="text-gray-400 font-semibold text-xs">{itemApparelStyle}</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Size: </p>
                            <p className="text-gray-400 font-semibold text-xs">{itemSize}</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Color:</p>
                            <p className="text-gray-400 font-semibold text-xs">{itemColor}</p>
                        </div>
                        <div className="flex items-start justify-center gap-1">
                            <p className="text-gray-400 font-semibold text-xs">Quantity:</p>
                            <p className="text-gray-400 font-semibold text-xs">{cartItemQuantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}