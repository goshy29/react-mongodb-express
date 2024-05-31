import classes from "./PlaceItemDetails.module.css";

function PlaceItemDetails(props) {
    return ( 
        <div className={classes.details}>
            <div className={classes.details_img}>
                <img src={props.place.image} alt={props.place.title}/>
            </div>
            <h1>{props.place.title}</h1>
            <h2>{props.place.place}</h2>
            <h2>{props.place.country}</h2>
            <h2>{props.place.description}</h2>
        </div>
    );
}

export default PlaceItemDetails;