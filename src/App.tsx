import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import { IProduct } from "./components/Shelf/models";
import Shelf from "./components/Shelf/Shelf";
import { dataContext } from "./context/storeApi";
import { v4 as uuid } from "uuid";

const App: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  // change to redux
  const [uuidt, setUuidt] = useState("");

  const updateFilters = (selectedCheckboxes: unknown[]) => {
    return Array.from(selectedCheckboxes);
  };

  const updateCartProducts = (products: IProduct[]) => {
    setCartProducts(products);
    setUuidt(uuid());
  };

  return (
    <dataContext.Provider
      value={{
        updateCartProducts,
      }}
    >
      <main>
        <Filter updateFilters={updateFilters} />
        <Shelf filters={[]} cartProducts={cartProducts} />
      </main>
      <Cart cartProducts={cartProducts} uuid={uuidt} />
    </dataContext.Provider>
  );
};

export default App;
