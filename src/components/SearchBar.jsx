function SearchBar({searchTerm, setSearchTerm}) {
    return (
      <section>

        <div className="search-bar">
            <label htmlFor="search">Search Projects</label>
          <input
            type="text"
            placeholder="Search for projects..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </section>
    );
}

export default SearchBar;