import Image from "next/image";
import cartIcon from "@/public/cart1.svg";

export default function ShoppingCart({cartCounter}) {
    return(
            <button className="relative flex items-center justify-center rounded-full hover:bg-slate-100">
                <Image src={cartIcon} alt="Shopping Cart icon" height={37} width={35} className="m-1"/>
                {cartCounter>0 ? 
                <p className="absolute text-[10px] top-5 font-bold">{cartCounter}</p>
                : null}
            </button>
    );
}