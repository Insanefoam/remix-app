import { createContext } from 'react';
import { Product } from '~/common/types';

export type CartContextValue = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
};

export const CartContext = createContext<CartContextValue>({
  products: [] as Product[],
  addProduct: () => {},
  removeProduct: () => {},
});
