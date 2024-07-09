import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className="mt-5">
            <div className="grid grid-cols-1 container border-b border-[#E2E8F0] mx-auto md:grid-cols-2 lg:grid-cols-4 gap-5 lg:justify-center py-10 px-3">
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
                        <li className="cursor-pointer">saiyedimtiaj@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="py-4 text-center">
                <p>© {new Date().getFullYear()} BooK Inc. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;