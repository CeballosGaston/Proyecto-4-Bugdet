import { ServiceBudget } from "../components/CardComponent/CardComponent";
import { BudgetGenerator } from "../components/budgetGeneratorComponent/budgetGeneratorComponent";
import { SERVICES } from "../config/services";
import { useServicesBudget } from "../hooks/useServiceBudget";
import type { ServiceType } from "../types/typesBudget";
import "./servicesPage.css";
import { calculateBudget } from "../services/budgetCalculator";


export const ServicesPage = () => {
 
   const {
    seoSelected,
    setSeoSelected,
    adsSelected,
    setAdsSelected,
    webSelected,
    setWebSelected,
    pages,
    setPages,
    languages,
    setLanguages
  } = useServicesBudget();

  const selectedServices: ServiceType[] = [];
  if (seoSelected) selectedServices.push("seo");
  if (adsSelected) selectedServices.push("ads");
  if (webSelected) selectedServices.push("web");

const total = calculateBudget(selectedServices, {pages, languages});

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
      
      <p className="main-total">Total: {total} €</p>

      <BudgetGenerator
        selectedServices={selectedServices}
        webConfig={{ pages, languages }}
      />

      
    </div>
  );
};
