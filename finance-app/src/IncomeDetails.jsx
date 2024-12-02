/* eslint-disable react/prop-types */
import DetailTitle from "./DetailTitle";
import DownloadButton from "./DownloadButton";
import FilterButton from "./filterButton";
import IncomeList from "./IncomeList";
import downloadIcon from "./assets/download.svg";

export default function IncomeDetails({ data }) {
  return (
    <div className="w-full h-auto flex flex-col justify-start item-start py-[1rem] px-[0.5rem] gap-4 ">
      <FilterButton />

      <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
        <DetailTitle
          detailName="Total Fiat Income"
          totalDetailAMount="147,000"
        />

        <div className="w-full h-auto flex flex-col justify-start items-start gap-3 ">
          {data.map(function (data, index) {
            return (
              <IncomeList key={index} amount={data.amount} date={data.date} />
            );
          })}
        </div>

        <div className="w-full h-auto flex flex-row justify-end items-center">
          <DownloadButton buttonName={"Download Report"} icon={downloadIcon} />
        </div>
      </div>
    </div>
  );
}
