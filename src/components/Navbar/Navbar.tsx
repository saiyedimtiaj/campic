import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-4 py-4">
                <div>
                    <img className="h-9 cursor-pointer" src={logo} alt="" />
                </div>
                <div className="hidden lg:flex items-center gap-5">
                    <NavLink to="/" className="text-lg font-medium">Home</NavLink>
                    <NavLink to="/about" className="text-lg font-medium">About Us</NavLink>
                    <NavLink to="/products" className="text-lg font-medium">Products</NavLink>
                    <NavLink to="/product-management" className="text-lg font-medium">Product Management</NavLink>
                </div>
                <div className="flex items-center gap-3">
                    <FaRegHeart className="cursor-pointer" size={25} />
                    <NavLink to="/cart"><MdOutlineShoppingBag size={27} /></NavLink>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="lg:hidden"><BiMenuAltRight size={27} /></DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-5 lg:hidden">
                            <DropdownMenuLabel><NavLink to="/" className="text-lg font-medium">Home</NavLink></DropdownMenuLabel>
                            <DropdownMenuItem><NavLink to="/about" className="text-lg font-medium">About Us</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink to="/products" className="text-lg font-medium">Products</NavLink></DropdownMenuItem>
                            <DropdownMenuItem>  <NavLink to="/product-management" className="text-lg font-medium">Product Management</NavLink></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div >
    );
};

export default Navbar;