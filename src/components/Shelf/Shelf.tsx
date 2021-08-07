import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ShelfProps {
  filters: string[];
  sort?: string;
}

interface Product {
  id: string;
  name: string;
  subscribers_url: string;
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
      console.log(response);
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
        {products.map((product) => (
          <p>{product.name}</p>
        ))}
      </div>
    </>
  );
};

export default Shelf;
