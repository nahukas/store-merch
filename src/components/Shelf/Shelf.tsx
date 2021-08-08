import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './models';
import ShelfHeader from './ShelfHeader/ShelfHeader';

import './shelf.styles.scss';

interface ShelfProps {
  filters: string[];
  sort?: string;
}

const Shelf: React.FC<ShelfProps> = ({ filters, sort }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const handleFetchProducts = async () => {
    setIsLoading(true);
    try {
      const apiUrl = 'https://api.github.com/users/nahukas/repos';
      const response = await axios.get(apiUrl).then((res) => {
        return res.data;
      });
      setProducts(response);
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
    <>
      <div className="shelf-container">
        <ShelfHeader productsLength={products.length} />
        {products.map((product) => (
          <p key={product.name}>{product.name}</p>
        ))}
      </div>
    </>
  );
};

export default Shelf;
