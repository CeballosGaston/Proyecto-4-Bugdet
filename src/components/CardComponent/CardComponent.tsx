import "./cardComponent.css";
import { Add } from "../languageAndPagesComponent/addComponent";

type Props = {
  name: string;
  description: string;
  basePrice: number;
  selected: boolean;
  onToggle: () => void;
};

export function ServiceBudget({
  name, description, basePrice, selected, onToggle}: Props) {
  return (
    <article className="service-card">
      <label>
        <input type="checkbox" checked={selected} onChange={onToggle} />
      </label>

      <h3>{name}</h3>
      <p>{description}</p>
      <p>{basePrice} €</p>

      {name === "Web" && selected && (
        <div>
          <Add label=" Number of pages" />
          <Add label="Number of languages" />
        </div>
      )}
    </article>
  );
}
