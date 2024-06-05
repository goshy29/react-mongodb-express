import { useParams } from "react-router-dom";
import AllPlacesLayout from "../components/layout/AllPlacesLayout";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import PlaceItemDetails from "../components/main/PlaceItemDetails";
import { Helmet } from "react-helmet";
import { Suspense, useEffect, useState } from "react";

const data = [
    {
        id: 'p1',
        title: 'Title 1',
        place: 'Place 1',
        country: 'Country 1',
        image: "https://www.nancy-tourisme.fr/app/uploads/nancy/2019/01/place-stanislas-002-andre-thomas-1920x960.jpg",
        description:
          'One of the most vibrant cities you can visit - a trip no one should miss! 1'
    },
    {
        id: 'p2',
        title: 'Title 2',
        place: 'Place 2',
        country: 'Country 2',
        image: "https://study.com/cimages/multimages/16/eiffel_tower.jpg",
        description:
          'One of the most vibrant cities you can visit - a trip no one should miss! 2'
    },
    {
        id: 'p3',
        title: 'Title 3',
        place: 'Place 3',
        country: 'Country 3',
        image: "https://images.nationalgeographic.org/image/upload/v1652341395/EducationHub/photos/sonoran-desert.jpg",
        description:
          'One of the most vibrant cities you can visit - a trip no one should miss! 3'
    }
]

function PlaceDetailsPage() {
    const [loadedPlace, setLoadedPlace] = useState([]);
    const [error, setError] = useState();

    const { placeId } = useParams();

    useEffect(() => {
        async function fetchPlace() {
            try {
                const response = await fetch(`http://localhost:5000/api/places/${placeId}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch data.');
                }

                const data = await response.json();
                setLoadedPlace(data.place);
            } catch(err) {
                setError(err.message);
            }
        }

        fetchPlace();
    }, [placeId]);

    return (
        <>
            {loadedPlace && (
                <Helmet>
                        <title>{loadedPlace.title}</title>  
                        <meta name="description" content={loadedPlace.description} /> 
                </Helmet>
            )}

            <AllPlacesLayout>
                <MainSectionLayout>
                    <Suspense fallback={<p>Loading...</p>}>
                        {error && (<p>Error: {error}</p>)}
                        {loadedPlace && !error && (<PlaceItemDetails place={loadedPlace}/>)}
                    </Suspense>
                </MainSectionLayout>
            </AllPlacesLayout>  
        </>   
    );
}

export default PlaceDetailsPage;