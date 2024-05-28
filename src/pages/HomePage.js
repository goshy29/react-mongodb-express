import HeaderSection from "../components/header/HeaderSection";
import MainSectionLayout from "../components/layout/MainSectionLayout";

function HomePage() {
    return (
        <>
            <HeaderSection/>
            <MainSectionLayout>
                <h1>Main Content</h1>
            </MainSectionLayout>
        </> 
    );
}

export default HomePage;