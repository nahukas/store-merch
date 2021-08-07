import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ShelfProps {
  filters: string[];
  sort?: string;
}

interface Product {
  id: string;
  name: string;
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

  if (isLoading && products.length !== 0) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <div className="shelf-container">
        <p>{products[0].id}</p>
        <p>{products[0].name}</p>
      </div>
    </>
  );
};

export default Shelf;
