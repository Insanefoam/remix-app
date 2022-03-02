import axios from 'axios';
import { Product } from '~/common/types';

axios.defaults.baseURL = 'https://fakestoreapi.com';

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>('/products');

  return data;
};
