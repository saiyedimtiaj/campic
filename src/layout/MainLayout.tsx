import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;