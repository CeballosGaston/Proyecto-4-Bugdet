import { useState } from "react";

import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const [seoSelected, setSeoSelected] = useState(false);
  const [adsSelected, setAdsSelected] = useState(false);
  const [webSelected, setWebSelected] = useState(false);

  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  return (
    <div style={{width:"100%"}}>
      <NavBar />
      <AppRoutes
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
    </div>
  );

 
}

export default App;
