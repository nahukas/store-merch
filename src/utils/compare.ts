import { Product } from '../components/Shelf/models';

export const compare = {
  lowestPrice: (a: Product, b: Product) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestPrice: (a: Product, b: Product) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  },
};
