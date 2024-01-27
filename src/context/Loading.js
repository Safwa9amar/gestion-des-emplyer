import React, { createContext, useState, useContext } from "react";

// Create the context
const LoadingContext = createContext();

// Create a provider component
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // Function to set loading state
  const setLoadingState = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoadingState }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Create a custom hook to use the loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
