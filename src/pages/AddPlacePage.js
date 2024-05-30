import UserForm from "../components/UIElements/UserForm";
import AddPlaceLayout from "../components/layout/AddPlaceLayout";
import MainSectionLayout from "../components/layout/MainSectionLayout";

function AddPlacePage() {
    return ( 
        <AddPlaceLayout>
            <MainSectionLayout>
                <UserForm />
            </MainSectionLayout>
        </AddPlaceLayout>
    );
}

export default AddPlacePage;