import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="flex items-center gap-10 container mx-auto px-4">
            <div className="lg:w-1/2">
                <h1 className="text-xl font-medium mb-6">CONTACT INFORMATION</h1>
                <p className="text-gray-500">We do not sell product from our corporate headquarters in New York City. If you want to visit, please reach out to our customer service team first.</p>
                <div className="text-gray-500 mt-4">
                    <p>1201 Broadway <br /> Suite 600</p>
                </div>
                <h1 className="text-3xl underline mt-9 font-semibold">campicshop209@gmail.com</h1>
                <h1 className="text-lg mt-6">FOLLOW US</h1>
                <div className="flex gap-2 mt-5">
                    <span className="border border-black cursor-pointer p-2  text-lg rounded-full"><FaFacebookF /></span>
                    <span className="border border-black cursor-pointer p-2  text-lg rounded-full"><FaInstagram /></span>
                    <span className="border border-black cursor-pointer p-2  text-lg rounded-full"><FaTwitter /></span>
                </div>
            </div>
            <div className="lg:w-1/2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7379.579132437693!2d91.80761023559168!3d22.36157324065697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8f2d239536b%3A0xab56c2e2fecd08d4!2zS2h1bHNoaSBSZXNpZGVudGlhbCBBcmVhLCDgpprgpp_gp43gpp_gppfgp43gprDgpr7gpq4!5e0!3m2!1sbn!2sbd!4v1720515630282!5m2!1sbn!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    );
};

export default ContactInfo;