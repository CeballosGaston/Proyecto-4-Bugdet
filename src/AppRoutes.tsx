import { Routes, Route } from "react-router-dom";
import { BudgetGenerator } from "./components/budgetGeneratorComponent/budgetGeneratorComponent";
import { HistoryGenerator } from "./components/budgetHistory/budgetHistoryComponent";
import type { ServiceType } from "./types/typesBudget";

interface AppRoutesProps {
  selectedServices: ServiceType[];
  webConfig: { pages: number; languages: number };
}

export const AppRoutes = ({ selectedServices, webConfig }: AppRoutesProps) => (
  <Routes>
    <Route path="/" element={
        <BudgetGenerator
          selectedServices={selectedServices}
          webConfig={webConfig}
        />
      }
    />
    <Route path="/history" element={<HistoryGenerator />} />
  </Routes>
);
