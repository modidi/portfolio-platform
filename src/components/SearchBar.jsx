function SearchBar({searchTerm, setSearchTerm}) {
    return (
      <section>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </section>
    );
}

export default SearchBar;