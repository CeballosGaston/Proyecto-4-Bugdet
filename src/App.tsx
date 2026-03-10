import { useState } from "react";
import { ServiceBudget } from "./components/CardComponent/CardComponent";
import { SERVICES } from "./config/services";
import type { ServiceType } from "./types/typesBudget";
import { AppRoutes } from "./AppRoutes";
import { Link } from "react-router-dom";

function App() {
  const [seoSelected, setSeoSelected] = useState(false);
  const [adsSelected, setAdsSelected] = useState(false);
  const [webSelected, setWebSelected] = useState(false);

  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  const selectedServices: ServiceType[] = [];

  if (seoSelected) selectedServices.push("seo");
  if (adsSelected) selectedServices.push("ads");
  if (webSelected) selectedServices.push("web");

  return (
    <div>
      <h1>Budgets</h1>
        <nav>
        <Link to="/">Budgets</Link>
        {" | "}
        <Link to="/history">History</Link>
      </nav>


    

      <div className="cards-container">
        <ServiceBudget
          name={SERVICES[0].name}
          description={SERVICES[0].description}
          basePrice={SERVICES[0].basePrice}
          selected={seoSelected}
          onToggle={() => setSeoSelected(!seoSelected)}
        />
        <ServiceBudget
          name={SERVICES[1].name}
          description={SERVICES[1].description}
          basePrice={SERVICES[1].basePrice}
          selected={adsSelected}
          onToggle={() => setAdsSelected(!adsSelected)}
        />

        <ServiceBudget
          name={SERVICES[2].name}
          description={SERVICES[2].description}
          basePrice={SERVICES[2].basePrice}
          selected={webSelected}
          onToggle={() => setWebSelected(!webSelected)}
          pages={pages}
          setPages={setPages}
          languages={languages}
          setLanguages={setLanguages}
        />
      </div>
       <AppRoutes
        selectedServices={selectedServices}
        webConfig={{ pages, languages }}
      />

      {/* <HistoryGenerator /> */}
    </div>
  );
}

export default App;
