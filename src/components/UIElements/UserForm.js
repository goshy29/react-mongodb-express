import { useEffect, useRef, useState } from "react";
import classes from "./UserForm.module.css";

function UserForm(props) {
    const { place } = props;

    const titleInputRef = useRef();
    const placeInputRef = useRef();
    const countryInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (place) {
            titleInputRef.current.value = place.title;
            placeInputRef.current.value = place.place;
            countryInputRef.current.value = place.country;
            imageInputRef.current.value = place.image;
            descriptionInputRef.current.value = place.description;
        }
    }, [place]);

    function handlerSubmit(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredPlace = placeInputRef.current.value;
        const enteredCountry = countryInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        if (enteredTitle.trim() === "" || enteredPlace.trim() === "" || enteredCountry.trim() === "" ||
            enteredImage.trim() === "" || enteredDescription.trim() === "") {
            setErrorMessage("All fields must be filled.");
            return;
        }

        const placeData = {
            title: enteredTitle,
            place: enteredPlace,
            country: enteredCountry,
            image: enteredImage,
            description: enteredDescription
        }

        props.onPlaceSubmit(placeData);
    }

    return (
        <div className={classes.form_wrap}>
            <p className={classes.form_title}>{place ? "Edit Place" : "Add Place"}</p>
            <form className={classes.form} onSubmit={handlerSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" required id="title" placeholder="Title" ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="place">Place</label>
                    <input type="text" required id="place" placeholder="Place" ref={placeInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="country">Country</label>
                    <input type="text" required id="country" placeholder="Country" ref={countryInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image URL</label>
                    <input type="url" required id="image" placeholder="Image URL" ref={imageInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required id="description" rows="5" placeholder="Enter Description" ref={descriptionInputRef}
                    />
                </div>
                {errorMessage && (<p className={classes.error_message}>{errorMessage}</p>)}
                <div className={classes.actions}>
                    <button type="submit">{place ? "Save Changes" : "Add Place"}</button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;