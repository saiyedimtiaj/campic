export type TProduct = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock?: boolean;
  category: string;
  image: string;
  quantity: number;
  rating: number;
};

export type TPayment = {
  name: string;
  email: string;
  phone: string;
  address: string;
  payment: string;
};
