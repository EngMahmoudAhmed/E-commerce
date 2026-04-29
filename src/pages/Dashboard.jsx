import { useState } from "react";
import ProductForm from "../component/layouts/ProductForm";
import ProductTable from "../component/layouts/ProductTable";
import { useAdminProducts } from "../hooks/useAdminProducts";
import { useUpdateProduct } from "../hooks/useUpdateProduct"
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { useAddProduct } from "../hooks/useAddProduct"
import { motion } from "framer-motion";
import ProductSkeleton from "./ProductSkeleton";


const Dashboard = () => {
    const { data:products, isLoading, isError, error } = useAdminProducts();
    const deleteMutation = useDeleteProduct();
    const updateMutation = useUpdateProduct();
    const addMutation = useAddProduct();

    const [editingProduct, setEditingProduct] = useState(null)

    const handleAdd = (data) => {
        addMutation.mutate(data);
    };

    const handleUpdate = (data) => {
        updateMutation.mutate({
            id: editingProduct.id,
            updatedData: data,
        })
        setEditingProduct(null)
    }

    const handleDelete = (id) => {
        deleteMutation.mutate(id)
    }

    return (
        <>
            <h1 className="text-4xl text-center font-bold m-auto mb-10 p-buttom border-b-blue-700 py-16">
                Dashboard
            </h1>


            <ProductForm
                onSubmit={editingProduct ? handleUpdate : handleAdd}
                defaultValues={editingProduct || {}}
                isEdit={!!editingProduct}
            />

            <ProductTable
                products={products}
                onEdit={setEditingProduct}
                onDelete={handleDelete}
            />

            {/* <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
                {
                    isLoading
                        ? Array.from({ length: 10 }).map((_, i) => (
                            <ProductSkeleton key={i} />
                        )) :
                        data?.map((product) => (
                            <div className="max-w-7xl mx-auto overflow-auto">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className=" hover:shadow-gray-700 rounded-2xl shadow-xl transition overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-48 w-full object-cover"
                                    />

                                    <div className="p-4 m">
                                        <span className="text-xs text-blue-600 font-medium uppercase">
                                            {product.category}
                                        </span>

                                        <h2 className="font-semibold text-lg mt-1 truncate">{product.title}</h2>

                                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                            {product.description}
                                        </p>

                                        <div className="flex justify-between items-center mt-4">
                                            <span className="font-bold">${product.price}</span>
                                            <span className="text-sm">⭐ {product.rating}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => handleAddToCart()}
                                                className="px-4 m-auto py-2 cursor-pointer bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-900 transition"

                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))
                }
            </div > */}
        </>
    )

}

export default Dashboard;