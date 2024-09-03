import DesktopView from "./DesktopView/desktop-view";
import MobileView from "./MobileView/mobile-view";

export default function ProductImageSection () {
    return(
            <>
                {/* Desktop view */}
                    <DesktopView />
                {/* Mobile view */}
                    <MobileView />
            </>
    );
}