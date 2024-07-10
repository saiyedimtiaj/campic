import { TCartItem, deleteProduct, updateQuantity } from "@/redux/feature/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { useGetAllProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";

type TCartItemProps = {
    item: TCartItem
}

const CartItems = ({ item }: TCartItemProps) => {
    const dispatch = useAppDispatch();
    const { data, isLoading, error } = useGetAllProductQuery(undefined);

    if (isLoading) {
        return <p>Loading....</p>;
    }


    if (error) {
        return <p>Something went wrong. Please try again later.</p>;
    }

    const uniqueItem = data?.data.find((pitem: TProduct) => pitem._id === item._id);

    const handleQuantityIncrement = () => {
        if (uniqueItem && item.quantity < uniqueItem.quantity) {
            dispatch(updateQuantity({ _id: item._id, quantity: item.quantity + 1 }));
        }
    };

    const handleQuantityDecrement = () => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ _id: item._id, quantity: item.quantity - 1 }));
        }
    };

    const handleDelete = () => {
        dispatch(deleteProduct({ _id: item._id }));
    };

    window.onbeforeunload = function () {
        return 'Your upload will be lost if you leave the page, are you sure?';
    };

    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <img src={item.image} alt={item.name} />
            </div>

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {item.name}
                    </div>
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        Price : ${item.price * item.quantity}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold text-gray-500">Quantity :</p>
                        <div className="flex gap-3 items-center">
                            <Button disabled={!uniqueItem || item.quantity >= uniqueItem.quantity} variant="outline" onClick={handleQuantityIncrement}><FaPlus /></Button>
                            <span className="text-gray-500 font-semibold" >{item.quantity}</span>
                            <Button disabled={item.quantity === 1} variant="outline" onClick={handleQuantityDecrement}><FaMinus /></Button>
                        </div>
                    </div>
                    <RiDeleteBin6Line onClick={handleDelete}
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItems;
