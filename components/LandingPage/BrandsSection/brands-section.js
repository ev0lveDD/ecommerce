import brand1 from "@/public/brands/brand-1.svg";
import brand2 from "@/public/brands/brand-2.svg";
import brand3 from "@/public/brands/brand-3.svg";
import brand4 from "@/public/brands/brand-4.svg";
import brand5 from "@/public/brands/brand-5.svg";

import Image from "next/image";

export default function BrandsSection() {
    return(
        <div className="w-11/12 md:w-9/12 grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-between my-4">
            <Image src={brand1} alt="First brand logo" height={130} width={130} className="cursor-pointer"/>
            <Image src={brand2} alt="Second brand logo" height={130} width={130} className="cursor-pointer"/>
            <Image src={brand3} alt="Third brand logo" height={130} width={130} className="cursor-pointer"/>
            <Image src={brand4} alt="Fourth brand logo" height={130} width={130} className="cursor-pointer"/>
            <Image src={brand5} alt="Fifth brand logo" height={130} width={130} className="cursor-pointer"/>
        </div>
    );
}