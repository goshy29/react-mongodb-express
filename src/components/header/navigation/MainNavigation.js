import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import NavLinks from "../NavLinks";

function MainNavigation(props) {
    return ( 
        <nav className={classes.navbar}>
            <button className={classes.mobileNav_btn_menu} onClick={props.onClick}>
                <span />
                <span />
                <span />
            </button>

            <div>
                <Link to="/" className={classes.navbar_logo_link}>YOURPLACES</Link>
            </div>
            <ul className={classes.navbar_list}>
                <NavLinks/>
            </ul>
        </nav>
    );
}

export default MainNavigation;