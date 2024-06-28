import { Helmet } from "react-helmet";
import UserForm from "../components/UIElements/UserForm";
import AddPlaceLayout from "../components/layout/AddPlaceLayout";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function AddPlacePage() {
    const navigate = useNavigate();
    const[error, setError] = useState();

    const location = useLocation();
    // If "location.state" exists and has a "place" property(In case from where we call AddPlacePage component)
    const place = location.state?.place || null;


    async function handlerAddPlace(placeData) {
        try {
            const response = await fetch("http://localhost:5000/api/places",
                {
                    method: "POST",
                    body: JSON.stringify(placeData),
                    headers: { "Content-Type": "application/json" }
                }
            );

            if (!response.ok) {
                throw new Error("Failed to save the place.");
            }

            navigate("/places");
        } catch (err) {
            setError(err.message);
        }
    }

    async function handlerUpdatePlace(placeId, placeData) {
        try {
            const response = await fetch(`http://localhost:5000/api/places/${placeId}`,
                {
                    method: "PATCH",
                    body: JSON.stringify(placeData),
                    headers: { "Content-Type": "application/json" }
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update the place.");
            }

            navigate(`/places/${placeId}`);
        } catch (err) {
            setError(err.message);
        }
    }

    function handlerPlaceSubmit(placeData) {
        if (place) {
            handlerUpdatePlace(place._id, placeData);
        } else {
            handlerAddPlace(placeData);
        }
    }

    return (
        <>
            <Helmet>
                <title>Add Place</title>
                <meta name="description" content="Add the places of your dream you want to explore." />
            </Helmet>

            <AddPlaceLayout>
                <MainSectionLayout>
                    {error ? 
                        (<h3>Error: {error}</h3>) : 
                        (<UserForm onPlaceSubmit={handlerPlaceSubmit} place={place} />)
                    }
                </MainSectionLayout>
            </AddPlaceLayout>
        </>
    );
}

export default AddPlacePage;