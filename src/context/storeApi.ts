import { createContext } from "react";
import { IProduct } from "../components/Shelf/models";

export interface IData {
  products: IProduct[];
}
interface IContext {
  updateCartProducts: (dataProps: IProduct[]) => void;
}

const initial: IContext = {
  updateCartProducts: () => {},
};

export const dataContext = createContext<IContext>(initial);
