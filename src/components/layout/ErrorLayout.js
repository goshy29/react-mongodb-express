import classes from "./ErrorLayout.module.css";

function ErrorLayout(props) {
    return ( 
        <div className={classes.error}>
            {props.children}
        </div>
    );
}

export default ErrorLayout;