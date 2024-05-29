import classes from "./AllPlaces.module.css";

function AllPlaces(props) {
    return ( 
        <div className={classes.all_places}>
            {props.children}
        </div>
    );
}

export default AllPlaces;