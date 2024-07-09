import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import cuseomer1 from "../../assets/customer1.jpg"
import cuseomer2 from "../../assets/customer2.jpg"
import cuseomer3 from "../../assets/customer3.jpg"
import ReactStars from 'react-rating-star-with-type';
import { FaQuoteLeft } from "react-icons/fa";

const carousalData = [
    {
        name: "Jacks Sparow",
        comment: "This sleeping bag exceeded my expectations. I took it on a mountaineering expedition, and it kept me warm in sub-zero temperatures. The construction is solid, and the filling is evenly distributed without any cold spots. The draft collar and hood are well-designed, ensuring maximum warmth retention. The bag’s interior is spacious enough to sleep comfortably with extra layers on. While it is heavier than some other bags, the warmth and quality are unbeatable. Highly recommend for anyone camping in extreme cold.",
        rating: 4,
        image: cuseomer1
    },
    {
        name: "Scarlet Witch",
        comment: "Very warm sleeping bag, perfect for cold weather. I’ve used it in snowy conditions, and it performed excellently. The bag is quite thick, providing excellent insulation. However, it is a bit heavy, which might not be ideal for backpacking. The compression sack helps to reduce the size, but it’s still on the larger side. The material feels durable, and it seems like it will last for many seasons. Overall, great for winter camping but a bit cumbersome for hiking.",
        rating: 3,
        image: cuseomer2
    },
    {
        name: "Cristoper Nolen",
        comment: "This sleeping bag is incredibly warm and cozy. I used it on a winter camping trip where temperatures dropped below freezing, and I stayed warm all night. The insulation is top-notch, and the fabric is soft against the skin. It’s roomy enough to move around in but snug enough to retain heat efficiently. The zippers work smoothly without snagging, and the hood design keeps your head warm. It’s a bit bulky, but the warmth and comfort it provides are worth it.",
        rating: 5,
        image: cuseomer3
    },
    {
        name: "Jacks Sparow",
        comment: "This sleeping bag exceeded my expectations. I took it on a mountaineering expedition, and it kept me warm in sub-zero temperatures. The construction is solid, and the filling is evenly distributed without any cold spots. The draft collar and hood are well-designed, ensuring maximum warmth retention. The bag’s interior is spacious enough to sleep comfortably with extra layers on. While it is heavier than some other bags, the warmth and quality are unbeatable. Highly recommend for anyone camping in extreme cold.",
        rating: 4,
        image: cuseomer1
    },
]

function Carousal() {
    return (
        <div className="container mx-auto mb-12">
            <h1 className="text-5xl font-bold text-center mb-10">What Our Customar Say</h1>
            <div className="relative flex items-center">
                <Carousel className="border-none w-full">
                    <CarouselContent className="w-full border-none">
                        {carousalData.map((item, index) => (
                            <CarouselItem key={index} className="">
                                <div className="">
                                    <Card className="border-none">
                                        <CardContent className="flex flex-col gap-y-4 items-center justify-center p-4 h-full">
                                            <img className="w-36 h-36 rounded-full border-2 border-black object-cover" src={item.image} alt="" />
                                            <h1 className="text-2xl font-semibold">{item.name}</h1>
                                            <ReactStars size={20} activeColor="#FFCE00" value={item.rating} />
                                            <div className='relative'>
                                                <span className='text-5xl opacity-25 z-20 absolute top-1 left-3'><FaQuoteLeft /></span>
                                                <p className='mt-5 text-center'>{item.comment}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-6 top-1/2 transform -translate-y-1/2" />
                    <CarouselNext className="absolute -right-6 top-1/2 transform -translate-y-1/2" />
                </Carousel>
            </div>
        </div>
    );
}

export default Carousal;
