// useLocalStorage.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStorage from "./useStorage";

const useLocalStorage = (key, initialValue) => {
  return useStorage(AsyncStorage, key, initialValue);
};

export default useLocalStorage;
