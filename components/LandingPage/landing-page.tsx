import React from "react";
import BestSellersSection from "./BestSellersSection/best-sellers-section";
import BrandsSection from "./BrandsSection/brands-section";
import CollectionSection from "./CollectionSection/collection-sections";
import FollowOnInstagram from "./FollowOnInstagramSection/follow-on-instagram-section";
import HeaderSection from "./HeaderSection/header-section";
import PopularStylesSection from "./PopularStylesSection/popular-styles-section";

export default function LandingPage() {
    return(
        <div className="bg-white min-w-screen min-h-screen flex flex-col items-center justify-center"> {/* my-4 */}
            <HeaderSection />
            <div className="w-full flex my-8 flex-col gap-8 items-center justify-center my-8">
                <BrandsSection />
                <PopularStylesSection />
            </div>
            <CollectionSection />
            <div className="w-full flex my-8 flex-col gap-8 items-center justify-center my-8">
                <BestSellersSection />
                <FollowOnInstagram />
            </div>
        </div>
    );
}