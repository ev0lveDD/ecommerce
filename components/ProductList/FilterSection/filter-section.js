'use client';

import { useState, useEffect } from "react";

export default function FilterSection({filterOpen, setFilterOpen, filterList}) {

    const [filterCounter, setFilterCounter] = useState(0);
    
    useEffect(() => {
        var sumOfEntries = 0;
        var sumOfEmpty = 0;
        Object.entries(filterList).map((entry) => {
            if (entry[1] !== "" && entry[1] !== null && entry[1].length !== 0) {
                setFilterCounter(sumOfEntries+1);
                sumOfEntries = sumOfEntries+1;
                console.log(entry[1])
            } 
            else {
                null;
            }
        })
    },[filterList])

    return(
    <div className="flex flex-col md:flex-row gap-4">
        {/* Filter Button section */}
        <div className="md:border-r border-gray-600">
            <button onClick={() => setFilterOpen(!filterOpen)} className="flex items-center justify-center gap-3 bg-black text-white py-2 px-2 rounded rounded-md text-xs hover:bg-gray-800 md:mr-4 border border-black">
                FILTERS
                <div className="rounded rounded-full bg-white h-4 w-4 flex items-center justify-center">
                    <p className="text-black font-bold text-[10px]">{filterCounter}</p>
                </div>
            </button>
        </div>

        {/* Filter indicators section */}
        <div className="flex flex-col md:flex-row gap-4">
        {Object.entries(filterList).map((data, index) => {
            return(
                (data[1] !== "" ? 
                    <button key={index} className="w-fit flex items-center justify-center gap-3 text-[10px] border border-black py-1.5 px-2 rounded rounded-md hover:border-gray-400 font-medium">
                        {data[0] === "itemColor" ? "COLOR" 
                        : data[0] === "itemSize" ? "SIZE" 
                        : data[0] === "itemPrice" ? "PRICE" 
                        : data[0] === "itemApparelStyle" ? "APPAREL" : null}
                        : {Array.isArray(data[1]) ? ("$" + data[1][0] + "-$" + data[1][1]) : data[1]}
                        <span>
                            X
                        </span>
                    </button>
                : null)
            );
        })}
        </div>
    </div>
    );
}