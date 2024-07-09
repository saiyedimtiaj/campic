import banner from '../../assets/banner.jpg'
import { Button } from '../ui/button';

const AboutBanner = () => {
    return (
        <div className='container mx-auto px-4 my-20'>
            <div className='flex items-center flex-col lg:flex-row gap-14'>
                <div className='lg:w-1/2 space-y-3'>
                    <h1 className="text-5xl font-bold">ABOUT CAMPIC</h1>
                    <p>Campic is a trusted shop for the budget travelers who love independent traveling. We provide total outdoor solutions for camping and traveling.</p>
                    <Button size={"lg"}>Shop Now</Button>
                </div>
                <img className='lg:w-1/2' src={banner} alt="" />
            </div>
        </div>
    );
};

export default AboutBanner;