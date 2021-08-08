import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShelfHeader from './ShelfHeader/ShelfHeader';

import './shelf.styles.scss';
import Product from './ProductList/Product/Product';
import { IProduct } from './models';

interface ShelfProps {
  filters: string[];
  sort?: string;
}

const Shelf: React.FC<ShelfProps> = ({ filters, sort }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleFetchProducts = async () => {
    setIsLoading(true);
    try {
      const apiUrl = 'http://localhost:8001/api/products';
      const response = await axios.get(apiUrl).then((res) => {
        return res.data;
      });
      console.log(response.products);
      setProducts(response.products);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  if (isLoading && !products.length && typeof products !== 'undefined') {
    return <h2>Loading</h2>;
  }

  return (
    <div className="shelf-container">
      <ShelfHeader productsLength={products.length} />
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Shelf;
