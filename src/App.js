import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MyBookshelf from "./pages/MyBookshelf";
import PageNotFound from "./pages/PageNotFound";
import { useBooks } from "./custom hooks/useBooks";
import { useState } from "react";
import { useLocalStorageState } from "./custom hooks/useLocalStorageState";

function App() {
  const [query, setQuery] = useState("");
  const { books} = useBooks(query);
  // here error has not been used because it was not instructed ,i added it here so in future if needed the error can be used directly .
  const [bookshelf, setBookshelf] = useLocalStorageState([], "bookshelf");
  function handleAddToBookshelf(book) {
    console.log(bookshelf);
    setBookshelf((previousBookshelf) => [...previousBookshelf, book]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              query={query}
              setQuery={setQuery}
              books={books}
              bookshelf={bookshelf}
              onAddToBookshelf={handleAddToBookshelf}
            />
          }
        ></Route>
        <Route
          path="my-bookshelf"
          element={
            <MyBookshelf
              bookshelf={bookshelf}
              onAddToBookshelf={handleAddToBookshelf}
            />
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
