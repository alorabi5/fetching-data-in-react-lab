const StarshipCard = (props) =>{
    return (
      <>
        <h4>{props.starShipEl.name}</h4>
        <p>Class: {props.starShipEl.starship_class}</p>
        <p>Manufacturer: {props.starShipEl.manufacturer}</p>
        <p>Model: {props.starShipEl.model}</p>
      </>
    );
}

export default StarshipCard;