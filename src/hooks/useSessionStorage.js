// useSessionStorage.js
import { useState, useEffect } from "react";
import useStorage from "./useStorage";

const useSessionStorage = (key, initialValue) => {
  const [sessionStorage, setSessionStorage] = useState(null);

  useEffect(() => {
    // Check if AsyncStorage is available in the current environment
    const checkAsyncStorageAvailability = async () => {
      try {
        await AsyncStorage.setItem("test_key", "test_value");
        await AsyncStorage.removeItem("test_key");
        setSessionStorage(AsyncStorage);
      } catch (error) {
        console.error("AsyncStorage is not available in this environment.");
      }
    };

    checkAsyncStorageAvailability();
  }, []);

  if (!sessionStorage) {
    // AsyncStorage is not available, provide an alternative implementation
    // (e.g., use a state variable or another storage solution)
    console.warn(
      "AsyncStorage is not available. Consider using an alternative storage solution for session storage."
    );
    return useStorage(null, key, initialValue);
  }

  return useStorage(AsyncStorage, key, initialValue);
};

export default useSessionStorage;
