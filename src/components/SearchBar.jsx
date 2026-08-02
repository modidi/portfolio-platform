function SearchBar({searchTerm, setSearchTerm}) {
    return (
      <section>
        
        {/* Update the displayed projects as the user types. */}
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