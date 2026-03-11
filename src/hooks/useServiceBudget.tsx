import { useState } from "react";


export const useServicesBudget = () => {
  const [seoSelected, setSeoSelected] = useState(false);
  const [adsSelected, setAdsSelected] = useState(false);
  const [webSelected, setWebSelected] = useState(false);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  return {
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
  };
};