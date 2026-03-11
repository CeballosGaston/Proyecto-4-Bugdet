import { Routes, Route } from "react-router-dom";

import { HistoryGenerator } from "./components/budgetHistory/budgetHistoryComponent";

import { ServicesPage } from "./pages/ServicesPage";

interface AppRoutesProps {
  
  seoSelected: boolean;
  setSeoSelected: React.Dispatch<React.SetStateAction<boolean>>;

  adsSelected: boolean;
  setAdsSelected: React.Dispatch<React.SetStateAction<boolean>>;

  webSelected: boolean;
  setWebSelected: React.Dispatch<React.SetStateAction<boolean>>;

  pages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;

  languages: number;
  setLanguages: React.Dispatch<React.SetStateAction<number>>;
}

export const AppRoutes = ({
  seoSelected,
  setSeoSelected,
  adsSelected,
  setAdsSelected,
  webSelected,
  setWebSelected,
  pages,
  setPages,
  languages,
  setLanguages,
}: AppRoutesProps) => (
  <Routes>
    <Route
      path="/services"
      element={
        <ServicesPage
          seoSelected={seoSelected}
          setSeoSelected={setSeoSelected}
          adsSelected={adsSelected}
          setAdsSelected={setAdsSelected}
          webSelected={webSelected}
          setWebSelected={setWebSelected}
          pages={pages}
          setPages={setPages}
          languages={languages}
          setLanguages={setLanguages}
        />
      }
    />
    <Route path="/history" element={<HistoryGenerator />} />
  </Routes>
);
