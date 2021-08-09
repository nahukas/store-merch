import React, { useState } from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { IProduct } from "../../Shelf/models";
import Thumb from "../../Thumb/Thumb";

interface CartProductProps {
  product: IProduct;
  removeProduct: (product: IProduct) => void;
  changeProductQuantity: (product: IProduct) => void;
  availableQuantity: number;
}

const CartProduct: React.FC<CartProductProps> = ({
  product,
  removeProduct,
  changeProductQuantity,
  availableQuantity,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(!isMouseOver);
  };

  const handleOnIncrease = () => {
    product.quantity = product.quantity + 1;
    changeProductQuantity(product);
  };

  const handleOnDecrease = () => {
    product.quantity = product.quantity - 1;
    changeProductQuantity(product);
  };

  const classes = ["shelf-item"];

  if (!!isMouseOver) {
    classes.push("shelf-item--mouseover");
  }

  return (
    <div className={classes.join(" ")}>
      <div
        className="shelf-item__del"
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOver()}
        onClick={() => removeProduct(product)}
      />
      <Thumb classes="shelf-item__thumb" product={product} />
      <div className="shelf-item__details">
        <p className="title">{product.name}</p>
        <p className="desc">
          {`${product.availableSizes[0]} | ${product.style}`} <br />
          Quantity: {product.quantity}
        </p>
      </div>
      <div className="shelf-item__price">
        <p>{`${product.currencyFormat}  ${formatPrice(
          product.price,
          product.currency
        )}`}</p>
        <div>
          <button
            onClick={handleOnDecrease}
            disabled={product.quantity === 1 ? true : false}
            className="change-product-button"
          >
            -
          </button>
          <button
            disabled={product.quantity === availableQuantity ? true : false}
            onClick={handleOnIncrease}
            className="change-product-button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
