export default function SortByButton({sortedBy, setSortedBy}) {

    function changeSort(event) {
        if(event.target.value === sortedBy) {
            null
        } else if (event.target.value !== sortedBy) {
            setSortedBy(event.target.value);
        } else {
            null
        }
    }

    return(
        <div>
            <select id="sort by select" onChange={changeSort} className="flex items-center justify-center gap-3 text-xs border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                <option value="">SORT BY +</option>
                <option value="sort-price-lowest" className="my-4">Price (lowest)</option>
                <option value="sort-latest" >Latest</option>
                <option value="sort-popular" >Most popular</option>
                <option value="sort-price-highest" >Price (highest)</option>
            </select>
        </div>
    );
}