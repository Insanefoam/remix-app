import { useContext } from 'react';
import { CartContext } from '~/contexts/cart.context';

export const useCart = () => {
  const contextValue = useContext(CartContext);

  return { ...contextValue };
};
