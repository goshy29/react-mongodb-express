import classes from "./AddPlaceLayout.module.css";

function AddPlaceLayout(props) {
    return ( 
        <div className={classes.add_place}>
            {props.children}
        </div> 
     );
}

export default AddPlaceLayout;