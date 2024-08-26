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
            className="mySwiper max-h-full">
                <SwiperSlide>
                    <Image className="w-full h-[620px] object-cover object-top" alt="header image 1" src={header1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-[620px] object-cover object-top" alt="header image 2" src={header2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-[620px] object-cover object-top" alt="header image 3" src={header3}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}