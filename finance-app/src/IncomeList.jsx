/* eslint-disable react/prop-types */

export default function IncomeList({ amount, date }) {
  return (
    <div className="w-full h-auto p-[0.4rem]  flex flex-row justify-between items-start  border-[#00B658] border-l-2">
      <div className="w-fit h-auto flex flex-col justify-start items-start">
        <p className="font-semibold  text-lg">${amount}</p>
        <p className="text-[#868686]  font-light text-sm">{date}</p>
      </div>

      <div className="w-fit h-auto">
        <p className="text-[#868686]  font-light text-sm">See Detail</p>
      </div>
    </div>
  );
}
