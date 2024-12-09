import TabButton from "../../Component/TabButton";

export default function Investments() {
  return (
    <div>
      <div className="w-full h-auto   gap-6 flex flex-row justify-start  item-center ">
        <TabButton
          buttonName={"Fiat Investment"}
          navigateTo={"fiatInvestment"}
        />
        <TabButton
          buttonName={"Crypto Investment"}
          navigateTo={"cryptoInvestment"}
        />
        <TabButton
          buttonName={"Total Investement"}
          navigateTo={"totalInvestment"}
        />
      </div>
    </div>
  );
}
