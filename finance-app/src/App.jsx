import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
// import Income from "./Income.jsx"
import Investments from "./Investments.jsx";
import Settings from "./Settings.jsx";
import Sms from "./Sms.jsx";
import Expenses from "./Expenses.jsx";
import IncomeLayout from "./IncomeLayout.jsx";
import FiatIncome, { data } from "./FiatIncome.jsx";
import CryptoIncome from "./CryptoIncome.jsx";
import TotalIncome from "./TotalIncome.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<IncomeLayout />}>
          <Route index loader={data} element={<FiatIncome />} />

          <Route path="fiat" element={<FiatIncome />} />
          <Route path="crypto" element={<CryptoIncome />} />
          <Route path="total" element={<TotalIncome />} />
        </Route>

        <Route path="expenses" element={<Expenses />} />
        <Route path="sms" element={<Sms />} />
        <Route path="investments" element={<Investments />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
