import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import { Button } from '../ui/button';

const Banner = () => {
    return (
        <div className="h-full relative">
            <img className='h-[calc(100vh-68px)] object-cover w-full' src={banner} alt="Banner" />
            <div className='absolute top-0 left-0 w-full h-full gap-y-3 flex justify-center flex-col md:pl-16 pl-7 bg-black bg-opacity-50'>
                <h1 className="md:text-xl text-lg font-semibold text-white">WE.ARE CAMPIC</h1>
                <h1 className="md:text-5xl text-3xl font-bold text-white">
                    Camping Trips <br /> Around The World
                </h1>
                <p className='md:text-lg text-white'>The Right tour fot the Right Traveler</p>
                <Link to="/products"><Button variant="secondary" className='w-[120px]'>Shop Now</Button></Link>
            </div>
        </div>
    );
};

export default Banner;
