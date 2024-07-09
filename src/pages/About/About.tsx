import AboutBanner from "@/components/About/AboutBanner";
import FeatureBanner from "@/components/FeatureBanner/FeatureBanner";


const About = () => {
    return (
        <div>
            <FeatureBanner pageName="About Us" />
            <AboutBanner />
        </div>
    );
};

export default About;