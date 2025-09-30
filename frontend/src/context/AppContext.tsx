import { createContext, type ReactNode } from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';

const AppContext = createContext<string | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppContext.Provider value={null}>
      <ThemeProvider>
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContext;
