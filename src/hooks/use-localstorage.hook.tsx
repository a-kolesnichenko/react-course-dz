import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [data, setData] = useState<T>(() => {
    const res = JSON.parse(localStorage.getItem(key) ?? 'null'); 
    return res ?? initialValue; 
  });

  const saveData = (newData: T) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData] as const;
}