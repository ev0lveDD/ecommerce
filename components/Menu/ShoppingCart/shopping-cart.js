import Image from "next/image";
import cartIcon from "@/public/cart1.svg";

export default function ShoppingCart({cartCounter}) {
    return(
            <button className="relative flex items-center justify-center rounded-full border border-2 border-transparent hover:border-black z-50">
                <Image src={cartIcon} alt="Shopping Cart icon" height={30} width={27} className="m-1.5"/>
                {cartCounter>0 ? 
                <div className="absolute right-1.5 top-1 flex items-center justify-center rounded-full bg-rose-700 w-3 h-3">
                    <p className="text-[10px] font-bold">{cartCounter}</p>
                </div>
                : null}
            </button>
    );
}