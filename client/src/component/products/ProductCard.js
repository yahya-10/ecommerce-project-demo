import { useState } from "react";

import ProductDetailsSlide from "./ProductDetailsSlide";
import CartModal from "./CartModal";

import { ShoppingCartIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/solid";

const ProductCard = ({ product, addItemToList }) => {
  /**
   * Try to use only one modal between the buy and the show
   * details button  to not use 2 modals!!!!!!
   */
  const [showSlide, setShowSlide] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  if (showSlide) {
    return (
      <ProductDetailsSlide
        product={product}
        show={showSlide}
        setOpen={setShowSlide}
      />
    );
  }

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCart = (product) => {
    setCart([...cart, product]);
  };

  {
    if (showCart) {
      return (
        <CartModal products={cart} show={showCart} setOpen={setShowCart} />
      );
    }
  }
  console.log(cart);
  return (
    <div key={product.id} href={product.href} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => {
          addItemToList(product);
          handleShowCart();
          handleCart(product);
        }}
      >
        Buy Now
        <ShoppingCartIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="inline-flex items-center ml-2 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setShowSlide(true)}
      >
        Details
        <EyeIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ProductCard;
