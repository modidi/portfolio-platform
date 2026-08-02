function SearchBar({searchTerm, setSearchTerm}) {
    return (
        
      // Search input that filters projects by title or tags.
      <section>
        <input
          type="text"
          placeholder="Search projects by title or tags..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </section>
    );
}

export default SearchBar;