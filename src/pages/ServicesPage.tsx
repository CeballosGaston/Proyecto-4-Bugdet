import { ServiceBudget } from "../components/CardComponent/CardComponent";
import { BudgetGenerator } from "../components/budgetGeneratorComponent/budgetGeneratorComponent";
import { SERVICES } from "../config/services";
import type { ServiceType } from "../types/typesBudget";
import "./servicesPage.css";
import { useState } from "react";

export const ServicesPage = () => {
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
      <h1 className="main-title">Choose your services</h1>

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

      <BudgetGenerator
        selectedServices={selectedServices}
        webConfig={{ pages, languages }}
      />
    </div>
  );
};
