import BrandsSection from "./BrandsSection/brands-section";
import CollectionSection from "./CollectionSection/collection-sections";
import PopularStylesSection from "./PopularStylesSection/popular-styles-section";

export default function LandingPage() {
    return(
        <div className="bg-white min-w-screen flex flex-col items-start justify-center my-4">
            <div className="w-11/12 flex my-8 flex-col gap-8 items-center justify-center">
                <BrandsSection />
                <PopularStylesSection />
            </div>
            <CollectionSection />
            <div className="w-11/12 flex my-8 flex-col gap-8 items-center justify-center">

            </div>
        </div>
    );
}