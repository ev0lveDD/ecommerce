import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import crewNeck1 from "@/public/crewneck1.avif";
import crewNeck2 from "@/public/crewneck2.avif";
import crewNeck3 from "@/public/crewneck3.avif";
import crewNeck4 from "@/public/crewneck4.avif";

export default function MobileView () {
    return(
        <div className="w-full h-96 flex md:hidden items-center justify-center z-10">
            <Swiper 
                modules={[Pagination]} 
                pagination={true}
                className="mySwiper">
                <SwiperSlide>
                    <Image className="w-full h-96" alt="item image 1" src={crewNeck1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-96" alt="item image 2" src={crewNeck2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-96" alt="item image 3" src={crewNeck3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-96" alt="item image 4" src={crewNeck4}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}