import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../pages/ProductCard";
import CategoryButton from "../component/ui/CategoryButton";
import ProductSkeleton from "../pages/ProductSkeleton";


function Products() {
  const { data, isLoading, } = useProducts();

  console.log(data);

  // const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter logic
  const filteredProducts =
    selectedCategory === "all"
      ? data
      : data?.filter((product) => product?.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-col md:items-center md:justify-between gap-4 mb-10">
        <h1 className="text-4xl font-bold m-auto mb-10 p-buttom border-b-blue-700">
          Our Products
        </h1>

        {/* Category Search */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["all", "beauty", "fragrances", "furniture", "groceries"].map(
            (category) => (
              <CategoryButton
                key={category}
                label={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            )
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
            <ProductSkeleton key={i} />
          )) :
          filteredProducts.map(product =>
            <ProductCard key={product.id} product={product} />
          )

        }
      </div>
    </div>
  );
}

export default Products;
