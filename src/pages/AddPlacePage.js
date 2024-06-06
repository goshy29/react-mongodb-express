import { Helmet } from "react-helmet";
import UserForm from "../components/UIElements/UserForm";
import AddPlaceLayout from "../components/layout/AddPlaceLayout";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import { useLocation, useNavigate } from "react-router-dom";

function AddPlacePage() {
    const navigate = useNavigate();

    const location = useLocation();
    // If "location.state" exists and has a "place" property(In case from where we call AddPlacePage component)
    const place = location.state?.place || null;
    

    async function handlerAddPlace(placeData) {
        try {
            const response = await fetch("http://localhost:5000/api/places", 
                {
                    method: "POST",
                    body: JSON.stringify(placeData),
                    headers: {"Content-Type": "application/json"}
                }
            );

            if (!response.ok) {
                throw new Error("Failed to post the place.");
            }

            navigate('/places');
        } catch(err) {
            console.log(err);
        }
    }

    async function handlerUpdatePlace(placeData) {

    }

    return (
        <>
            <Helmet>
                <title>Add Place</title>  
                <meta name="description" content="Add the places of your dream you want to explore." /> 
            </Helmet>

            <AddPlaceLayout>
                <MainSectionLayout>
                    <UserForm onAddPlace={handlerAddPlace} place={place}/>
                </MainSectionLayout>
            </AddPlaceLayout>
        </> 
    );
}

export default AddPlacePage;