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

// export interface Rating {
//   id: string;
//   rating: number;
//   review: string;
//   user: {
//     name: string;
//     image: string;
//   };
//   productId: string;
//   createdAt: string;
//   updatedAt: string;
//   product: {
//     name: string;
//     category: string;
//     id: string;
//   };
// }

// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   mrp: number;
//   price: number;
//   images: string[];
//   category: string;
//   storeId: string;
//   inStock: boolean;
//   store: Store;
//   rating: Rating[];
//   createdAt: string | Date;
//   updatedAt: string | Date;
// }

export interface CardProps {
  cardData: Product;
}

export interface RatingProps {
  rating: number;
  totalStars?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  cart?: Record<string, any>;
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
  user: User;
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
  createdAt: string;
  updatedAt: string;
}

export interface OurSpec {
  title: string;
  description: string;
  icon: any;
  accent: string;
}

export interface Address {
  id: string;
  userId: string;
  name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  createdAt: string;
}

export interface Coupon {
  code: string;
  description: string;
  discount: number;
  forNewUser: boolean;
  forMember: boolean;
  isPublic: boolean;
  expiresAt: string;
  createdAt: string;
}

export interface OrderItem {
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface Order {
  id: string;
  total: number;
  status: string;
  userId: string;
  storeId: string;
  addressId: string;
  isPaid: boolean;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  isCouponUsed: boolean;
  coupon: Rating;
  orderItems: OrderItem[];
  address: Address;
  user: User;
}

export interface AdminDashboardData {
  orders: number;
  stores: number;
  products: number;
  revenue: string;
  allOrders: Array<{
    createdAt: string;
    total: number;
  }>;
}

export interface StoreDashboardData {
  ratings: Rating[];
  totalOrders: number;
  totalEarnings: number;
  totalProducts: number;
}
