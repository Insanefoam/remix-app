import { useState } from 'react';
import { Product } from '~/common/types';
import { CartContextValue } from '~/contexts/cart.context';

export const useCartContextValue = () => {
  const [products, setProducts] = useState([] as Product[]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (product: Product) => {
    const indexToDelete = products.indexOf(product);

    setProducts(products.filter((_, index) => index !== indexToDelete));
  };

  const contextValue: CartContextValue = {
    products: products,
    addProduct,
    removeProduct,
  };

  return contextValue;
};
