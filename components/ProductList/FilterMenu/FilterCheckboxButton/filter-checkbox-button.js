'use client';
import { useState } from "react";

export default function FilterCheckboxButton({filterFieldName, filterFieldId, filterValue, filterChangeValue}) {

    const [isCheckboxChecked, setIsCheckboxchecked] = useState(false);

    function setFilterValue() {
        if(filterValue===filterFieldName){
            filterChangeValue("");
        } else if (filterValue!==filterFieldName) {
            filterChangeValue(filterFieldName)
        } else {
            null;
        }
    }

    return(
        <div className="flex items-center my-4 gap-2">
            <input id={filterFieldId} type="checkbox" value="" className="peer z-10 accent-black w-4 h-4 cursor-pointer" checked={isCheckboxChecked} onChange={() => {setIsCheckboxchecked(!isCheckboxChecked); setFilterValue()}}></input>
            <label className="z-0 flex items-center justify-start w-auto bg-white cursor-pointer hover:text-gray-800 peer-checked:font-bold" onClick={() => {setIsCheckboxchecked(!isCheckboxChecked); setFilterValue()}}>
                <span className="text-sm font-medium text-gray-900">{Array.isArray(filterFieldName) ? "$" + filterFieldName[0] + "-" + "$" + filterFieldName[1] : filterFieldName}</span>
            </label>
        </div>
    );
}