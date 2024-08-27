import StarshipCard from "./StarshipCard";




const StarshipList = (props) => {

    const cards = props.starships.map((starShipEl, idx) => (
      <li key={idx}>
        <StarshipCard starShipEl={starShipEl} />
      </li>
    ));

  return (
    <>
      <h2>Starships</h2>
      <p>Number of results: {props.numResults}</p>
      {props.numResults !== 0 ? <ul>{cards}</ul> : 'Loading...'}
    </>
  );
};

export default StarshipList;