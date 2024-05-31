import { Helmet } from "react-helmet";
import ErrorLayout from "../components/layout/ErrorLayout";

function ErrorPage() {
    return ( 
        <>
            <Helmet>
                    <title>Error</title>  
                    <meta name="description" content="Page Not Found." /> 
            </Helmet>
            
            <ErrorLayout>
                <h1>Page Not Found</h1>
            </ErrorLayout>
        </>
    );
}

export default ErrorPage;