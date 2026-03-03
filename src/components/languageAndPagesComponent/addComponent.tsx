
import "./addComponent.css";

type Props = {
  label: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export const Add = ({ label, value, onIncrease, onDecrease }: Props) => {
  return (
    <div className="add-component">
      <label>{label}</label>
      <button onClick={onDecrease}>-</button>
      <span className="count">{value}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};