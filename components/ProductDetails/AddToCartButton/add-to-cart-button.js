export default function AddToCartButton() {

/*     useEffect(() => {
        const localData = localStorage.getItem('localShoppingCart');
        if (localData !== null) {
            setScore(JSON.parse(localData))
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('localShoppingCart', JSON.stringify(score));
    }, [score]); */

    return(
        <button onClick={() => console.log("hey")} className="bg-black text-white py-4 px-3 rounded rounded-md text-sm hover:bg-gray-800">
            ADD TO CART
        </button>
    );
}