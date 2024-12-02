/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import ChatInput from "./ChatInput.jsx";
import IncomeDetails from "./IncomeDetails.jsx";

export default function FiatIncome() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="w-full h-full flex flex-col justify-between items-start ">
      <IncomeDetails data={data} />
      <ChatInput />
    </div>
  );
}

export const data = async function () {
  const res = await fetch("http://localhost:4000/details");
  return res.json();
};
