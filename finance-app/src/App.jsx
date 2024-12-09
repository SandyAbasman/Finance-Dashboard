import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./root/RootLayout.jsx";

import Settings from "./pages/settings/Settings.jsx";
import Sms from "./pages/sms/Sms.jsx";
import IncomeLayout from "./root/IncomeLayout.jsx";
import FiatIncome from "./pages/income/FiatIncome.jsx";
import CryptoIncome from "./pages/income/CryptoIncome.jsx";
import TotalIncome from "./pages/income/TotalIncome.jsx";
import {
  cryptoExpensesData,
  cryptoIncomeData,
  cryptoInvestmentData,
  fiatExpensesData,
  fiatIncomeData,
  fiatInvestmentData,
  totalExpensesData,
  totalIncomeData,
  totalInvestmentData,
} from "./data/Incomepagedata.js";
import UserContextComponent from "./contextApi/UserContextComponent.jsx";
import FiatExpenses from "./pages/expenses/FiatExpenses.jsx";
import CryptoExpenses from "./pages/expenses/CryptoExpenses.jsx";
import TotalExpenses from "./pages/expenses/TotalExpenses.jsx";
import ExpensesLayout from "./root/ExpensesLayout.jsx";
import InvestmentLayout from "./root/InvestmentLayout.jsx";
import FiatInvestment from "./pages/investment/FiatInvestments.jsx";
import CryptoInvestment from "./pages/investment/CryptoInvestment.jsx";
import TotalInvestment from "./pages/investment/TotalInvestment.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<IncomeLayout />}>
          {/* income route */}
          <Route index element={<FiatIncome />} loader={fiatIncomeData} />

          <Route
            path="/"
            index
            element={<FiatIncome />}
            loader={fiatIncomeData}
          />
          <Route
            path="cryptoIncome"
            element={<CryptoIncome />}
            loader={cryptoIncomeData}
          />
          <Route
            path="totalIncome"
            element={<TotalIncome />}
            loader={totalIncomeData}
          />
        </Route>
        {/* expenses Route */}

        <Route path="expenses" element={<ExpensesLayout />}>
          <Route index element={<FiatExpenses />} loader={fiatExpensesData} />

          <Route
            path="fiatExpenses"
            element={<FiatExpenses />}
            loader={fiatExpensesData}
          />
          <Route
            path="cryptoExpenses"
            element={<CryptoExpenses />}
            loader={cryptoExpensesData}
          />
          <Route
            path="totalExpenses"
            element={<TotalExpenses />}
            loader={totalExpensesData}
          />
        </Route>

        <Route path="sms" element={<Sms />} />

        <Route path="investments" element={<InvestmentLayout />}>
          <Route
            index
            element={<FiatInvestment />}
            loader={fiatInvestmentData}
          />

          <Route
            path="fiatInvestment"
            element={<FiatInvestment />}
            loader={fiatInvestmentData}
          />
          <Route
            path="cryptoInvestment"
            element={<CryptoInvestment />}
            loader={cryptoInvestmentData}
          />
          <Route
            path="totalInvestment"
            element={<TotalInvestment />}
            loader={totalInvestmentData}
          />
        </Route>
        <Route path="settings" element={<Settings />} />
      </Route>
    )
  );

  return (
    <UserContextComponent>
      <RouterProvider router={router} />
    </UserContextComponent>
  );
}

export default App;
