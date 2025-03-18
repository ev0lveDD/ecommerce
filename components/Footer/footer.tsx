import React from "react";
import FooterNavigation from "./FooterNavigation/footerNavigation";
import LogoSection from "./LogoSection/logoSection";

export default function Footer(){
    return(
        <nav className="min-w-screen flex items-center justify-center bg-white border-t border-grey-lighter">
            <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center w-11/12 my-4">
                <LogoSection />
                <FooterNavigation />
            </div>
        </nav>
    );
}