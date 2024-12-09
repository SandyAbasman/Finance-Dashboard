import TabButton from "../../Component/TabButton";

export default function Expenses() {
  return (
    <div className="w-full h-auto   gap-6 flex flex-row justify-start  item-center ">
      <TabButton buttonName={"Fiat Expenses"} navigateTo={"fiatExpenses"} />
      <TabButton buttonName={"Crypto Expenses"} navigateTo={"cryptoExpenses"} />
      <TabButton buttonName={"Total Expenses"} navigateTo={"totalExpenses"} />
    </div>
  );
}
