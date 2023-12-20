// UserContextProvider.tsx
import React, { createContext, useContext, useState } from 'react';

// Define the type for your context values
interface UserContextType {
  userName1: string;
  updateUserName: (newName: string) => void;
}

// Create the context with an initial value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

// Create the provider component
export const UserContextProvider: React.FC<any> = ({ children }) => {
  const [userName1, setUserName] = useState<string>('');

  const updateUserName = (newName: string) => {
    setUserName(newName);
  };

  const contextValue: UserContextType = {
    userName1,
    updateUserName,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
