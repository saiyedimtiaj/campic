import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="h-full relative">
            <img className='h-[calc(100vh-68px)] object-cover w-full' src={banner} alt="Banner" />
            <div className='absolute top-0 left-0 w-full h-full gap-y-3 flex justify-center flex-col pl-16 bg-black bg-opacity-50'>
                <h1 className="text-xl font-semibold text-white">WE.ARE CAMPIC</h1>
                <h1 className="text-5xl font-bold text-white">
                    Camping Trips <br /> Around The World
                </h1>
                <p className='text-lg text-white'>The Right tour fot the Right Traveler</p>
            </div>
        </div>
    );
};

export default Banner;
