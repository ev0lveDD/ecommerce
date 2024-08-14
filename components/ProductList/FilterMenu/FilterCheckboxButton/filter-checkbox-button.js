'use client';
import { useState } from "react";

export default function FilterCheckboxButton({filterFieldName, filterFieldId}) {

    const [isCheckboxChecked, setIsCheckboxchecked] = useState(false);

    return(
        <div className="flex items-center my-4 gap-2">
            <input id={filterFieldId} type="checkbox" value="" className="peer z-10 accent-black w-4 h-4 cursor-pointer" checked={isCheckboxChecked} onChange={() => setIsCheckboxchecked(!isCheckboxChecked)}></input>
            <label className="z-0 flex items-center justify-start w-auto bg-white cursor-pointer hover:text-gray-800 peer-checked:font-bold" onClick={() => setIsCheckboxchecked(!isCheckboxChecked)}>
                <span className="text-sm font-medium text-gray-900">{filterFieldName}</span>
            </label>
        </div>
    );
}