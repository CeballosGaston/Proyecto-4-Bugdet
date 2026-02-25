import { useState } from "react";
import "./addComponent.css"

type Props = {
  label: string;
};

export const Add = ({ label }: Props) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="add-component">
      <label>{label}</label>
      <button onClick={decrease}>-</button>
      <input type="number" value={count} />
      <button onClick={increase}>+</button>
    </div>
  );
};
