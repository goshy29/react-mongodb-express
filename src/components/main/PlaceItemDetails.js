import { useNavigate } from "react-router-dom";
import classes from "./PlaceItemDetails.module.css";

function PlaceItemDetails(props) {
    const navigate = useNavigate();

    function handleEditPlace() {
        navigate('/add-place', {state: {place: props.place}});
    }

    return (
        <div className={classes.content}>
            <div className={classes.details}>
                <img src={props.place.image} alt={props.place.title} />
                <h1>Title: {props.place.title}</h1>
                <h2>Place: {props.place.place}</h2>
                <address>Country: {props.place.country}</address>
                <p>Description: {props.place.description}</p>
                <button className={classes.btn_edit} onClick={handleEditPlace}>Edit Details</button> 
            </div>
        </div>
    );
}

export default PlaceItemDetails;