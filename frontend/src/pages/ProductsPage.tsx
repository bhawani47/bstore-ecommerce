import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { productDummyData } from "../assets/assest";
import Card from "../components/common/Card";
import Title from "../components/common/Title";
import type { Product } from "../types";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get("search") ?? "").trim().toLowerCase();

  const filteredProducts: Product[] = useMemo(() => {
    if (!searchQuery) return productDummyData;

    return productDummyData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery]);

  const isEmpty = filteredProducts.length === 0;

  return (
    <>
      <Title
        title="Products"
        description={
          searchQuery
            ? `You searched for: “${searchQuery}”`
            : "Find your best choice here"
        }
        visibleButton={false}
      />

      {isEmpty ? (
        <div className="p-10 text-center text-text-secondary">
          <p className="text-lg">
            No products found for{" "}
            <span className="font-semibold text-text">“{searchQuery}”</span>.
          </p>
          <p className="text-sm mt-2">Try searching with different keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
          {filteredProducts.map((product) => (
            <Card key={product.id} cardData={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsPage;
