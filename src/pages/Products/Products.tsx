import FeatureBanner from "@/components/FeatureBanner/FeatureBanner";
import Spinner from "@/components/spinner/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useGetAllProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";


const Products = () => {
    const [selectCategory, setSelectCategory] = useState("")
    const [priceRange, setPriceRange] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [searchTrams, setSearchTrams] = useState("")
    const { data, isLoading } = useGetAllProductQuery({ price: priceRange, sortBy, category: selectCategory, searchTrams });

    if (isLoading) {
        return <Spinner />
    }

    const handleClearFilter = () => {
        setSelectCategory("")
        setSortBy("")
        setPriceRange("")
        setSearchTrams("")
    }


    return (
        <div>
            <FeatureBanner pageName="Product" />
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-5 mt-20">
                <div className="lg:max-w-[320px]">
                    <Input onChange={(e) => setSearchTrams(e.target.value)} type="text" id="search" placeholder="Search..." className="mb-4 border-2 w-[300px]" />
                    <span className="text-2xl font-semibold mt-3 border-b-2 border-black pb-1">Category</span>
                    <RadioGroup onValueChange={setSelectCategory} value={selectCategory} className="mt-5 mb-6" >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Cooking" id="Cooking" />
                            <Label htmlFor="Cooking">Cooking</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Camping" id="Camping" />
                            <Label htmlFor="Camping">Camping</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Hiking" id="Hiking" />
                            <Label htmlFor="Hiking">Hiking</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Cycling" id="Cycling" />
                            <Label htmlFor="Cycling">Cycling</Label>
                        </div>
                    </RadioGroup>
                    <span className="text-2xl font-semibold border-b-2 border-black pb-1">Price Range</span>
                    <RadioGroup onValueChange={setPriceRange} value={priceRange} className="mt-5 mb-6" >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="0-50" id="0-50" />
                            <Label htmlFor="0-50">0-50</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="51-100" id="51-100" />
                            <Label htmlFor="51-100">51-100</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="101-150" id="101-150" />
                            <Label htmlFor="101-150">101-150</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="151-200" id="151-200" />
                            <Label htmlFor="151-200">151-200</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="201-250" id="201-250" />
                            <Label htmlFor="201-250">201-250</Label>
                        </div>
                    </RadioGroup>
                    <span className="text-2xl font-semibold border-b-2 border-black pb-1">Sort By</span>
                    <RadioGroup onValueChange={setSortBy} value={sortBy} className="mt-5" >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="desc" id="High to Low" />
                            <Label htmlFor="High to Low">High to Low</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="asc" id="Low to High" />
                            <Label htmlFor="Low to High">Low to High</Label>
                        </div>
                    </RadioGroup>
                    <Button onClick={handleClearFilter} variant="outline" className="mt-4 border-black border-2">Clear Filter</Button>
                </div>
                <div className="lg:w-full grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
                    {
                        data?.data?.map((item: TProduct) => (
                            <div key={item?._id} className="space-y-1">
                                <img src={item?.image} alt="" />
                                <h4 className="md:text-lg text-xs font-medium" >{item?.name}</h4>
                                <h2 className="md:text-2xl text-sm font-semibold">${item.price}</h2>
                                <Link to={`/product-details/${item?._id}`}><Button className="text-[10px] px-2 md:px-4 h-[30px] md:h-[45px] md:text-base">View Details</Button></Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;