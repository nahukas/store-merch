import { IProduct } from '../components/Shelf/models';

export interface IData {
  products: IProduct[];
}

const data: IData = {
  products: [
    {
      id: 1,
      sku: '12064273040195392',
      installments: 3,
      name: 'test',
      price: 3,
      currency: 'eur',
      currencyFormat: '€',
      isFreeShipping: true,
    },
    {
      id: 2,
      sku: '51498472915966370',
      installments: 4,
      name: 'test 2',
      price: 2.99,
      currency: 'eur',
      currencyFormat: '€',
      isFreeShipping: true,
      size: ['small', 'medium', 'large'],
    },
  ],
};

export default data;
