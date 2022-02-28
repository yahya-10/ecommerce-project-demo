import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({
  ProductsExample,
  listItems,
  addItemToList,
  removeItemFromList,
  clearCart,
}) => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {ProductsExample.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              listItems={listItems}
              addItemToList={addItemToList}
              removeItemFromList={removeItemFromList}
              clearCart={clearCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
