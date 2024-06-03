import { Helmet } from "react-helmet";
import UserForm from "../components/UIElements/UserForm";
import AddPlaceLayout from "../components/layout/AddPlaceLayout";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import { useLocation } from "react-router-dom";

function AddPlacePage() {
    const location = useLocation();
    const place = location.state?.place || null;

    return (
        <>
            <Helmet>
                <title>Add Place</title>  
                <meta name="description" content="Add the places of your dream you want to explore." /> 
            </Helmet>

            <AddPlaceLayout>
                <MainSectionLayout>
                    <UserForm place={place}/>
                </MainSectionLayout>
            </AddPlaceLayout>
        </> 
    );
}

export default AddPlacePage;