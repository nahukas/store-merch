import React from 'react';
import { IProduct } from '../Shelf/models';

interface ThumbProps {
  product: IProduct;
  classes: string;
}

const Thumb: React.FC<ThumbProps> = ({ product, classes }) => {
  const { name, sku } = product;

  return (
    <div className={classes}>
      <img src={`../products/${sku}.jpg`} alt={name} title={name} />
    </div>
  );
};

export default Thumb;
