import style1 from "@/public/popular styles/style-1.png";
import style2 from "@/public/popular styles/style-2.png";
import style3 from "@/public/popular styles/style-3.png";
import style4 from "@/public/popular styles/style-4.png";
import style5 from "@/public/popular styles/style-5.png";

import Image from "next/image";

export default function PopularStylesSection() {
    return(
        
        <div className="w-4/5 flex items-center justify-center">
            <div className="w-full grid grid-cols-4 grid-rows-2 gap-4 items-start">
                <div className="col-span-2 row-span-2 flex items-center justify-start cursor-pointer">
                    <Image src={style1} alt="First Popular Style"/>
                </div>

                <div className="col-start-3 w-full h-full cursor-pointer">
                    <Image src={style2} alt="Second Popular Style" className="m-0 p-0 w-full h-full"/>
                </div>

                <div className="col-start-4 w-full h-full cursor-pointer">
                    <Image src={style3} alt="Third Popular Style" className="m-0 p-0 w-full h-full"/>
                </div>

                <div className="col-start-3 row-start-2 w-full h-full cursor-pointer">
                    <Image src={style4} alt="Fourth Popular Style" className="m-0 p-0 w-full h-full"/>
                </div>

                <div className="col-start-4 row-start-2 w-full h-full cursor-pointer">
                    <Image src={style5} alt="Fifth Popular Style" className="m-0 p-0 w-full h-full"/>
                </div>
            </div>


        </div>
    );
}