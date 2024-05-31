import { Helmet } from "react-helmet";
import HeaderSection from "../components/header/HeaderSection";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import HomeSection from "../components/main/HomeSection";

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home</title>  
                <meta name="description" content="Welcome to the Home Page of My Website." /> 
            </Helmet>

            <HeaderSection/>
            <MainSectionLayout>
                <HomeSection />
            </MainSectionLayout>
        </> 
    );
}

export default HomePage;