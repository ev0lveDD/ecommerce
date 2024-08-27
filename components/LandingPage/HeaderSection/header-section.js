'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import header1 from "@/public/header_images/header1.jpg";
import header2 from "@/public/header_images/header2.jpg";
import header3 from "@/public/header_images/header3.jpg";

export default function HeaderSection() {
    return(
        <div className="w-full h-1/3 flex items-center justify-center z-10">
            <Swiper 
            modules={[Pagination]} 
            pagination={true}
            className="mySwiper">
                <SwiperSlide>
                    <div className="bg-header-background-1 bg-cover bg-top w-full h-[540px] flex flex-col items-center md:items-start justify-end md:justify-end gap-6">
                        <h1 className="text-white font-bold text-4xl ml-16">Balmain Spring Collection</h1>
                        <p className="text-white font-medium text-xl mb-12 ml-16">Find out our best spring collection. Offering our best quality product in a Balmain spring Collection.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-header-background-2 bg-cover bg-top w-full h-[540px] flex flex-col items-center md:items-start justify-end md:justify-end gap-6">
                        <h1 className="text-white font-bold text-4xl ml-16">Balmain Spring Collection</h1>
                        <p className="text-white font-medium text-xl mb-12 ml-16">Find out our best spring collection. Offering our best quality product in a Balmain spring Collection.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-header-background-3 bg-cover bg-top w-full h-[540px] flex flex-col items-center md:items-start justify-end md:justify-end gap-6">
                        <h1 className="text-white font-bold text-4xl ml-16">Balmain Spring Collection</h1>
                        <p className="text-white font-medium text-xl mb-12 ml-16">Find out our best spring collection. Offering our best quality product in a Balmain spring Collection.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}