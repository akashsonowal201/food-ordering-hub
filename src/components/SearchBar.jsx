import "./SearchBar.css";

function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search-bar">

      <input
        className="search-input"
        type="text"
        placeholder="🔍 Search your favourite food..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;