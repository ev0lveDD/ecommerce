import DesktopView from "./DesktopView/desktop-view";
import MobileView from "./MobileView/mobile-view";

export default function ProductImageSection ({singleData}) {
    return(
            <>
                {/* Desktop view */}
                    <DesktopView singleData={singleData}/>
                {/* Mobile view */}
                    <MobileView singleData={singleData}/>
            </>
    );
}