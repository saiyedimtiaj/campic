import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AddProductModel from "./AddProductModel";
import { useGetAllProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./updateModal";

export const columns: ColumnDef<TProduct>[] = [
    {
        accessorKey: "image",
        cell: ({ row }) => <img src={row.original.image} alt="Product" style={{ width: '50px', height: '50px' }} />,
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "rating",
        header: "Rating",
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
            <div className="flex items-center gap-3">
                <DeleteModal id={row.original._id as string} />
                <UpdateModal id={row.original._id as string} />
            </div>
        ),
    },
];

function ManagementTable() {
    const { data, isLoading, isError } = useGetAllProductQuery(undefined);

    // Use empty data array if still loading or error occurred
    const tableData = data?.data || [];

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    if (isLoading) {
        return <p>Loading....</p>;
    }

    if (isError) {
        return <p>Error</p>;
    }

    return (
        <div className="container mx-auto px-4 mb-8">
            <div className="flex justify-end py-4">
                <AddProductModel />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead className="text-lg text-black" key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default ManagementTable;
