import classes from "./HeaderSection.module.css";

function HeaderSection() {
    return ( 
        <div className={classes.section}>
            <div className={classes.section_content}>
                <h1>Travel & Explore</h1>
                <p>Hepta is an ultra-clean minimalistic travel website template.</p>
            </div>            
        </div>    
    );
}

export default HeaderSection;