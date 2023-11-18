import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

import ExpenseForm from "./expense-tracker/components/ExpenseForm";

import categories from "./expense-tracker/categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 20, category: "Utilities" },
    { id: 2, description: "aaa", amount: 20, category: "Utilities" },
    { id: 3, description: "aaa", amount: 20, category: "Utilities" },
    { id: 4, description: "aaa", amount: 20, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="container py-5">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
