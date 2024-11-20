import cardFront from "@/public/Card Images/bg-card-front.png";
import cardBack from "@/public/Card Images/bg-card-back.png";
import cardLogo from "@/public/Card Images/card-logo.svg";

import Image from "next/image";

export default function CardView({ cardHolder, cardNumber, cardExpDateMonth, cardExpDateYear, cardCVC }) {
    return(
        <div className="flex flex-col gap-4 items-center md:items-start justify-center w-full">
            <div className="w-[350px] h-[200px] relative">
                <div className="w-2/3 h-1/2 z-20 relative flex items-center ml-8">
                    <div className="w-12 h-6 absolute">
                        <Image src={cardLogo} fill alt={"Card logo"} />
                    </div>
                </div>
                <div className="w-full h-1/2 z-20 relative flex flex-col justify-end gap-2">
                    <p className="ml-8 text-white font-medium text-xl tracking-widest">{cardNumber}</p>
                    <div className="w-11/12 flex flex-row justify-between mb-6">
                        <p className="ml-8 text-white font-medium text-xs tracking-wider">{cardHolder}</p>
                        <p className="ml-8 text-white font-medium text-xs tracking-wider">{cardExpDateMonth} / {cardExpDateYear}</p>
                    </div>
                </div>
                <Image src={cardFront} fill alt={"Card Front Image"} className="z-10"/>
            </div>

            <div className="w-[350px] h-[200px] relative">
                <div className="w-4/5 h-full z-20 relative flex items-center justify-center ml-8">
                    <div className="w-full h-6 mb-1 flex items-center justify-end">
                        <p className="text-white font-medium text-sm tracking-widest">{cardCVC}</p>
                    </div>
                </div>
                <Image src={cardBack} fill alt={"Card Back Image"} className="z-10"/>
            </div>
        </div>
    );
}