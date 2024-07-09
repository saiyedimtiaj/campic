import { Link } from "react-router-dom";
import featureBanner from "../../assets/feature.jpg"
import { FaAngleRight } from "react-icons/fa6";

const FeatureBanner = ({ pageName }: { pageName: string }) => {
    return (
        <div className="h-full relative">
            <img className='h-[370px] w-full' src={featureBanner} alt="Banner" />
            <div className='absolute top-0 left-0 w-full h-full gap-y-4 flex justify-center flex-col items-center bg-black bg-opacity-30'>
                <h1 className="text-5xl font-bold text-white">
                    {pageName}
                </h1>
                <p className="flex items-center justify-center gap-3 text-white">
                    <span className="font-medium text-lg hover:text-red-500"><Link to={"/"}>Home</Link></span>
                    <span className="font-medium text-lg"><FaAngleRight /></span>
                    <span className="font-medium text-lg">{pageName}</span>
                </p>
            </div>
        </div>
    );
};

export default FeatureBanner;