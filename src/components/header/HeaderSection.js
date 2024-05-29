import { Link } from "react-router-dom";
import classes from "./HeaderSection.module.css";

function HeaderSection() {
    return ( 
        <div className={classes.section}>
            <div className={classes.section_content}>
                <h1>Travel & Explore</h1>
                <p>There are too many destinations for one lifetime so get up.</p>
                <div className={classes.btn}>                
                    <Link to="/add-place">Get Started</Link> 
                </div>
            </div>            
        </div>
    );
}

export default HeaderSection;