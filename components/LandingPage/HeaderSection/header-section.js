'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function HeaderSection() {
    return(
        <div className="w-full h-1/3 flex items-center justify-center z-10">
            <Swiper 
            autoplay={true}
            modules={[Autoplay, Pagination]} 
            pagination={{clickable: true}}
            className="mySwiper">
                <SwiperSlide>
                    <div className="bg-header-background-1 bg-cover bg-top w-full h-[540px] flex items-center justify-center">
                        <div className="bg-black/30 w-full h-full flex items-center justify-center md:justify-start">
                            <div className="w-11/12 md:w-1/3 ml-0 md:ml-24 h-full flex flex-col items-start md:items-start justify-end md:justify-end gap-6">
                                <h1 className="text-white font-bold text-3xl md:text-4xl ">BALMAIN SPRING COLLECTION</h1>
                                <p className="text-white font-medium text-sm md:text-xl">FIND OUR OUR BEST SPRING COLLECTION. OFFERING OUR BEST QUALITY PRODUCT IN A BALMAIN SPRING COLLECTION.</p>
                                <button className="bg-white text-black font-medium py-3 px-3 rounded rounded-md text-xs md:text-sm hover:bg-gray-200 hover:text-gray-700 mb-12">
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-header-background-2 bg-cover bg-top w-full h-[540px] flex items-center justify-center">
                        <div className="bg-black/30 w-full h-full flex items-center justify-center md:justify-start">
                            <div className="w-11/12 md:w-1/3 ml-0 md:ml-24 h-full flex flex-col items-start md:items-start justify-end md:justify-end gap-6">
                                <h1 className="text-white font-bold text-3xl md:text-4xl ">COLLECTIONS</h1>
                                <p className="text-white font-medium text-sm md:text-xl">YOU CAN EXPLORE AND SHOP MANY DIFFERENT COLLECTIONS FROM VARIOUS BRANDS.</p>
                                <button className="bg-white mb-12 text-black font-medium py-3 px-3 rounded rounded-md text-xs md:text-sm hover:bg-gray-200 hover:text-gray-700 mb-12">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-header-background-3 bg-cover bg-top w-full h-[540px] flex items-center justify-center">
                        <div className="bg-black/30 w-full h-full flex items-center justify-center md:justify-start">
                            <div className="w-11/12 md:w-1/3 ml-0 md:ml-24 h-full flex flex-col items-start md:items-start justify-end md:justify-end gap-6">
                                <h1 className="text-white font-bold text-3xl md:text-4xl ">WOMENS FALL WINTER 2024 COLLECTION</h1>
                                <p className="text-white font-medium text-sm md:text-xl">TAILORING EXPERTISE MEETING CRAFTSMANSHIP, HONORING JOY, LOVE & FREEDOM</p>
                                <button className="bg-white mb-12 text-black font-medium py-3 px-3 rounded rounded-md text-xs md:text-sm hover:bg-gray-200 hover:text-gray-700">
                                    DISCOVER
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}