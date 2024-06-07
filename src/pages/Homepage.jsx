import Content from "../components/Content";
import Header from "../components/Header";

function Homepage({ query, setQuery, books, onAddToBookshelf, bookshelf }) {
  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <Content
        books={books}
        onAddToBookshelf={onAddToBookshelf}
        bookshelf={bookshelf}
      />
    </div>
  );
}

export default Homepage;
