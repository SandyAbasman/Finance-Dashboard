// /* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import ChatInput from "../../Component/ChatInput.jsx";
import DetailTitle from "../../Component/DetailTitle.jsx";
import List from "../../Component/List.jsx";
import Button from "../../Component/Button.jsx";
import FilterButton from "../../Component/FilterButton.jsx";
import downloadIcon from "../../assets/download.svg";
import { calTotal } from "../../data/Incomepagedata.js";

export default function FiatIncome() {
  const fiatIncomeData = useLoaderData();

  const totalFiatIncome = calTotal(fiatIncomeData);

  return (
    <div className="w-full h-auto flex flex-col justify-start item-start  px-[0.4rem] py-[0.5rem] md:py-[1rem] md:px-[0.5rem] gap-6 md:gap-8 ">
      <FilterButton filterNumber={2} />

      <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
        <DetailTitle
          detailName="Total Fiat Income"
          totalDetailAMount={`$${totalFiatIncome.toLocaleString()}`}
        />

        <div className="w-full h-auto flex flex-col justify-start items-start gap-3 ">
          {fiatIncomeData.map(function (data, index) {
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
