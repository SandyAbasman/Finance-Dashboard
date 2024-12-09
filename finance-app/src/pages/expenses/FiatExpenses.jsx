// /* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import ChatInput from "../../Component/ChatInput.jsx";
import DetailTitle from "../../Component/DetailTitle.jsx";
import List from "../../Component/List.jsx";
import Button from "../../Component/Button.jsx";
import FilterButton from "../../Component/FilterButton.jsx";
import downloadIcon from "../../assets/download.svg";
import { calTotal } from "../../data/Incomepagedata.js";

export default function FiatExpenses() {
  const fiatExpensesData = useLoaderData();

  const totalFiatExpenses = calTotal(fiatExpensesData);

  return (
    <div className="w-full h-auto flex flex-col justify-start item-start py-[1rem] px-[0.5rem] gap-8 ">
      <FilterButton filterNumber={2} />

      <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
        <DetailTitle
          detailName="Total Fiat Expenses"
          totalDetailAMount={totalFiatExpenses}
        />

        <div className="w-full h-auto flex flex-col justify-start items-start gap-3 ">
          {fiatExpensesData.map(function (data, index) {
            return (
              <List
                key={index}
                // amount={`$${Number(data.amount).toLocaleString()}`}
                amount={Number(data.amount)}
                date={data.date}
              />
            );
          })}
        </div>

        <div className="w-full h-auto flex flex-row justify-end items-center">
          <Button buttonName={"Download Report"} icon={downloadIcon} />
        </div>
      </div>
      <ChatInput />
    </div>
  );
}
