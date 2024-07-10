import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useAppSelector } from "@/redux/hooks";
import { Outlet } from "react-router-dom";


const MainLayout = () => {

    const { cart } = useAppSelector(state => state.cart)

    if (cart.length !== 0) {
        window.onbeforeunload = function () {
            return 'Your upload will be lost if you leave the page, are you sure?';
        };
    }

    return (
        <div className="font-poppins">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;