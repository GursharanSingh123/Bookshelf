import { useEffect, useState } from "react";

export function useBooks(query) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchBooks() {
        try {
          setError("");

          const res = await fetch(
            // `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
            `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching books");

          const data = await res.json();
          if (data.Response === "False") throw new Error("book not found");
          setBooks(data.docs);
          // console.log(data.docs);
          //   console.log(res);
          //   console.log(data);
        } catch (err) {
          // console.error(err.message);
          if (err.name !== "AbortError") setError(err.message);
        }
      }
      if (query.length < 3) {
        setBooks([]);
        setError("");
        return;
      }
      fetchBooks();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { books, error };
}
