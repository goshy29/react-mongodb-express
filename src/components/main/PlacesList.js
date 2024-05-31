import classes from "./PlacesList.module.css";
import PlaceItem from "./PlaceItem";

function PlacesList(props) {
    return ( 
        <ul className={classes.place_items}>
            {props.places.map((place) => (
                <li key={place.id}>
                    <PlaceItem 
                        id={place.id}
                        image={place.image} 
                        title={place.title} 
                        place={place.place}  
                    />
                </li>
            ))}  
        </ul>
    );
}

export default PlacesList;