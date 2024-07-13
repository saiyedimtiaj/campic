import { useEffect, useState } from 'react';
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ReactStars from 'react-rating-star-with-type';
import { Controller, FieldValues, useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { useGetSingleProductQuery, useUpdateProductMutation } from '@/redux/api/baseApi';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import Spinner from '../spinner/Spinner';

const UpdateModal = ({ id }: { id: string }) => {
    const { data, isLoading } = useGetSingleProductQuery(id);
    const [updateProduct] = useUpdateProductMutation();

    const [open, setOpen] = useState(false);

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: data?.data
    });

    // useEffect to reset the form when data is loaded
    useEffect(() => {
        if (data) {
            reset(data.data);
        }
    }, [data, reset]);

    const onSubmit = (data: FieldValues) => {
        const { name, description, rating, category, image } = data;
        const productInfo = {
            name, description, rating, category, image,
            price: parseInt(data.price),
            quantity: parseInt(data.quantity)
        };

        updateProduct({ id, data: productInfo });
        setOpen(false);
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="px-1 py-1 bg-green-600 rounded text-white">
                    <FaRegEdit size={20} />
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]" aria-describedby="dialog-description">
                <DialogHeader>
                    <DialogTitle>Update Product</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div className="flex gap-3">
                        <div className="space-y-1 w-full">
                            <Label>Name</Label>
                            <Input {...register("name", { required: true })} id="name" placeholder="Name" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 w-full">
                            <Label>Category</Label>
                            <Controller
                                name="category"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="Cooking">Cooking</SelectItem>
                                                <SelectItem value="Camping">Camping</SelectItem>
                                                <SelectItem value="Hiking">Hiking</SelectItem>
                                                <SelectItem value="Cycling">Cycling</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.category && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="space-y-1 w-full">
                            <Label>Price</Label>
                            <Input type="number" {...register("price", { required: true })} id="price" placeholder="Price" />
                            {errors.price && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 w-full">
                            <Label>Quantity</Label>
                            <Input type="number" {...register("quantity", { required: true })} id="quantity" placeholder="Quantity" />
                            {errors.quantity && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="space-y-1 w-full">
                            <Label>Image</Label>
                            <Input type="text" readOnly {...register("image", { required: true })} id="image" placeholder="Image" />
                            {errors.image && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 w-full">
                            <Label>Rating</Label>
                            <Controller
                                name="rating"
                                control={control}
                                defaultValue={3}
                                render={({ field }) => (
                                    <ReactStars
                                        {...field}
                                        onChange={field.onChange}
                                        value={field.value}
                                        isEdit={true}
                                        activeColors={["#FFCE00"]}
                                        size={24}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="space-y-1 w-full">
                        <Label>Description</Label>
                        <Textarea {...register("description", { required: true })} id="description" placeholder="Description" />
                        {errors.description && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">Update Product</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateModal;
