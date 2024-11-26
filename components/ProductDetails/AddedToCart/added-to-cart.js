export default function AddedToCart({ setIsAdded }) {
    return(
        <div onClick={() => {setIsAdded(false)}}className="w-full bg-opacity-20 backdrop-blur-sm h-full flex items-top justify-center absolute z-50 overflow-hidden overscroll-contain">
            <div className="w-72 h-44 bg-gray-200 flex items-center justify-center rounded-md mt-20">
                <p>Item has been added to cart</p>
            </div>
        </div>
    );
}