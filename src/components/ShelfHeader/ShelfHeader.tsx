import React from 'react';

interface ShelfHeaderProps {
  productsLength: number;
}

const ShelfHeader: React.FC<ShelfHeaderProps> = ({ productsLength }) => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{productsLength} Product(s) found</span>
      </small>
    </div>
  );
};

export default ShelfHeader;
