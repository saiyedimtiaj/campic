import { IoTrashOutline } from "react-icons/io5";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { useDeleteProductMutation } from "@/redux/api/baseApi";


const DeleteModal = ({ id }: { id: string }) => {
    const [deleteProduct] = useDeleteProductMutation()
    const handleConfirm = () => {
        deleteProduct(id)
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className="px-1 py-1 bg-red-500 rounded text-white">
                    <IoTrashOutline size={20} />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete
                        Product and remove data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteModal;