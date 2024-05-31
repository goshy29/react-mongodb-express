import { Helmet } from "react-helmet";
import UserForm from "../components/UIElements/UserForm";
import AddPlaceLayout from "../components/layout/AddPlaceLayout";
import MainSectionLayout from "../components/layout/MainSectionLayout";

function AddPlacePage() {
    return (
        <>
            <Helmet>
                <title>Add Place</title>  
                <meta name="description" content="Add the places of your dream you want to explore." /> 
            </Helmet>

            <AddPlaceLayout>
                <MainSectionLayout>
                    <UserForm />
                </MainSectionLayout>
            </AddPlaceLayout>
        </> 
    );
}

export default AddPlacePage;