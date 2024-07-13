import FeatureBanner from "@/components/FeatureBanner/FeatureBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useUpdatePaymentMutation } from "@/redux/api/baseApi";
import { removeCart } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart } = useAppSelector(state => state.cart)
    const total = cart.reduce((a, b) => a + (b.price * b.quantity), 0)
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [updateQuantity] = useUpdatePaymentMutation();

    const cartIdanQuantity = cart.map(item => ({
        _id: item._id,
        quantity: item.quantity
    }))

    const onSubmit = () => {
        updateQuantity(cartIdanQuantity).then(() => {
            dispatch(removeCart())
            navigate('/success')
        })
    }

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/');
        }
    }, [cart, navigate]);

    return (
        <div>
            <FeatureBanner pageName="Checkout" />
            <div className="max-w-6xl mx-auto px-5 flex flex-col-reverse md:justify-center md:flex-row gap-8 mt-14 mb-20">
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <h1 className="text-lg font-medium pt-3">User Information</h1>
                        <div>
                            <Label>Name</Label>
                            <Input {...register("name", { required: true })} placeholder="User Name" className="border-black" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input {...register("email", { required: true })} placeholder="Email Address" className="border-black" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div>
                            <Label>Phone</Label>
                            <Input {...register("phone", { required: true })} placeholder="Phone Number" className="border-black" />
                            {errors.phone && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div>
                            <Label>Address</Label>
                            <Input {...register("address", { required: true })} placeholder="Address" className="border-black" />
                            {errors.address && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <h1 className="text-lg font-medium pt-3">Payment Method</h1>
                        <Controller
                            name="payment"
                            control={control}
                            defaultValue="cashOnDelibary"
                            render={({ field }) => (
                                <RadioGroup onValueChange={field.onChange} value={field.value} className="mt-5" >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="cashOnDelibary" id="Cash on Delivery" />
                                        <Label htmlFor="Cash on Delivery">Cash on Delivery</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 mb-4">
                                        <RadioGroupItem value="stripe" id="Stripe Payment" />
                                        <Label htmlFor="Stripe Payment">Stripe Payment</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />
                        <Button type="submit" className="w-full">Place Order</Button>
                    </form>
                </div>

                {/* cart information */}

                <div className="md:w-1/2">
                    {
                        cart && cart.map(item => <div key={item?._id} className="flex py-5 gap-3 md:gap-5 border-b">
                            <div className="shrink-0 aspect-square w-[50px]">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="flex flex-col md:flex-row justify-between">
                                    <div className="text-xl font-semibold text-black/[0.8]">
                                        {item.name}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <p className="text-sm font-semibold text-gray-500">Quantity :</p>
                                        <span className="text-gray-500 font-semibold" >{item.quantity}</span>
                                    </div>
                                    <div className="text-sm font-bold text-black/[0.5]">
                                        Price : ${item.price * item.quantity}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    <h1 className="text-lg font-semibold mt-4">Total : ${total}</h1>
                </div>
            </div>
        </div>
    );
};

export default Checkout;