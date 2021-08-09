import React, { useCallback, useContext, useEffect, useState } from "react";

import { dataContext } from "../../context/storeApi";
import { IProduct } from "../Shelf/models";
import CartProduct from "./CartProduct/CartProduct";

import "./cart.styles.scss";
import axios from "axios";

interface CartProps {
  cartProducts: IProduct[];
  uuid: string;
}

const Cart: React.FC<CartProps> = ({ cartProducts, uuid }) => {
  const { updateCartProducts } = useContext(dataContext);

  const [isOpen, setIsOpen] = useState(false);
  const [cartProductsQuantity, setCartProductsQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [serverProducts, setServerProducts] = useState<IProduct[]>([]);

  const handleCartProductsQuantity = useCallback(
    (cartProductsParam: IProduct[]) => {
      let count = 0;
      let totalCalculation = 0;
      if (cartProductsParam.length) {
        count = cartProducts
          .map((item) => item.quantity)
          .reduce((prev, next) => prev + next);
        totalCalculation = cartProducts
          .map((item) => item.quantity * item.price)
          .reduce((prev, next) => prev + next);
      }
      setCartProductsQuantity(count);
      setTotal(totalCalculation);
    },
    [cartProducts]
  );

  const handleFetchProducts = async () => {
    try {
      const apiUrl = "http://localhost:8001/api/products";
      const response = await axios.get(apiUrl).then((res) => {
        return res.data;
      });
      setServerProducts(response.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  useEffect(() => {
    if (uuid) {
      handleCartProductsQuantity(cartProducts);
    }
  }, [handleCartProductsQuantity, cartProducts, uuid]);

  const handleFloatCart = () => {
    setIsOpen(!isOpen);
  };

  const removeProduct = (product: IProduct) => {
    const index = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCartProducts(cartProducts);
    }
  };

  const proceedToCheckout = () => {
    alert(`Checkout $ ${total}`);
  };

  const changeProductQuantity = (changedProduct: IProduct) => {
    const product = cartProducts.find((p) => p.id === changedProduct.id);
    product!.quantity = changedProduct.quantity;
    if (product!.quantity <= 0) {
      removeProduct(product!);
    }
    updateCartProducts(cartProducts);
  };

  const products = cartProducts.map((cartProduct) => {
    const serveProduct = serverProducts.find((p) => p.id === cartProduct.id);
    return (
      <CartProduct
        key={cartProduct.id}
        product={cartProduct}
        removeProduct={removeProduct}
        changeProductQuantity={changeProductQuantity}
        availableQuantity={serveProduct ? serveProduct!.quantity : 0}
      />
    );
  });

  return (
    <div className={isOpen ? "float-cart float-cart--open" : "float-cart"}>
      {isOpen && (
        <div
          onClick={() => handleFloatCart()}
          className="float-cart__close-btn"
        >
          X
        </div>
      )}

      {!isOpen && (
        <span
          onClick={() => handleFloatCart()}
          className="bag bag--float-cart-closed"
        >
          <span className="bag__quantity">{cartProductsQuantity}</span>
        </span>
      )}

      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{cartProductsQuantity}</span>
          </span>
          <span className="header-title">Cart</span>
        </div>

        <div className="float-cart__shelf-container">
          {products}
          {!products.length && (
            <p className="shelf-empty">
              Add some products in the cart <br />
            </p>
          )}
        </div>

        {products.length && (
          <div className="float-cart__footer">
            <div className="sub">Total</div>
            <div className="sub-price">
              <p className="sub-price__val">{`$ ${total.toFixed(2)}`}</p>
            </div>
            <div onClick={() => proceedToCheckout()} className="buy-btn">
              Checkout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
