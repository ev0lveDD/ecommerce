export default function AddToCartButton({singleData}) {

/*  useEffect(() => {
        const localData = localStorage.getItem('localShoppingCart');
        if (localData !== null) {
            setScore(JSON.parse(localData))
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('localShoppingCart', JSON.stringify(score));
    }, [score]); */


    function addToStorage() {
        var storageArray = JSON.parse(localStorage.getItem('localShoppingCart') || '[]')
        storageArray.push(singleData);
        localStorage.setItem('localShoppingCart', JSON.stringify(storageArray));
    }

    return(
        <button onClick={() => addToStorage()} className="bg-black text-white py-4 px-3 rounded rounded-md text-sm hover:bg-gray-800">
            ADD TO CART
        </button>
    );
}