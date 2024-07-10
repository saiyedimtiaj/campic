import { useGetAllProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";


const BestSelling = () => {
    const { data, isLoading } = useGetAllProductQuery(undefined)

    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div className="my-20 container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center">Best Selling</h1>
            <div className="lg:w-full grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
                {
                    data?.data?.map((item: TProduct) => (
                        <div key={item?._id} className="space-y-1">
                            <img src={item?.image} alt="" />
                            <h4 className="text-lg font-medium" >{item?.name}</h4>
                            <h2 className="text-2xl font-semibold">${item.price}</h2>
                            <Link to={`/product-details/${item?._id}`}><Button>View Details</Button></Link>
                        </div>
                    )).slice(0, 4)
                }
            </div>
        </div>
    );
};

export default BestSelling;