import hiking from "../../assets/hiking.jpeg"
import camping from "../../assets/camping.jpeg"
import cooking from "../../assets/cooking.jpeg"
import cycling from "../../assets/cycling.jpeg"

const Categories = () => {
    return (
        <div className="my-20 container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Featured Categories</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="relative w-full h-full rounded-md">
                    <img className="rounded-md h-full" src={cycling} alt="" />
                    <div className="absolute top-0 left-0 bg-black/45 flex items-center justify-center w-full h-full rounded-md">
                        <h1 className="text-2xl font-semibold text-white">Cycling</h1>
                    </div>
                </div>
                <div className="relative rounded-md">
                    <img className="rounded-md h-full" src={hiking} alt="" />
                    <div className="absolute top-0 left-0 bg-black/45 flex items-center justify-center w-full h-full rounded-md">
                        <h1 className="text-2xl font-semibold text-white">Hiking</h1>
                    </div>
                </div>
                <div className="relative rounded-md">
                    <img className="rounded-md h-full" src={camping} alt="" />
                    <div className="absolute top-0 left-0 bg-black/45 flex items-center justify-center w-full h-full rounded-md">
                        <h1 className="text-2xl font-semibold text-white">Camping</h1>
                    </div>
                </div>
                <div className="relative rounded-md">
                    <img className="rounded-md" src={cooking} alt="" />
                    <div className="absolute top-0 left-0 bg-black/45 flex items-center justify-center w-full h-full rounded-md">
                        <h1 className="text-2xl font-semibold text-white">Cooking</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;