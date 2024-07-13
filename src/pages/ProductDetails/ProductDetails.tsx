import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import ReactStars from 'react-rating-star-with-type';
import { Button } from "@/components/ui/button";
import ImageMagnifier from "./ImageMagnifier";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TCartItem, addToCart, updateQuantity } from "@/redux/feature/cartSlice";
import { toast } from "sonner";
import Spinner from "@/components/spinner/Spinner";


const ProductDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSingleProductQuery(id);
    const dispatch = useAppDispatch()
    const { cart } = useAppSelector((state) => state.cart)

    if (isLoading) {
        return <Spinner />
    }
    const isItemExist = cart.find((item: TCartItem) => item._id === data?.data?._id);

    const handleAddToCart = () => {
        if (isItemExist) {
            dispatch(updateQuantity({ _id: data.data._id, quantity: isItemExist?.quantity + 1 }))
        } else {
            const cartInfo = {
                _id: data?.data?._id,
                name: data?.data?.name,
                image: data?.data?.image,
                price: data?.data?.price,
                quantity: 1,
            };
            dispatch(addToCart(cartInfo));
            toast.success("Product added to cart successfully", { duration: 2000 });
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 flex lg:items-center flex-col mt-20 md:flex-row gap-7">
            <div className="md:w-1/2">
                <ImageMagnifier
                    src={data?.data?.image}
                    width="100%"
                    height="auto"
                    magnifierHeight={200}
                    magnifierWidth={200}
                    zoomLevel={2}
                />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-2xl font-medium">{data?.data?.name}</h2>
                <h1 className="text-3xl font-bold mt-3"> ${data.data.price}</h1>
                <div className="flex gap-1 mt-2 items-center">
                    <p className="font-medium">Category : </p>
                    <p className="text-sm">#{data?.data?.category}</p>
                </div>
                <div className="flex gap-1 mt-2 items-center">
                    <p className="font-medium">Stock : </p>
                    <p className="text-sm">{data?.data?.quantity}</p>
                </div>
                <div className="mt-3">
                    <ReactStars size={23} value={data.data.rating} activeColor="#FFCE00" />
                </div>
                <Button disabled={isItemExist?.quantity! >= data.data.quantity || data?.data?.quantity === 0} onClick={handleAddToCart} className="mt-4">Add to Cart</Button>
                <p className="text-gray-500 text-base mt-4">{data?.data?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;