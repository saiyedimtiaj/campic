import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About/About";
import CartPage from "@/pages/CartPage/CartPage";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Products from "@/pages/Products/Products";
import Checkout from "@/pages/checkout/Checkout";
import Success from "@/pages/success/Success";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails />
            },
            {
                path: "/product-management",
                element: <ProductManagement />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: '/success',
                element: <Success />
            }
        ]
    },
]);

export default router