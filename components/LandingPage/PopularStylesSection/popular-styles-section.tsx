import React from "react";

import style1 from "@/public/popular styles/style-1.png";
import style2 from "@/public/popular styles/style-2.png";
import style3 from "@/public/popular styles/style-3.png";
import style4 from "@/public/popular styles/style-4.png";
import style5 from "@/public/popular styles/style-5.png";

import BigStyleImage from "./BigStyleImage/big-style-image";
import SmallStyleImage from "./SmallStyleImage/small-style-image";
import SectionHeadline from "../SectionHeadline/section-headline";

export default function PopularStylesSection() {
    return(
        
        <div className="w-11/12 md:w-9/12 flex flex-col items-center justify-center relative my-8 gap-8">
            <SectionHeadline headlineData={{headlineText: 'EXPLORE NEW AND POPULAR STYLES'}}/>
            <div className="w-full max-h-1/3 grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-4 items-start">
                <BigStyleImage bigImageData={{imgSource: style1, isOnSale: true}}/>
                <SmallStyleImage 
                    smallImageData={{
                    imgSource: style2, 
                    altDescription: "Second Popular Style",
                    gridPosition: "row-start-3 md:col-start-3 md:row-start-1",
                    productType: "Pants",
                    productQuantity: 200,
                    isOnSale: false
                    }}
                />

                <SmallStyleImage 
                    smallImageData={{
                        imgSource: style3,
                        altDescription: "Third Popular Style",
                        gridPosition: "row-start-4 md:col-start-4 md:row-start-1",
                        productType: "Coat",
                        productQuantity: 520,
                        isOnSale: true
                    }}
                />

                <SmallStyleImage 
                    smallImageData={{
                        imgSource: style4,
                        altDescription: "Fourth Popular Style",
                        gridPosition: "col-start-2 md:col-start-3 row-start-3 md:row-start-2",
                        productType: "Shirt",
                        productQuantity: 320,
                        isOnSale: false
                    }}
                />

                <SmallStyleImage 
                    smallImageData={{
                        imgSource: style5,
                        altDescription: "Fifth Popular Style",
                        gridPosition: "col-start-2 md:col-start-4 row-start-4 md:row-start-2 ",
                        productType: "Jacket",
                        productQuantity: 103,
                        isOnSale: false
                    }}
                />

            </div>


        </div>
    );
}