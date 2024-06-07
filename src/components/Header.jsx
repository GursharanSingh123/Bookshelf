import { useNavigate } from "react-router-dom";

function Header({ query, setQuery }) {
  const navigate = useNavigate();
  return (
    <header className="relative h-[15rem]">
      <div className="absolute top-[2rem] left-[44%]">
        <div className="font-bold text-lg">Search by book name:</div>
        <input
          className="border-[3px] border-black rounded-lg my-4"
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="absolute top-[2rem] right-[15%]">
        <button
          onClick={() => navigate("/my-bookshelf")}
          className="bg-green-600 text-white px-[15px] py-[5px] rounded-lg"
          // onClick={handleAddingToBookshelf}
        >
          My Bookshelf
        </button>
      </div>
    </header>
  );
}

export default Header;
