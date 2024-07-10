import { Link } from "react-router-dom";
import featureBanner from "../../assets/feature.jpg"
import { FaAngleRight } from "react-icons/fa6";

const FeatureBanner = ({ pageName }: { pageName: string }) => {
    return (
        <div className="h-full relative">
            <img className='md:h-[370px] h-[250px] w-full object-cover' src={featureBanner} alt="Banner" />
            <div className='absolute top-0 left-0 w-full h-full gap-y-4 flex justify-center flex-col items-center bg-black bg-opacity-30'>
                <h1 className="md:text-5xl text-3xl font-bold text-white">
                    {pageName}
                </h1>
                <p className="flex items-center justify-center gap-3 text-white">
                    <span className="font-medium md:text-lg hover:text-red-500"><Link to={"/"}>Home</Link></span>
                    <span className="font-medium md:text-lg"><FaAngleRight /></span>
                    <span className="font-medium md:text-lg">{pageName}</span>
                </p>
            </div>
        </div>
    );
};

export default FeatureBanner;