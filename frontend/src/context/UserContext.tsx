import { createContext, useContext, type ReactNode } from 'react';
import { assets } from '../assets/assest';
import type { User } from '../types';

const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const user = {
    id: 'user_31dQbH27HVtovbs13X2cmqefddM',
    name: 'GreatStack',
    email: 'greatstack@example.com',
    image: assets.gs_logo,
    cart: {},
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
