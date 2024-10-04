import Image from "next/image";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

export default function DesktopView({singleData}) {
    return(
        <div className="w-11/12 hidden md:flex md:flex-col gap-4 items-center justify-start h-fit relative">
            <div className="w-full h-[500px] relative">
                <Image className="w-full" alt="big item image 1" src={singleData.itemImage1} fill={true}/>
            </div>
        <div className="w-full grid grid-cols-2 gap-4 relative">
            <div className="w-full h-96 relative">
                <Image className="w-full" alt="small item image 1" src={singleData.itemImage2} fill={true}/>
            </div>
            <div className="w-full h-96 relative">
                <Image className="w-full" alt="small item image 2" src={singleData.itemImage3} fill={true}/>
            </div>
        </div>
        <div className="w-full h-[500px] relative">
            <Image className="w-full" alt="big item image 2" src={singleData.itemImage4} fill={true}/>
        </div>
        </div>
    );
}