/* eslint-disable react/prop-types */
function DetailTitle({ detailName, totalDetailAMount }) {
  return (
    <div className="w-full p-[2rem]  bg-[#FAFAFA] rounded-md  h-auto flex flex-row justify-between item-center">
      <h2 className="md:text-[1.5rem] text-[1rem]  text-[#565656] ">
        {detailName}
      </h2>
      <div className="w-fit h-auto flex flex-row justify-start items-center">
        <p className="text-[#00B600] text-xl md:text-3xl">
          {totalDetailAMount}
        </p>
        <select className=" text-[#636363]">
          <option value="usd">USD</option>
          <option value="btc">BTC</option>
          <option value="ngn">NGN</option>
        </select>
      </div>
    </div>
  );
}

export default DetailTitle;
