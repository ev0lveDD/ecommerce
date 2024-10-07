export default function SortByButton() {
    return(
        <div>
            <select id="sort by select" className="flex items-center justify-center gap-3 text-xs border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                <option value="">SORT BY +</option>
                <option value="sort-price-lowest" className="my-4">Price (lowest)</option>
                <option value="sort-latest">Latest</option>
                <option value="sort-popular">Most popular</option>
                <option value="sort-price-highest">Price (highest)</option>
            </select>
        </div>
    );
}