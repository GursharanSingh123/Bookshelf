import Card from "./Card";

function Content({ books, onAddToBookshelf, bookshelf }) {
  return (
    <div className="grid grid-cols-4 gap-2 w-[70%] ml-[5rem]">
      {books?.map((book, i) => (
        <Card
          book={book}
          key={i}
          onAddToBookshelf={onAddToBookshelf}
          bookshelf={bookshelf}
        />
      ))}
    </div>
  );
}

export default Content;
