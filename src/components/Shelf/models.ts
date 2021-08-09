export interface IProduct {
  id: number;
  sku: string;
  name: string;
  description: string;
  availableSizes: string[];
  style: string;
  price: number;
  currency: "eur" | "usd";
  currencyFormat: "€" | "$";
  isFreeShipping: boolean;
  quantity: number;
}
