import CardBookshelf from "../components/CardBookshelf";

function MyBookshelf({ bookshelf }) {
  return (
    <>
      <div className="absolute left-[46%] font-bold text-lg ">My Bookshelf</div>
      <div className="absolute top-[10%] grid grid-cols-4 w-[70%] ml-[5rem]">
        {bookshelf?.map((bookEntry, i) => (
          <CardBookshelf book={bookEntry} key={i} />
        ))}
      </div>
    </>
  );
}

export default MyBookshelf;
