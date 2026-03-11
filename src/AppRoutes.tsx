import { Routes, Route } from "react-router-dom";

import { HistoryGenerator } from "./components/budgetHistory/budgetHistoryComponent";

import { ServicesPage } from "./pages/ServicesPage";



export const AppRoutes = () => (
  <Routes>
    <Route path="/services" element={<ServicesPage/>}/>
    <Route path="/history" element={<HistoryGenerator/>} />
  </Routes>
);
