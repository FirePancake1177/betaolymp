const Search = () => {
  return <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search blog posts</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search blog posts"
    />
    <button type="submit">Search</button>
  </form>
}

export default Search;
