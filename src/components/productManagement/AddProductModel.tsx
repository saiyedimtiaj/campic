import { useState } from 'react';
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ReactStars from 'react-rating-star-with-type';
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useCreateProductMutation } from '@/redux/api/baseApi';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner';
import uploadImageToImgBB from '@/utils/uploadImageToImgBB';

const AddProductModel = () => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);
    const [createProduct] = useCreateProductMutation();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FieldValues) => {
        setLoading(true);
        try {
            const imageFile = data.image[0];
            const imageUploadResponse = await uploadImageToImgBB(imageFile);
            const imageUrl = imageUploadResponse.data.url;

            const productInfo = {
                ...data,
                stock: true,
                price: parseInt(data.price),
                quantity: parseInt(data.quantity),
                image: imageUrl, // Use the uploaded image URL
            };

            createProduct(productInfo);
            setLoading(false);
            setOpen(false);
            reset();
            toast.success("Add product successfully");
        } catch (error) {
            console.error('Error uploading image or creating product:', error);
            toast.error('Failed to add product');
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='mt-10' asChild>
                <Button onClick={() => setOpen(true)}>Add Product</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]" aria-describedby="dialog-description">
                <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
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
                                            <SelectValue placeholder="Select a Category" />
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
                            <Input type="file" {...register("image", { required: true })} id="image" placeholder="Image" />
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
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Loading...' : 'Add Product'}
                        </Button>
                    </div>
                </form>
                <div id="dialog-description" className="hidden">
                    This is the add product dialog where you can add new products to the inventory.
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddProductModel;
