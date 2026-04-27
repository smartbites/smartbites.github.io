function SearchBar({ label, className = '', style }) {
  const searchLabel = label || 'Search';

  return (
    <form
      className={`search-bar ${className}`.trim()}
      style={style}
      action="/"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Search is disabled in this static build.');
      }}
    >
      <input
        className="search-bar__input"
        aria-label={searchLabel}
        name="q"
        placeholder={searchLabel}
        type="search"
      />
      <button className="search-bar__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
