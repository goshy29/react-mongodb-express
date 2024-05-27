import classes from "./Navigation.module.css";
import { useState } from "react";
import MainNavigation from "./navigation/MainNavigation";

function Navigation() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function handlerOpenMobileNav() {
        setIsMobileNavOpen(true);
    }

    function handlerCloseMobileNav() {
        setIsMobileNavOpen(false);
    }

    return ( 
        <>


            <header className={classes.main_header}>
                <MainNavigation onClick={handlerOpenMobileNav}/>
            </header>
        </>
    );
}

export default Navigation;