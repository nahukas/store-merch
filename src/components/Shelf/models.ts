export interface IProduct {
  id: number;
  sku: string;
  installments: number;
  name: string;
  price: number;
  currency: 'eur' | 'usd';
  currencyFormat: '€' | '$';
  isFreeShipping: boolean;
  size?: string[];
}
