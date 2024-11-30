import ChatInput from "./ChatInput";
import IncomeDetails from "./IncomeDetails";

export default function TotalIncome() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-start ">
      <IncomeDetails detailName="Total Income" totalDetailAMount="47,6000" />
      <ChatInput />
    </div>
  );
}
