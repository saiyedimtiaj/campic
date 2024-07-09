import FeatureBanner from "@/components/FeatureBanner/FeatureBanner";
import ManagementTable from "@/components/productManagement/ManagementTable";


const ProductManagement = () => {
    return (
        <div>
            <FeatureBanner pageName="Product Management" />
            <ManagementTable />
        </div>
    );
};

export default ProductManagement;