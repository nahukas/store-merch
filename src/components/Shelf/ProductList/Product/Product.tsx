import React, { useContext } from "react";
import { dataContext } from "../../../../context/storeApi";

import { formatPrice } from "../../../../utils/formatPrice";
import Thumb from "../../../Thumb/Thumb";
import { IProduct } from "../../models";

interface ProductProps {
  product: IProduct;
  cartProducts: IProduct[];
}

const Product: React.FC<ProductProps> = ({ product, cartProducts }) => {
  const { updateCartProducts } = useContext(dataContext);

  const formattedPrice = formatPrice(product.price, product.currency);

  const handleAddProduct = (product: IProduct) => {
    let productAlreadyInCart = false;

    cartProducts.forEach((cartProduct) => {
      if (cartProduct.id === product.id) {
        cartProduct.quantity++;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      product.quantity = 1;
      cartProducts.push(product);
    }
    updateCartProducts(cartProducts);
  };

  return (
    <div
      className="shelf-item"
      onClick={() => handleAddProduct(product)}
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
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
};

export default Product;
