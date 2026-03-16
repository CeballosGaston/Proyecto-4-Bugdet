import "./cardComponent.css";
import { Add } from "../languageAndPagesComponent/addComponent";


type Props = {
  name: string;
  description: string;
  basePrice: number;
  selected: boolean;
  onToggle: () => void;
  pages?: number;
  setPages?: React.Dispatch<React.SetStateAction<number>>;
  languages?: number;
  setLanguages?: React.Dispatch<React.SetStateAction<number>>;
};

export function ServiceBudget({
  name,
  description,
  basePrice,
  selected,
  onToggle,
   pages,
  setPages,
  languages,
  setLanguages,
}: Props) {
  return (
    <article className="service-card">
      <label>
        <input type="checkbox" checked={selected} onChange={onToggle} />
      </label>

      <h3>{name}</h3>
      <p>{description}</p>
      <p>{basePrice} €</p>

      {name === "Web" && selected && pages !== undefined && setPages && languages !== undefined && setLanguages && (
        <div>
          <Add
  label="Number of pages"
  value={pages}
  onIncrease={() => setPages(p => p + 1)}
  onDecrease={() => setPages(p => (p > 0 ? p - 1 : 0))}
/>

<Add
  label="Number of languages"
  value={languages}
  onIncrease={() => setLanguages(l => l + 1)}
  onDecrease={() => setLanguages(l => (l > 0 ? l - 1 : 0))}
/>
        </div>
      )}
    </article>
  );
}

