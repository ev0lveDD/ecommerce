import checkMark from "@/public/check-mark.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AddedToCart({ setIsAdded }) {
    const router = useRouter();

    return(
        <div onClick={() => {setIsAdded(false)}}className="w-full bg-opacity-20 backdrop-blur-sm h-full flex items-top justify-center fixed z-50 overflow-hidden overscroll-contain">
            <div className="w-72 md:w-64 h-36 bg-white border-solid border-2 border-gray-100 flex flex-col items-center justify-center rounded-md mt-20 gap-4 cursor-pointer">
                <div className="flex items-center justify-center rounded-full">
                    <Image alt="Facebook icon" width={36} height={36} src={checkMark} className=""/>
                </div>
                <p className="font-medium text-sm">Item has been added to cart</p>
            </div>
        </div>
    );
}