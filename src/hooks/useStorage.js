// useStorage.js
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = (storageType, key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const storedItem = await storageType.getItem(key);
        if (storedItem !== null) {
          setStoredValue(JSON.parse(storedItem));
        }
      } catch (error) {
        console.error(`Error loading data from ${storageType} storage:`, error);
      }
    };

    loadStoredValue();
  }, [storageType, key]);

  const setValue = async (value) => {
    try {
      setStoredValue(value);
      await storageType.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving data to ${storageType} storage:`, error);
    }
  };

  return [storedValue, setValue];
};

export default useStorage;
