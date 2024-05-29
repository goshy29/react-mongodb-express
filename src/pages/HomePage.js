import HeaderSection from "../components/header/HeaderSection";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import HomeSection from "../components/main/HomeSection";

function HomePage() {
    return (
        <>
            <HeaderSection/>
            <MainSectionLayout>
                <HomeSection />
            </MainSectionLayout>
        </> 
    );
}

export default HomePage;