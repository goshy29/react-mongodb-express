import classes from "./AddPlace.module.css";

function AddPlace(props) {
    return ( 
        <div className={classes.add_place}>
            {props.children}
        </div> 
     );
}

export default AddPlace;