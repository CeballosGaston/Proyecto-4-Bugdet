import React, { useState } from "react";
import { calculateBudget } from "../../services/budgetCalculator";
import type { WebConfig, ServiceType } from "../../types/typesBudget";

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
    <div>
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
        placeholder="name"
      />
      <input
        type="number"
        value={phone}
        onChange={changePhone}
        placeholder="name"
      />
      <button onClick={() => calculateBudget(selectedServices, webConfig)}>
        Create Budget
      </button>
    </div>
  );
};
