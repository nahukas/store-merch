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
  const [serverProducts, setServerProducts] = useState<IProduct[]>([]);

  const handleCartProductsQuantity = useCallback(
    (cartProductsParam: IProduct[]) => {
      let count = 0;
      if (cartProductsParam.length) {
        count = cartProducts
          .map((item) => item.quantity)
          .reduce((prev, next) => prev + next);
      }
      setCartProductsQuantity(count);
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

  const addProduct = (product: IProduct) => {
    let productAlreadyInCart = false;

    cartProducts.forEach((cartProduct) => {
      if (cartProduct.id === product.id) {
        cartProduct.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCartProducts(cartProducts);
    handleFloatCart();
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
    if (!cartProductsQuantity) {
      alert("Add some product in the cart!");
    } else {
      alert("Add some product in the cart!");
    }
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
    return (
      <CartProduct
        key={cartProduct.id}
        product={cartProduct}
        removeProduct={removeProduct}
        changeProductQuantity={changeProductQuantity}
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

        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">test</p>
            <small className="sub-price__installment">
              {!!cartProductsQuantity && <span>test</span>}
            </small>
          </div>
          <div onClick={() => proceedToCheckout()} className="buy-btn">
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
