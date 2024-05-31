import { Link } from "react-router-dom";
import classes from "./PlaceItem.module.css";

function PlaceItem(props) {
    return ( 
        <div className={classes.section}>
            <div className={classes.section_img}>
                <img src={props.image} alt="An image showing George"/>
            </div>
            <div className={classes.section_about}>
                <h2>{props.title}</h2>
                <p>{props.place}</p> 
                <div className={classes.btn_show_detail}>                
                    <Link to={`/places/${props.id}`}>Show Details</Link> 
                </div>
            </div>  
        </div> 
    );
}

export default PlaceItem;