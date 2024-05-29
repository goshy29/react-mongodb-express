import UserForm from "../components/UIElements/UserForm";
import AddPlace from "../components/layout/AddPlace";
import MainSectionLayout from "../components/layout/MainSectionLayout";

function AddPlacePage() {
    return ( 
        <AddPlace>
            <MainSectionLayout>
                <UserForm />
            </MainSectionLayout>
        </AddPlace>
    );
}

export default AddPlacePage;