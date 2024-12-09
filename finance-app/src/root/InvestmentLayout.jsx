import { Outlet } from "react-router-dom";
import Investments from "../pages/investment/Investments";

function InvestmentLayout() {
  return (
    <div className="w-full h-full px-[2rem] py-[2rem] ">
      <Investments />
      <Outlet />
    </div>
  );
}

export default InvestmentLayout;
