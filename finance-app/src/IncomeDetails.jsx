/* eslint-disable react/prop-types */
const details = [
  {
    amount: "10,0000",
    date: " 19 March,2024 ",
  },
  {
    amount: "20,000",
    date: " 8 March,2024 ",
  },
  {
    amount: "27,000",
    date: " 20 March,2024 ",
  },
];

export default function IncomeDetails({ detailName, totalDetailAMount }) {
  return (
    <div className="w-full h-auto flex flex-col justify-start item-start py-[1rem] px-[0.5rem] gap-4 ">
      <div className="w-full h-auto flex flex-row justify-end item-start">
        <select className=" bg-[#F8F8F8] p-2 rounded-md text-[#848484]">
          <option value="">Filter Applied : 2</option>
          <option value="">Days</option>
        </select>
      </div>

      <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
        <div className="w-full p-[2rem] bg-[#FAFAFA] rounded-md  h-auto flex flex-row justify-between item-center">
          <h2 className="text-[1.5rem] text-[#565656] ">{detailName}</h2>
          <div className="w-fit h-auto flex flex-row justify-start items-center">
            <p className="text-[#00B600]">{totalDetailAMount}</p>
            <select className=" text-[#636363]">
              <option value="">USD</option>
              <option value="">USD</option>
            </select>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-3 ">
          {details.map(function (item, index) {
            return (
              <div
                key={index}
                className="w-full h-auto p-[0.4rem]  flex flex-row justify-between items-start  border-[#00B658] border-l-2"
              >
                <div className="w-fit h-auto flex flex-col justify-start items-start">
                  <p className="font-semibold  text-lg">${item.amount}</p>
                  <p className="text-[#868686]  font-light text-sm">
                    {item.date}
                  </p>
                </div>

                <div className="w-fit h-auto">
                  <p className="text-[#868686]  font-light text-sm">
                    See Detail
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-auto flex flex-row justify-end items-start">
          <button className=" bg-[#F8F8F8] p-4 rounded-md text-[#848484]">
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}
