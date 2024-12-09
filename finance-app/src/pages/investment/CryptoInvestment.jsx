/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import downloadIcon from "../../assets/download.svg";
import FilterButton from "../../Component/FilterButton";
import DetailTitle from "../../Component/DetailTitle";
import List from "../../Component/List";
import Button from "../../Component/Button";
import ChatInput from "../../Component/ChatInput";
import { calTotal } from "../../data/Incomepagedata";

export default function CryptoInvestment() {
  const cryptoInvestmentData = useLoaderData();

  const totalDetailAMount = calTotal(cryptoInvestmentData);

  return (
    <div className="w-full h-auto flex flex-col justify-start item-start py-[1rem] px-[0.5rem] gap-8 ">
      <FilterButton filterNumber={6} />

      <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
        <DetailTitle
          detailName="Total Cypto Investments"
          totalDetailAMount={totalDetailAMount}
        />

        <div className="w-full h-auto flex flex-col justify-start items-start gap-3 ">
          {cryptoInvestmentData.map(function (data, index) {
            return (
              <List
                key={index}
                amount={`${data.amount} BTC`}
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
