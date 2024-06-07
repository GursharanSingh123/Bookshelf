function AddToBookshelf({ onAddToBookshelf, book }) {
  function handleAddingToBookshelf() {
    const newBook = {
      bookTitle: book.title,
      bookEditionCount: book.edition_count,
      bookKey: book.key,
    };
    onAddToBookshelf(newBook);
    // console.log(newBook);
  }
  return (
    <button
      className="bg-green-600 text-white px-[15px] py-[5px] rounded-lg"
      onClick={handleAddingToBookshelf}
    >
      Add to Bookshelf
    </button>
  );
}

export default AddToBookshelf;
