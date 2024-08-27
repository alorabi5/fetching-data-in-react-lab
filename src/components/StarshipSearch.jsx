import { useState } from "react";

const StarshipSearch = (props) => {

    const [searchBar, setSearchBar] = useState('');

    const handleChange = (event) => {
      setSearchBar(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        props.starshipSearch(searchBar);
    };

    return (
      <>
        <h2>Search</h2>
        <form onSubmit={handleSearch}>
          <label htmlFor="searchBar">Search Team: </label>
          <input
            id="searchBar"
            name="searchBar"
            type="text"
            value={searchBar}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
}

export default StarshipSearch;