import classes from "./MainSectionLayout.module.css";

function MainSectionLayout(props) {
    return (             
        <section className={classes.section}>
            {props.children}
        </section>
    );
}

export default MainSectionLayout;