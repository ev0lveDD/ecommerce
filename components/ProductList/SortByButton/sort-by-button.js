export default function SortByButton() {
    return(
        <div>
{/*             <button className="flex items-center justify-center gap-3 text-xs border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                SORT BY
                <span className="text-sm">
                    +
                </span>
            </button>
            <div className="hidden z-10">
                <ul>
                    <li>
                        <p>Price (lowest)</p>
                    </li>
                    <li>
                        <p>Latest</p>
                    </li>
                    <li>
                        <p>Most popular</p>
                    </li>
                    <li>
                        <p>Price (highest)</p>
                    </li>
                </ul>
            </div> */}
            <select id="sort by select" className="flex items-center justify-center gap-3 text-xs border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                <option selected>SORT BY +</option>
                <option value="sort-price-lowest" className="my-4">Price (lowest)</option>
                <option value="sort-latest">Latest</option>
                <option value="sort-popular">Most popular</option>
                <option value="sort-price-highest">Price (highest)</option>
            </select>
        </div>
    );
}