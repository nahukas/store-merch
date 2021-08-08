export interface IProduct {
  id: number;
  name: string;
  size?: string[];
}

export interface IData {
  products: IProduct[];
}

const data: IData = {
  products: [
    {
      id: 1,
      name: 'test',
    },
    {
      id: 2,
      name: 'test 2',
      size: ['small', 'medium', 'large'],
    },
  ],
};

export default data;
