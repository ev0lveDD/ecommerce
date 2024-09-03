const buttonNotActive = "flex item-center justify-center w-12 border border-black border-opacity-10 py-0.5 px-3 rounded rounded-md text-sm hover:border-gray-800 font-medium";
const buttonActive = "flex item-center justify-center w-12 border border-black bg-black text-white py-0.5 px-3 rounded rounded-md text-sm hover:bg-gray-800 hover:border-gray-800 font-medium";

export default function SizePickSection({ selectedButton, setSelectedButton }) {
    return(
        <div className="flex flex-col gap-2">
            <p className="text-lg font-medium">Size</p>
            <div className="flex gap-4">
                <button className={selectedButton === "XS" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("XS")}>XS</button>
                <button className={selectedButton === "S" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("S")}>S</button>
                <button className={selectedButton === "M" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("M")}>M</button>
                <button className={selectedButton === "L" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("L")}>L</button>
                <button className={selectedButton === "XL" ? buttonActive : buttonNotActive} onClick={()=>setSelectedButton("XL")}>XL</button>
            </div>
        </div>
    );
}