import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const bookshelfOnMount = localStorage.getItem(key);
    // console.log(JSON.parse(bookshelfOnMount));
    // console.log(value);
    return JSON.parse(bookshelfOnMount) || initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
