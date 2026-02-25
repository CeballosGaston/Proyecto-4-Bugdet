import { useState } from "react";
import { ServiceBudget } from "./components/CardComponent/CardComponent";

function App() {
  const [seoSelected, setSeoSelected] = useState(false);
  const [adsSelected, setAdsSelected] = useState(false);
  const [webSelected, setWebSelected] = useState(false);

  return (
    <div>
      <h1>Lovecraft Budgets</h1>

      <div className="cards-container">
        <ServiceBudget
          name="SEO"
          description="A complete responsive website"
          basePrice={300}
          selected={seoSelected}
          onToggle={() => setSeoSelected(!seoSelected)}
        />
        <ServiceBudget
          name="Ads"
          description="A complete responsive website"
          basePrice={400}
          selected={adsSelected}
          onToggle={() => setAdsSelected(!adsSelected)}
        />

        <ServiceBudget
          name="Web"
          description="A complete responsive website"
          basePrice={500}
          selected={webSelected}
          onToggle={() => setWebSelected(!webSelected)}
        />
      </div>
    </div>
  );
}

export default App;
