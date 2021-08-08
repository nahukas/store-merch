import React from 'react';

import { formatPrice } from '../../../../utils/formatPrice';
import Thumb from '../../../Thumb/Tumb';
import { IProduct } from '../../models';

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  let productInstallment;
  const formattedPrice = formatPrice(product.price, product.currency);
  product.installments = 1;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currency)}
        </b>
      </div>
    );
  }

  return (
    <div
      className="shelf-item"
      //   onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <Thumb classes="shelf-item__thumb" product={product} />
      <p className="shelf-item__title">{product.name}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
};

export default Product;
