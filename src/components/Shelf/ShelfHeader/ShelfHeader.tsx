import React from 'react';
import Sort from '../Sort/Sort';

interface ShelfHeaderProps {
  productsLength: number;
}

const ShelfHeader: React.FC<ShelfHeaderProps> = ({ productsLength }) => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{productsLength} Product(s) found</span>
      </small>
      <Sort />
    </div>
  );
};

export default ShelfHeader;
