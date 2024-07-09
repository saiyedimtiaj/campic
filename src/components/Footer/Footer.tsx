import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className="mt-20 bg-[#F2F2F2]">
            <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 lg:grid-cols-4 gap-5 lg:justify-center py-10 px-3">
                <div>
                    <div className="flex items-end cursor-pointer">
                        <img className="h-10" src={logo} alt="" />
                    </div>
                    <div className="flex gap-2 mt-3">
                        <span className="border border-black cursor-pointer p-2  text-lg rounded-full"><FaFacebookF /></span>
                        <span className="border border-black cursor-pointer p-2  text-lg rounded-full"><FaInstagram /></span>
                        <span className="border border-black cursor-pointer p-2  text-lg rounded-full"><FaTwitter /></span>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-bold">Information</h4>
                    <ul className="mt-4 text-gray-500 space-y-2 font-medium">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Product</li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Product Management</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-bold">Helpful Links</h4>
                    <ul className="mt-4 text-gray-500 space-y-2 font-medium">
                        <li className="cursor-pointer">Support</li>
                        <li className="cursor-pointer">Trams & Condition</li>
                        <li className="cursor-pointer">Privacy</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-bold">Contact</h4>
                    <ul className="mt-4 text-gray-500 space-y-1 font-medium">
                        <li className="cursor-pointer">+880 1615-718970</li>
                        <li className="cursor-pointer">campicshop209@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="py-4 text-center border-t border-gray-300 max-w-[1200px] mx-auto">
                <p>© {new Date().getFullYear()} Campic Inc. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;