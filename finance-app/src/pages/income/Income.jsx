import TabButton from "../../Component/TabButton";

export default function Income() {
  return (
    <div className="w-full h-auto md:gap-6 gap-2 flex flex-row justify-start  item-center ">
      <TabButton buttonName={"Fiat Income"} navigateTo={"/"} />
      <TabButton buttonName={"Crypto Income"} navigateTo={"cryptoIncome"} />
      <TabButton buttonName={"Total Income"} navigateTo={"totalIncome"} />
    </div>
  );
}
