function SearchBar({searchTerm, setSearchTerm}) {
    return (
      <section>
        
          <input
            type="text"
            placeholder="Search for projects..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        
      </section>
    );
}

export default SearchBar;