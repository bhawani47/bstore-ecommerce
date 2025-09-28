export interface Store {
  id: string;
  userId: string;
  name: string;
  description: string;
  username: string;
  address: string;
  status: string;
  isActive: boolean;
  logo: string;
  email: string;
  contact: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
}

export interface Rating {
  id: string;
  rating: number;
  review: string;
  user: {
    name: string;
    image: string;
  };
  productId: string;
  createdAt: string;
  updatedAt: string;
  product: {
    name: string;
    category: string;
    id: string;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  mrp: number;
  price: number;
  images: string[];
  category: string;
  storeId: string;
  inStock: boolean;
  store: Store;
  rating: Rating[];
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface CardProps {
  cardData: Product;
}

export interface RatingProps {
  rating: number;
  totalStars?: number;
}
