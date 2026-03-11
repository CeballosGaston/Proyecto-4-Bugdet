import React, { useState } from "react";
import { calculateBudget } from "../../services/budgetCalculator";
import type { WebConfig, ServiceType, Budget } from "../../types/typesBudget";
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
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = () => {
    const nameTrimmed: string = name.trim();
    const emailTrimmed: string = email.trim();
    const nameRegex: RegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
    const emailRegex: RegExp =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumber = parseInt(phone);
    const errors: string[] = [];
    if (nameRegex.test(nameTrimmed) === false) {
      errors.push("The name can't be empty and it has to be letters.");
    }
    if (emailTrimmed === "" || emailRegex.test(emailTrimmed) === false) {
      errors.push("The email doesn't has the correct format.");
    }
    if (isNaN(phoneNumber)) {
      errors.push("The phone it has to be a number.");
    }

    if (errors.length === 0) {
      const totalNumber = calculateBudget(selectedServices, webConfig);
      setTotal(totalNumber);

      const newBudget: Budget = {
        id: crypto.randomUUID(),
        clientName: name,
        clientEmail: email,
        clientPhone: phone,
        service: selectedServices,
        total: totalNumber,
        createdAt: new Date().toISOString(),
      };

      const existingBudgets = localStorage.getItem("budgets");
      const budgets = existingBudgets ? JSON.parse(existingBudgets) : [];
      budgets.push(newBudget);
      localStorage.setItem("budgets", JSON.stringify(budgets));
    }

    setErrorMessage(errors);
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

       

      <button onClick={handleSubmit}>Create Budget</button>
      <div className="budget-generator-text">
        {" "}
        {errorMessage.map((m, index) => (
          <p key={index}>{m}</p>
        ))}{" "}
        {errorMessage.length === 0 && <p>Total Budget: {total} € </p>}
      </div>
    </div>
  );
};
