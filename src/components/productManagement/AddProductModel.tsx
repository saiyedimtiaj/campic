import { useState } from 'react';
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ReactStars from 'react-rating-star-with-type';
import { Controller, useForm } from "react-hook-form";

const AddProductModel = () => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpen(true)}>Add Product</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]" aria-describedby="dialog-description">
                <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
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
                            <Input {...register("category", { required: true })} id="category" placeholder="Category" />
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
                            <Input type="text" {...register("image", { required: true })} id="image" placeholder="Image" />
                            {errors.image && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="space-y-1 w-full">
                            <Label>Rating</Label>
                            <Controller
                                name="rating"
                                control={control}
                                defaultValue={4.2}
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
                        <Button type="submit">Add Product</Button>
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
