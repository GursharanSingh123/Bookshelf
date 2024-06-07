import AddToBookshelf from "./AddToBookshelf";

function Card({ book, onAddToBookshelf, bookshelf }) {
  return (
    <div className="border-[3px] border-black rounded-lg w-[15rem] h-[18rem] py-[20px] px-[10px] overflow-hidden break-word m-[10px]">
      <div className="my-[15px]  ">
        <span className="font-bold">Book Title: </span>
        {book.title}
      </div>
      <div className="my-[15px]">
        <span className="font-bold">Edition Count:</span>
        {book.edition_count}
      </div>
      <div className="py-[15px] text-center	">
        {bookshelf.filter((entry) => entry.bookKey === book.key).length ===
        0 ? (
          <AddToBookshelf onAddToBookshelf={onAddToBookshelf} book={book} />
        ) : null}
      </div>
    </div>
  );
}

export default Card;
