export const formatPrice = (price: number, currency: string) => {
  switch (currency) {
    case 'BRL':
      return price.toFixed(2).replace('.', ',');
    default:
      return price.toFixed(2);
  }
};
