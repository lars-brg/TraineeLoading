import { useState } from "react";
import Navbar from "../components/Navbar/NavBar";
import PresentationPortfolio from "../components/PresentationPortfolio/PresentationPortfolio";
import WorksSection from "../components/WorksSection/WorksSection";
import ContactSection from "../components/ContactSection/ContactSection";

export default function Portfolio() {
    return (
        <div>
            <Navbar/>
            <PresentationPortfolio/>
            <WorksSection/>
            <ContactSection/>
        </div>
    )
}