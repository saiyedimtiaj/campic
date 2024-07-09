import AboutBanner from "@/components/About/AboutBanner";
import ContactInfo from "@/components/About/ContactInfo";
import Teams from "@/components/About/Teams";
import FeatureBanner from "@/components/FeatureBanner/FeatureBanner";


const About = () => {
    return (
        <div>
            <FeatureBanner pageName="About Us" />
            <AboutBanner />
            <Teams />
            <ContactInfo />
        </div>
    );
};

export default About;