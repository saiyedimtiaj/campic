import Banner from "@/components/Home/Banner";
import Carousal from "@/components/Home/Carousal";
import FaqSection from "@/components/Home/FaqSection";


const Home = () => {
    return (
        <div className="space-y-14">
            <Banner />
            <Carousal />
            <FaqSection />
        </div>
    );
};

export default Home;