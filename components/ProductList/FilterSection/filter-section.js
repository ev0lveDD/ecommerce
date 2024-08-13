export default function FilterSection({filterOpen, setFilterOpen}) {
    return(
    <div className="flex flex-col md:flex-row gap-4">
        {/* Filter Button section */}
        <div className="md:border-r border-gray-600">
            <button onClick={() => setFilterOpen(!filterOpen)}className="flex items-center justify-center gap-3 bg-black text-white py-2 px-2 rounded rounded-md text-xs hover:bg-gray-800 md:mr-4 border border-black">
                FILTERS
                <div className="rounded rounded-full bg-white h-4 w-4 flex items-center justify-center">
                    <p className="text-black font-bold text-[10px]">2</p>
                </div>
            </button>
        </div>

        {/* Filter indicators section */}
        <div className="flex flex-col md:flex-row gap-4">
            <button className="w-fit flex items-center justify-center gap-3 text-xs border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                SIZE L
                <span>
                    X
                </span>
            </button>

            <button className="w-fit flex items-center justify-center gap-3 text-xs border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                $300-$600
                <span>
                    X
                </span>
            </button>
        </div>
    </div>
    );
}