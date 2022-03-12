import "../assets/css/App.css";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DescriptionPage from "../pages/DescriptionPage";
import VacationPropertiesPage from "../pages/VacationPropertiesPage";
import PropertyTypes from "../pages/PropertyTypes";
import RegistrationPage from "../pages/RegistrationPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/bestseller/:id" element={<DescriptionPage />} />
        <Route
          path="/vacationProperties"
          element={<VacationPropertiesPage />}
        />
        <Route path="/property/:id" element={<DescriptionPage />} />
        <Route path="/propertyType/:title" element={<PropertyTypes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
