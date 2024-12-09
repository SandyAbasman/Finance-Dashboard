import { Outlet } from "react-router-dom";
import Income from "../pages/income/Income.jsx";

export default function IncomeLayout() {
  return (
    <div className="w-full h-full md:px-[2rem] md:py-[2rem] p-2 ">
      <Income />
      <Outlet />
    </div>
  );
}
