export default function InputRow({inputLabel, inputPlaceholder, inputId, inputType, inputValue, inputFunction, isInputEmpty}){
    
    const inputValid = "block w-full text-black text-sm md:text-xs p-2 font-semibold bg-white border border-gray-300 rounded-md focus:outline-none focus:border-violet-800 hover:border-violet-800 cursor-pointer";
    const inputEmpty = "block w-full text-black text-sm md:text-xs p-2 font-semibold bg-white border border-red-500 rounded-md focus:outline-none focus:border-violet-800 hover:border-violet-800 cursor-pointer";
    
    return(
        <div className="flex flex-col w-full md:w-full md:mb-0 items-start justify-center">
            <div className="flex justify-between py-1 w-full">
                <label className="tracking-wide text-slate-800 text-xs md:text-[10px] font-semibold">
                    {inputLabel}
                </label>
                {isInputEmpty ? 
                    <p className="tracking-wide text-red-500 text-xs md:text-[10px] font-semibold">
                        This field is required
                    </p>
                : null}
            </div>
            <input className={isInputEmpty ? inputEmpty : inputValid}
                id={inputId}
                type={inputType}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={(event) => inputFunction(event.target.value)}
                >
            </input>
        </div>
    );
}