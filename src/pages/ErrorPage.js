import { Helmet } from "react-helmet";
import ErrorLayout from "../components/layout/ErrorLayout";

function ErrorPage() {
    return (
        <>
            <Helmet>
                <title>Error</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>

            <ErrorLayout>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </ErrorLayout>
        </>
    );
}

export default ErrorPage;