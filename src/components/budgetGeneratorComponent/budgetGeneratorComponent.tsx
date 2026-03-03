import React, { useState } from "react";
import { calculateBudget } from "../../services/budgetCalculator";
import type { WebConfig, ServiceType } from "../../types/typesBudget";
import "./budgetGeneratorComponent.css";

interface BudgetGeneratorProps {
  selectedServices: ServiceType[];
  webConfig: WebConfig;
}

export const BudgetGenerator = ({
  selectedServices,
  webConfig,
}: BudgetGeneratorProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <div className="budget-generator">
      <input
        type="text"
        value={name}
        onChange={changeName}
        placeholder="name"
      />
      <input
        type="text"
        value={email}
        onChange={changeEmail}
        placeholder="email"
      />
      <input
        type="number"
        value={phone}
        onChange={changePhone}
        placeholder="phone"
      />
      <button
        onClick={() => {
          const total = calculateBudget(selectedServices, webConfig);
          console.log(total);
        }}
      >
        Create Budget
      </button>
    </div>
  );
};
