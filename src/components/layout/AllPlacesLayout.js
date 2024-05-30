import classes from "./AllPlacesLayout.module.css";

function AllPlacesLayout(props) {
    return ( 
        <div className={classes.all_places}>
            {props.children}
        </div>
    );
}

export default AllPlacesLayout;