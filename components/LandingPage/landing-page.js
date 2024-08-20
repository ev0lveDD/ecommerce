import BrandsSection from "./BrandsSection/brands-section";
import PopularStylesSection from "./PopularStylesSection/popular-styles-section";

export default function LandingPage() {
    return(
        <div className="bg-white min-w-screen flex flex-col md:flex-row items-start justify-center my-4">
            <div className="w-11/12 flex my-4 flex-col gap-8 items-center justify-center">
                <BrandsSection />
                <PopularStylesSection />
            </div>
        </div>
    );
}