import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated on component mount
    checkAuthentication();

    // You can perform additional setup or cleanup here

    // Specify dependencies if needed, or leave it empty for a one-time effect
  }, []);

  const login = (token) => {
    // Logic to perform login using the provided token
    // For example, you might store the token in local storage
    localStorage.setItem("token", token);

    // Update the authentication state
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logic to perform logout
    // For example, clear the token from local storage
    // setIsAuthenticated(false);
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
    Location.reload();
  };

  const checkAuthentication = async () => {
    try {
      // Set loading to true when starting the authentication check
      setLoading(true);

      // Make a request to your server to check if the user is authenticated
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/check_auth`,
        {
          method: "GET",
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // User is authenticated
        setIsAuthenticated(true);
      } else {
        // User is not authenticated
        setIsAuthenticated(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setIsAuthenticated(false);
    } finally {
      // Set loading to false when the authentication check is completed
      setLoading(false);
    }
  };

  const contextValue = {
    isAuthenticated,
    loading,
    setLoading,
    login,
    logout,
    checkAuthentication,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
