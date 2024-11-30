import ChatInput from "./ChatInput";
import IncomeDetails from "./IncomeDetails";

export default function FiatIncome() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-start ">
      <IncomeDetails
        detailName="Total Fiat Income"
        totalDetailAMount="147,000"
      />
      <ChatInput />
    </div>
  );
}
