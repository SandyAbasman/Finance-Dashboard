import { Outlet } from "react-router-dom";
import Income from "./Income.jsx";

export default function IncomeLayout() {
  return (
    <div className="w-full h-full px-[2rem] py-[2rem] ">
      <Income />
      <Outlet />
    </div>
  );
}
