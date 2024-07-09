import Banner from "@/components/Home/Banner";
import BestSelling from "@/components/Home/BestSelling";
import Carousal from "@/components/Home/Carousal";
import Categories from "@/components/Home/Categories";
import FaqSection from "@/components/Home/FaqSection";
import FeaturedProducts from "@/components/Home/FeaturedProduct";


const Home = () => {
    return (
        <div>
            <Banner />
            <BestSelling />
            <Categories />
            <FeaturedProducts />
            <Carousal />
            <FaqSection />
        </div>
    );
};

export default Home;