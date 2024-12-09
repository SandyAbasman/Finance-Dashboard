import { useLoaderData } from "react-router-dom";
import ChatInput from "../../Component/ChatInput";
import DetailTitle from "../../Component/DetailTitle";
import Button from "../../Component/Button";
import FilterButton from "../../Component/FilterButton";
import List from "../../Component/List";
import downloadIcon from "../../assets/download.svg";
import { calTotal } from "../../data/Incomepagedata";

export default function TotalExpenses() {
  const totalExpensesData = useLoaderData();

  const totalDetailAMount = calTotal(totalExpensesData);
  return (
    <div className="w-full h-auto flex flex-col justify-start item-start py-[1rem] px-[0.5rem] gap-8 ">
      <FilterButton filterNumber={2} />

      <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
        <DetailTitle
          detailName="Total Expenses"
          totalDetailAMount={totalDetailAMount.toLocaleString()}
        />

        <div className="w-full h-auto flex flex-col justify-start items-start gap-3 ">
          {totalExpensesData.map(function (data, index) {
            return (
              <List
                key={index}
                amount={`$${data.amount}`}
                date={data.date}
                currency={data.currency}
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
