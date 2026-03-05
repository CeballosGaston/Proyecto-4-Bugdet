import { useState } from "react";
import type { Budget } from "../../types/typesBudget";
import "./budgetHistoryComponent.css";

export const HistoryGenerator = () => {
  const [name, setName] = useState("");
  const [foundBudgets, setFoundBudgets] = useState<Budget[]>([]);
  const storedBudgets = localStorage.getItem("budgets");
  let budgets: Budget[] = [];

  if (storedBudgets) {
    budgets = JSON.parse(storedBudgets) as Budget[];
  }

  const handleFind = () => {
    const results = budgets.filter((b) => b.clientName === name);
    setFoundBudgets(results);
  };


  const allBudgets = ()=> {
setFoundBudgets(budgets);

  }

  return (
    <div className="history-generator">
      <h3>Budget Finder</h3>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleFind}>Find Budget With That Name</button>
      <button onClick={allBudgets}>Find All Budgets</button>

      <div>
        {foundBudgets.map((b, i) => (
          <div key={i} className="budget-item">
            <p>Name: {b.clientName}</p>
            <p>Email: {b.clientEmail}</p>
            <p>Date: {new Date(b.createdAt).toLocaleDateString("es-ES")}</p>
            <p>Services: {b.service.join(",")}</p>
            <p>Total: {b.total} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};
