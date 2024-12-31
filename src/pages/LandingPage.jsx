import FAQSection from "../components/faqs/FAQsSection";
import Gallery from "../components/gallery/Gallery";
import HeroSection from "../components/hero/HeroSection";
import HowItWorks from "../components/how-it-works/HowItWorksSection";
import MenuSection from "../components/our-menu/OurMenu";
import Services from "../components/our-services/OurServicesSection";

export default function LandingPage() {
    return (
        <div className="">
            <HeroSection />
            <Services />
            <HowItWorks />
            <FAQSection />
            <MenuSection />
            <Gallery />
        </div>
    )
}
