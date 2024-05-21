
const Search = ({ search, setSearch}) => {
  return (
    <div className="search">
        <h2>Perquisar</h2>

        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..."></input>
    </div>
  )
}

export default Search