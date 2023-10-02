import { useState, useEffect } from "react";
const useLocalStorage = (key, defaultValue) => {
  let [value, setValue] = useState(() => {
    const storedvalue = localStorage.getItem(key);
    return storedvalue ? JSON.parse(storedvalue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  // return { value, setValue };
  return [value, setValue];
};

export default useLocalStorage;
