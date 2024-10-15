'use client';

import Image from "next/image";
import HeaderSlide from "./HeaderSlide/header-slide";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function HeaderSection() {
    return(
        <div className="w-full flex items-center justify-center z-10">
                <Swiper 
                autoplay={true}
                modules={[Autoplay, Pagination]}  
                pagination={{clickable: true}}
                className="mySwiper">
                    <SwiperSlide>
                        <HeaderSlide 
                        bgNumber={1}
                        slideTitle={"BALMAIN SPRING COLLECTION"}
                        slideText={"FIND OUR OUR BEST SPRING COLLECTION. OFFERING OUR BEST QUALITY PRODUCT IN A BALMAIN SPRING COLLECTION."}
                        buttonText={"BUY NOW"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeaderSlide 
                        bgNumber={2}
                        slideTitle={"COLLECTIONS"}
                        slideText={"YOU CAN EXPLORE AND SHOP MANY DIFFERENT COLLECTIONS FROM VARIOUS BRANDS."}
                        buttonText={"SHOP NOW"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeaderSlide 
                        bgNumber={3}
                        slideTitle={"WOMENS FALL WINTER 2024 COLLECTION"}
                        slideText={"TAILORING EXPERTISE MEETING CRAFTSMANSHIP, HONORING JOY, LOVE & FREEDOM."}
                        buttonText={"DISCOVER"}
                        />
                    </SwiperSlide>
                </Swiper>
        </div>
    );
}