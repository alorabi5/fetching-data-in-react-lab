// src/App.jsx
import "./App.css";
import { useState, useEffect } from "react";

import starshipService from "./services/starshipService";

import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";


const App = () => {

  const [starships, setStarships] = useState([]);
  const [numResults, setNumResults] = useState(0);


  
  const getStarships = async () => {
    const data = await starshipService.index();

    setNumResults(data.count);
    setStarships(data.results);
  }

  const starshipSearch = async (name) => {
    const data = await starshipService.search(name);
    setNumResults(data.count);
    setStarships(data.results);
    console.log(data.results)
  };

  
  

  useEffect(() => {
    getStarships();
  }, []);

  return (
    <>
      <h1>Star Wars API</h1>

      <StarshipSearch starshipSearch={starshipSearch} />

      <StarshipList numResults={numResults} starships={starships} />
    </>
  );
};

export default App;
