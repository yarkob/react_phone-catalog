export const useLocalStorage = <D>(
  key: string,
): [D, (value: string) => void, () => void] => {
  const data = localStorage.getItem(key);

  if (!data) {
    localStorage.setItem(key, '[]');
  }

  const setLocalStorage = (value: string) => {
    localStorage.setItem(key, value);
  };

  const removeLocalStorage = () => {
    localStorage.removeItem(key);
  };

  return [
    JSON.parse(localStorage.getItem(key) || '[]'),
    setLocalStorage,
    removeLocalStorage,
  ];
};
