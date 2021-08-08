import React, { useContext } from 'react';
import { dataContext } from '../../../context/storeApi';

import Product from './Product/Product';

const ProductList = () => {
  const { data } = useContext(dataContext);

  return data.products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
};

export default ProductList;
