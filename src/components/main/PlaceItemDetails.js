import { useNavigate } from "react-router-dom";
import classes from "./PlaceItemDetails.module.css";
import { useState } from "react";

function PlaceItemDetails(props) {
    const navigate = useNavigate();
    const [error, setError] = useState();

    function handlerEditPlace() {
        navigate('/add-place', {state: {place: props.place}});
    }

    async function handlerDeletePlace() {
        const confirmDelete = window.confirm(`Do you want to Delete ${props.place.title}?`);
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:5000/api/places/${props.place._id}`, {
                    method: "DELETE"
                });

                if (!response.ok) {
                    throw new Error('Failed to delete the place.');
                }

                navigate('/places');
            } catch (err) {
                setError(err.message);
            }
        }
    }

    return (
        <div className={classes.content}>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <div className={classes.details}>
                    <img src={props.place.image} alt={props.place.title} />
                    <h1>Title: {props.place.title}</h1>
                    <h2>Place: {props.place.place}</h2>
                    <address>Country: {props.place.country}</address>
                    <p>Description: {props.place.description}</p>
                    <div className={classes.btn_container}>
                        <button className={classes.btn_edit} onClick={handlerEditPlace}>Edit Details</button> 
                        <button className={classes.btn_delete} onClick={handlerDeletePlace}>Delete Place</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlaceItemDetails;