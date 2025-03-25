import React from "react";

import InstagramImage from "./InstagramImage/instagram-image";
import SectionHeadline from "../SectionHeadline/section-headline";

import instaImage1 from "@/public/instagram/01.png";
import instaImage2 from "@/public/instagram/02.png";
import instaImage3 from "@/public/instagram/03.png";
import instaImage4 from "@/public/instagram/04.png";
import instaImage5 from "@/public/instagram/05.png";
import instaImage6 from "@/public/instagram/06.png";

export default function FollowOnInstagram() {
    return(
        <div className="w-11/12 md:w-9/12 flex flex-col items-center justify-between my-8 gap-8">
            <SectionHeadline headlineData={{headlineText: 'Follow Products And Discounts On Instagram'}}/>
            <div className="grid grid-cols-2 md:grid-cols-6 items-center justify-center gap-4">
                <InstagramImage instagramImageData={{imageSrc: instaImage1, imageAlt: "Follow Instagram Picture 1"}}/>
                <InstagramImage instagramImageData={{imageSrc: instaImage2, imageAlt: "Follow Instagram Picture 2"}}/>
                <InstagramImage instagramImageData={{imageSrc: instaImage3, imageAlt: "Follow Instagram Picture 3"}}/>
                <InstagramImage instagramImageData={{imageSrc: instaImage4, imageAlt: "Follow Instagram Picture 4"}}/>
                <InstagramImage instagramImageData={{imageSrc: instaImage5, imageAlt: "Follow Instagram Picture 5"}}/>
                <InstagramImage instagramImageData={{imageSrc: instaImage6, imageAlt: "Follow Instagram Picture 6"}}/>
            </div>
        </div>
    );
}