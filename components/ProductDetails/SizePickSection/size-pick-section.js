const buttonNotActive = "flex item-center justify-center w-12 border border-black border-opacity-10 py-0.5 px-3 rounded rounded-md text-sm hover:border-gray-800 font-medium";
const buttonActive = "flex item-center justify-center w-12 border border-black bg-black text-white py-0.5 px-3 rounded rounded-md text-sm hover:bg-gray-800 hover:border-gray-800 font-medium";

export default function SizePickSection({ sizePicked, setSizePicked }) {
    return(
        <div className="flex flex-col gap-2">
            <p className="text-lg font-medium">Size</p>
            <div className="flex gap-4">
                <button className={sizePicked === "XS" ? buttonActive : buttonNotActive} onClick={()=>setSizePicked("XS")}>XS</button>
                <button className={sizePicked === "S" ? buttonActive : buttonNotActive} onClick={()=>setSizePicked("S")}>S</button>
                <button className={sizePicked === "M" ? buttonActive : buttonNotActive} onClick={()=>setSizePicked("M")}>M</button>
                <button className={sizePicked === "L" ? buttonActive : buttonNotActive} onClick={()=>setSizePicked("L")}>L</button>
                <button className={sizePicked === "XL" ? buttonActive : buttonNotActive} onClick={()=>setSizePicked("XL")}>XL</button>
            </div>
        </div>
    );
}