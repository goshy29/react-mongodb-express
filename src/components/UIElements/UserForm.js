import classes from "./UserForm.module.css";

function UserForm() {
    function handlerSubmit(event) {
        event.preventDefault();

    }

    return ( 
        <div className={classes.form_wrap}>
            <p className={classes.form_title}>Add Place</p>
            <form className={classes.form} onSubmit={handlerSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" required id="title" //ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="place">Place</label>
                    <input type="text" required id="place" //ref={placeInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="country">Country</label>
                    <input type="url" required id="country" //ref={countryInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image URL</label>
                    <input type="text" required id="image" //ref={imageInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required id="description" rows="5" //ref={descriptionInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit">Add Place</button>
                </div>
            </form>    
        </div>
    );
}

export default UserForm;