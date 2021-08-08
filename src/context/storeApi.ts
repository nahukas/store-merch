import { createContext } from 'react';
import store, { IData } from '../data/data';

interface IContext {
  data: IData;
  setData: (dataProps: IData[]) => void;
}

const initial: IContext = {
  data: store,
  setData: () => {},
};

export const dataContext = createContext<IContext>(initial);
