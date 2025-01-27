import CartItems from "@/components/Cart/CartItems";
import FeatureBanner from "@/components/FeatureBanner/FeatureBanner";
import Spinner from "@/components/spinner/Spinner";
import { useGetAllProductQuery } from "@/redux/api/baseApi";
import { TCartItem } from "@/redux/feature/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";

const CartPage = () => {
    const cartItems = useAppSelector((state) => state.cart.cart) as TCartItem[];
    const { data, isLoading } = useGetAllProductQuery(undefined);

    if (isLoading) {
        return <Spinner />
    }

    const products = Array.isArray(data) ? data as TProduct[] : [];

    const subTotal = cartItems.reduce((a, b) => a + (b.price * b.quantity), 0);

    const isQuantityExceeded = cartItems.some(cartItem => {
        const product = products.find(p => p._id === cartItem._id);
        return product ? cartItem.quantity > product.quantity : false;
    });

    return (
        <div>
            <FeatureBanner pageName="Cart" />
            <div className="container mx-auto px-4 min-h-[calc(100vh-300px)] flex items-center justify-center">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col justify-center items-center">
                        {/* <img className="w-80" src={cartImg} alt="" /> */}
                        <h3 className="text-lg font-semibold">Your cart is empty</h3>
                        <p className="max-w-[430px] text-sm mt-2 mb-4 text-center">
                            Looks like you have not added anything in your cart go ahead and
                            explore our product
                        </p>
                        <Link to='/products'>
                            <button className="py-3 text-sm px-8 bg-black text-white rounded-full">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col lg:flex-row gap-12 py-12">
                            <div className="flex-[2]">
                                <h3 className="text-lg font-semibold">Cart Items</h3>
                                {cartItems?.map(item => <CartItems key={item._id} item={item} />)}
                            </div>
                            <div className="flex-[1]">
                                <div className="text-lg font-semibold">Summary</div>

                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex pb-3 justify-between border-b border-gray-400">
                                        <div className="uppercase text-md md:text-lg font-medium text-black">
                                            Subtotal
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            ${subTotal.toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md pb-4 border-t mt-3">
                                        The subtotal reflects the total price of your order, including
                                        duties and taxes, before any applicable discounts. It does not
                                        include delivery costs and international transaction fees.
                                    </div>
                                </div>

                                {/* BUTTON START */}
                                <Link to='/checkout'>
                                    <button
                                        className={`w-full py-4 rounded-full text-lg font-medium transition-transform active:scale-95 mb-3 flex items-center gap-2 justify-center ${isQuantityExceeded ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-black text-white hover:opacity-75'}`}
                                        disabled={isQuantityExceeded}
                                    >
                                        Place Order
                                    </button>
                                </Link>
                                {/* BUTTON END */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
