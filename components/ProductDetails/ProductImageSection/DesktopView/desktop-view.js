import Image from "next/image";

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

export default function DesktopView() {
    return(
        <div className="w-11/12 hidden md:flex md:flex-col gap-4 items-center justify-start h-fit">
        <Image className="w-full h-1/3 animate-slidein" alt="big item image 1" src={crewNeck1}/>
        <div className="w-full grid grid-cols-2 gap-4">
            <Image className="w-full" alt="small item image 1" src={crewNeck3}/>
            <Image className="w-full" alt="small item image 2" src={crewNeck2}/>
        </div>
        <Image className="w-full h-1/3" alt="big item image 2" src={crewNeck4}/>
        </div>
    );
}