import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;