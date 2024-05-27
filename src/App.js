import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import PlacesPage from "./pages/PlacesPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import AddPlacePage from "./pages/AddPlacePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} exact /> 
        <Route path="/add-place" element={<AddPlacePage />} /> 
        <Route path="/places" element={<PlacesPage />} /> 
        <Route path="/places/:placeId" element={<PlaceDetailsPage />} /> 
        <Route path="*" element={<ErrorPage />}/> 
      </Routes>
    </Layout>
  );
}

export default App;
