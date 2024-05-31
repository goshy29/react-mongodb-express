import classes from "./PlaceItemDetails.module.css";

function PlaceItemDetails(props) {
    return (
        <div className={classes.content}>
            <div className={classes.details}>
                <img src={props.place.image} alt={props.place.title} />
                <h1>{props.place.title}</h1>
                <h2>{props.place.place}</h2>
                <address>{props.place.country}</address>
                <p>{props.place.description}</p>
            </div>
        </div>
    );
}

export default PlaceItemDetails;