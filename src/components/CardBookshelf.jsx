function CardBookshelf({ book }) {
  return (
    <div className="border-[3px] border-black rounded-lg w-[15rem] h-[18rem] py-[20px] px-[10px] overflow-hidden break-word m-[10px]">
      <div className="my-[15px]  ">
        <span className="font-bold">Book Title: </span>
        {book.bookTitle}
      </div>
      <div className="my-[15px]">
        <span className="font-bold">Edition Count:</span>
        {book.bookEditionCount}
      </div>
    </div>
  );
}

export default CardBookshelf;
