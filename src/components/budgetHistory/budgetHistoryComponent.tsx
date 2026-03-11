import { useState } from "react";
import type { Budget } from "../../types/typesBudget";
import "./budgetHistoryComponent.css";

export const HistoryGenerator = () => {
  const [name, setName] = useState("");
  const budgets: Budget[] = JSON.parse(localStorage.getItem("budgets") || "[]");
  const [foundBudgets, setFoundBudgets] = useState<Budget[]>(budgets);

  return (
    <div className="history-generator">
      <h3>Budget Finder</h3>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => {
          const value = e.target.value;
          setName(value);

          if (value === "") {
            setFoundBudgets(budgets);
            return;
          }

          const results = budgets.filter((b) =>
            b.clientName.toLowerCase().includes(value.toLowerCase()),
          );

          setFoundBudgets(results);
        }}
      />
      <div></div>

      <div>
        {foundBudgets.map((b) => (
          <div key={b.id} className="budget-item">
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
