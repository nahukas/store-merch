import { IProduct } from '../components/Shelf/models';

export const compare = {
  lowestPrice: (a: IProduct, b: IProduct) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestPrice: (a: IProduct, b: IProduct) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  },
};
