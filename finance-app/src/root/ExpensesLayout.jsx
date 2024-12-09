import { Outlet } from "react-router-dom";
import Expenses from "../pages/expenses/Expenses";

export default function ExpensesLayout() {
  return (
    <div className="w-full h-full px-[2rem] py-[2rem] ">
      <Expenses />
      <Outlet />
    </div>
  );
}
